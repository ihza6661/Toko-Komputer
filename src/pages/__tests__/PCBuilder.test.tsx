import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import PCBuilder from '../PCBuilder';
import * as analytics from '@/lib/analytics';

// Mock analytics
vi.mock('@/lib/analytics', () => ({
  trackEvent: vi.fn(),
  trackWhatsAppClick: vi.fn(),
}));

// Mock useToast
vi.mock('@/hooks/use-toast', () => ({
  useToast: () => ({
    toast: vi.fn(),
  }),
}));

// Mock Header and Footer to simplify tests
vi.mock('@/components/Header', () => ({
  default: () => <div data-testid="header">Header</div>,
}));

vi.mock('@/components/Footer', () => ({
  default: () => <div data-testid="footer">Footer</div>,
}));

// Helper to render with router and helmet provider
const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <HelmetProvider>
      <BrowserRouter>{component}</BrowserRouter>
    </HelmetProvider>
  );
};

describe('PCBuilder', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Initial Render', () => {
    it('should render the page with title and description', () => {
      renderWithProviders(<PCBuilder />);
      
      expect(screen.getByText('Rakit PC Custom Sesuai Budget Anda')).toBeInTheDocument();
      expect(screen.getByText(/Pilih budget dan kegunaan/i)).toBeInTheDocument();
    });

    it('should render budget selection step', () => {
      renderWithProviders(<PCBuilder />);
      
      expect(screen.getByText('Pilih Budget Anda')).toBeInTheDocument();
      expect(screen.getByText('3 - 5 Juta')).toBeInTheDocument();
      expect(screen.getByText('5 - 8 Juta')).toBeInTheDocument();
      expect(screen.getByText('8 - 12 Juta')).toBeInTheDocument();
      expect(screen.getByText('> 12 Juta')).toBeInTheDocument();
    });

    it('should not show use case selection initially', () => {
      renderWithProviders(<PCBuilder />);
      
      expect(screen.queryByText('Pilih Kegunaan PC')).not.toBeInTheDocument();
    });

    it('should not show recommendations initially', () => {
      renderWithProviders(<PCBuilder />);
      
      expect(screen.queryByText('Rekomendasi PC Anda')).not.toBeInTheDocument();
    });
  });

  describe('Budget Selection', () => {
    it('should show use case selection after budget is selected', () => {
      renderWithProviders(<PCBuilder />);
      
      const budgetButton = screen.getByText('5 - 8 Juta');
      fireEvent.click(budgetButton);
      
      expect(screen.getByText('Pilih Kegunaan PC')).toBeInTheDocument();
      expect(screen.getByText('Office & Productivity')).toBeInTheDocument();
      expect(screen.getByText('Gaming')).toBeInTheDocument();
      expect(screen.getByText('Content Creation')).toBeInTheDocument();
    });

    it('should track analytics when budget is selected', () => {
      renderWithProviders(<PCBuilder />);
      
      const budgetButton = screen.getByText('5 - 8 Juta');
      fireEvent.click(budgetButton);
      
      expect(analytics.trackEvent).toHaveBeenCalledWith(
        'button_click',
        'select_budget',
        '5-8',
        undefined,
        expect.objectContaining({
          location: 'pc-builder',
          budgetRange: '5-8',
        })
      );
    });

    it('should apply active styling to selected budget', () => {
      renderWithProviders(<PCBuilder />);
      
      const budgetButton = screen.getByText('5 - 8 Juta').closest('button');
      expect(budgetButton).toHaveAttribute('aria-pressed', 'false');
      
      fireEvent.click(budgetButton!);
      
      expect(budgetButton).toHaveAttribute('aria-pressed', 'true');
    });
  });

  describe('Use Case Selection', () => {
    beforeEach(() => {
      renderWithProviders(<PCBuilder />);
      // Select budget first
      const budgetButton = screen.getByText('5 - 8 Juta');
      fireEvent.click(budgetButton);
    });

    it('should show recommendations after use case is selected', () => {
      const useCaseButton = screen.getByText('Gaming');
      fireEvent.click(useCaseButton);
      
      expect(screen.getByText('Rekomendasi PC Anda')).toBeInTheDocument();
      expect(screen.getByText('Spesifikasi Lengkap')).toBeInTheDocument();
      expect(screen.getByText('Detail & Performa')).toBeInTheDocument();
    });

    it('should track analytics when use case is selected', () => {
      const useCaseButton = screen.getByText('Gaming');
      fireEvent.click(useCaseButton);
      
      expect(analytics.trackEvent).toHaveBeenCalledWith(
        'button_click',
        'select_use_case',
        'gaming',
        undefined,
        expect.objectContaining({
          location: 'pc-builder',
          budget: '5-8',
          useCase: 'gaming',
        })
      );
    });

    it('should apply active styling to selected use case', () => {
      const useCaseButton = screen.getByText('Gaming').closest('button');
      expect(useCaseButton).toHaveAttribute('aria-pressed', 'false');
      
      fireEvent.click(useCaseButton!);
      
      expect(useCaseButton).toHaveAttribute('aria-pressed', 'true');
    });
  });

  describe('Disabled Use Case Buttons (Template Availability)', () => {
    it('should disable Content Creation for 3-5 Juta budget', () => {
      renderWithProviders(<PCBuilder />);
      
      // Select 3-5 Juta budget
      fireEvent.click(screen.getByText('3 - 5 Juta'));
      
      // Find Content Creation button
      const contentButton = screen.getByText('Content Creation').closest('button');
      
      // Should be disabled
      expect(contentButton).toBeDisabled();
      expect(contentButton).toHaveAttribute('aria-disabled', 'true');
      expect(contentButton).toHaveClass('cursor-not-allowed');
      
      // Should show "Tidak tersedia" text
      expect(screen.getByText('Tidak tersedia')).toBeInTheDocument();
    });

    it('should enable all use cases for 5-8 Juta budget', () => {
      renderWithProviders(<PCBuilder />);
      
      // Select 5-8 Juta budget
      fireEvent.click(screen.getByText('5 - 8 Juta'));
      
      // All buttons should be enabled
      const officeButton = screen.getByText('Office & Productivity').closest('button');
      const gamingButton = screen.getByText('Gaming').closest('button');
      const contentButton = screen.getByText('Content Creation').closest('button');
      
      expect(officeButton).not.toBeDisabled();
      expect(gamingButton).not.toBeDisabled();
      expect(contentButton).not.toBeDisabled();
    });

    it('should disable Office for 8-12 Juta budget', () => {
      renderWithProviders(<PCBuilder />);
      
      // Select 8-12 Juta budget
      fireEvent.click(screen.getByText('8 - 12 Juta'));
      
      // Find Office button
      const officeButton = screen.getByText('Office & Productivity').closest('button');
      
      // Should be disabled
      expect(officeButton).toBeDisabled();
      expect(officeButton).toHaveAttribute('aria-disabled', 'true');
    });

    it('should disable Office for >12 Juta budget', () => {
      renderWithProviders(<PCBuilder />);
      
      // Select >12 Juta budget
      fireEvent.click(screen.getByText('> 12 Juta'));
      
      // Find Office button
      const officeButton = screen.getByText('Office & Productivity').closest('button');
      
      // Should be disabled
      expect(officeButton).toBeDisabled();
    });

    it('should not trigger onClick when disabled button is clicked', () => {
      renderWithProviders(<PCBuilder />);
      
      // Select 3-5 Juta budget
      fireEvent.click(screen.getByText('3 - 5 Juta'));
      
      // Try to click disabled Content Creation button
      const contentButton = screen.getByText('Content Creation').closest('button');
      fireEvent.click(contentButton!);
      
      // Should not show recommendations (Step 3)
      expect(screen.queryByText('Rekomendasi PC Anda')).not.toBeInTheDocument();
      
      // Analytics should not be called for disabled button
      expect(analytics.trackEvent).not.toHaveBeenCalledWith(
        'button_click',
        'select_use_case',
        'content',
        expect.anything(),
        expect.anything()
      );
    });

    it('should show helpful tooltip for unavailable combinations', () => {
      renderWithProviders(<PCBuilder />);
      
      // Select 3-5 Juta budget
      fireEvent.click(screen.getByText('3 - 5 Juta'));
      
      // Find Content Creation button
      const contentButton = screen.getByText('Content Creation').closest('button');
      
      // Should have title attribute with helpful message
      expect(contentButton).toHaveAttribute('title', expect.stringContaining('Budget belum mencukupi'));
    });
  });

  describe('PC Recommendations', () => {
    beforeEach(() => {
      renderWithProviders(<PCBuilder />);
      // Select budget and use case
      fireEvent.click(screen.getByText('5 - 8 Juta'));
      fireEvent.click(screen.getByText('Gaming'));
    });

    it('should display correct specifications', () => {
      expect(screen.getByText('Intel Core i5-12400F / AMD Ryzen 5 5600')).toBeInTheDocument();
      expect(screen.getByText('16GB DDR4')).toBeInTheDocument();
      expect(screen.getByText('RTX 3060 / RX 6600')).toBeInTheDocument();
    });

    it('should display correct price estimation', () => {
      expect(screen.getByText(/Rp 7\.500\.000/)).toBeInTheDocument();
    });

    it('should display performance targets', () => {
      expect(screen.getByText(/GTA V, Fortnite, Apex Legends/)).toBeInTheDocument();
    });

    it('should display WhatsApp consultation button', () => {
      expect(screen.getByText('Konsultasi & Rakit via WhatsApp')).toBeInTheDocument();
    });

    it('should display reset button', () => {
      expect(screen.getByText('Coba Konfigurasi Lain')).toBeInTheDocument();
    });
  });

  describe('Reset Functionality', () => {
    it('should reset selections when reset button is clicked', () => {
      renderWithProviders(<PCBuilder />);
      
      // Select budget and use case
      fireEvent.click(screen.getByText('5 - 8 Juta'));
      fireEvent.click(screen.getByText('Gaming'));
      
      // Verify recommendation is shown
      expect(screen.getByText('Rekomendasi PC Anda')).toBeInTheDocument();
      
      // Click reset button
      const resetButton = screen.getByText('Coba Konfigurasi Lain');
      fireEvent.click(resetButton);
      
      // Verify selections are reset
      expect(screen.queryByText('Rekomendasi PC Anda')).not.toBeInTheDocument();
      expect(screen.queryByText('Pilih Kegunaan PC')).not.toBeInTheDocument();
    });

    it('should track analytics when reset is clicked', () => {
      renderWithProviders(<PCBuilder />);
      
      // Select budget and use case
      fireEvent.click(screen.getByText('5 - 8 Juta'));
      fireEvent.click(screen.getByText('Gaming'));
      
      // Click reset
      const resetButton = screen.getByText('Coba Konfigurasi Lain');
      fireEvent.click(resetButton);
      
      expect(analytics.trackEvent).toHaveBeenCalledWith(
        'button_click',
        'reset_pc_builder',
        'reset',
        undefined,
        expect.objectContaining({
          location: 'pc-builder',
        })
      );
    });
  });

  describe('WhatsApp Integration', () => {
    beforeEach(() => {
      // Mock window.open
      vi.stubGlobal('open', vi.fn(() => true));
    });

    it('should open WhatsApp with correct parameters', async () => {
      renderWithProviders(<PCBuilder />);
      
      // Select budget and use case
      fireEvent.click(screen.getByText('5 - 8 Juta'));
      fireEvent.click(screen.getByText('Gaming'));
      
      // Click WhatsApp button
      const whatsappButton = screen.getByText('Konsultasi & Rakit via WhatsApp');
      fireEvent.click(whatsappButton);
      
      await waitFor(() => {
        expect(window.open).toHaveBeenCalled();
        const callArg = (window.open as any).mock.calls[0][0];
        expect(callArg).toContain('https://wa.me/628115757717');
        expect(callArg).toContain('Budget%3A%205-8%20Juta');
        expect(callArg).toContain('Gaming');
      });
    });

    it('should track WhatsApp click analytics', async () => {
      renderWithProviders(<PCBuilder />);
      
      // Select budget and use case
      fireEvent.click(screen.getByText('5 - 8 Juta'));
      fireEvent.click(screen.getByText('Gaming'));
      
      // Click WhatsApp button
      const whatsappButton = screen.getByText('Konsultasi & Rakit via WhatsApp');
      fireEvent.click(whatsappButton);
      
      await waitFor(() => {
        expect(analytics.trackWhatsAppClick).toHaveBeenCalledWith({
          type: 'pc_builder',
          location: 'pc-builder-page',
          productName: 'PC 5-8 Juta - Gaming Mainstream',
          buttonText: 'Konsultasi & Rakit via WhatsApp',
        });
      });
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA labels on budget buttons', () => {
      renderWithProviders(<PCBuilder />);
      
      const budgetButton = screen.getByText('5 - 8 Juta').closest('button');
      expect(budgetButton).toHaveAttribute('aria-label');
      expect(budgetButton).toHaveAttribute('aria-pressed');
    });

    it('should have proper ARIA labels on use case buttons', () => {
      renderWithProviders(<PCBuilder />);
      
      // Select budget first
      fireEvent.click(screen.getByText('5 - 8 Juta'));
      
      const useCaseButton = screen.getByText('Gaming').closest('button');
      expect(useCaseButton).toHaveAttribute('aria-label');
      expect(useCaseButton).toHaveAttribute('aria-pressed');
    });
  });

  describe('Template Key Generation', () => {
    it('should generate correct template key for office PC', () => {
      renderWithProviders(<PCBuilder />);
      
      fireEvent.click(screen.getByText('3 - 5 Juta'));
      fireEvent.click(screen.getByText('Office & Productivity'));
      
      // Verify correct specs are shown for 3-5_office
      expect(screen.getByText('Intel Core i3-12100 / AMD Ryzen 3 4100')).toBeInTheDocument();
    });

    it('should generate correct template key for content creation', () => {
      renderWithProviders(<PCBuilder />);
      
      fireEvent.click(screen.getByText('5 - 8 Juta'));
      fireEvent.click(screen.getByText('Content Creation'));
      
      // Verify correct specs are shown for 5-8_content
      expect(screen.getByText('512GB NVMe SSD + 1TB HDD')).toBeInTheDocument();
    });

    it('should generate correct template key for high-end gaming', () => {
      renderWithProviders(<PCBuilder />);
      
      fireEvent.click(screen.getByText('> 12 Juta'));
      fireEvent.click(screen.getByText('Gaming'));
      
      // Verify correct specs are shown for 12+_gaming
      expect(screen.getByText('Intel Core i7-13700F / AMD Ryzen 7 7700X')).toBeInTheDocument();
      expect(screen.getByText('32GB DDR5')).toBeInTheDocument();
    });
  });
});
