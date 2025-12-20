const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

export interface Product {
  id: number
  name: string
  description: string
  price: number
  sku: string
  image_url: string
  image_thumbnail_url?: string
  stock: number
  specifications?: Record<string, string>
  category_id: number
  created_at: string
  updated_at: string
}

export interface Category {
  id: number
  name: string
  slug: string
  description: string
  created_at: string
  updated_at: string
}

export interface Contact {
  name: string
  email: string
  phone?: string
  category: 'sales_inquiry' | 'tech_support' | 'general'
  message: string
}

export interface PaginatedResponse<T> {
  data: T[]
  current_page: number
  last_page: number
  per_page: number
  total: number
}

class ApiClient {
  private baseUrl: string

  constructor(baseUrl: string = API_URL) {
    this.baseUrl = baseUrl
  }

  private async fetch(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}${endpoint}`
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Unknown error' }))
      throw new Error(error.message || `API Error: ${response.status}`)
    }

    return response.json()
  }

  // Products
  async getProducts(page = 1, filters: {
    search?: string
    category_id?: number
    sort_by?: string
    order?: string
  } = {}) {
    const params = new URLSearchParams({
      page: page.toString(),
      per_page: '12',
      ...(filters.search && { search: filters.search }),
      ...(filters.category_id && { category_id: filters.category_id.toString() }),
      ...(filters.sort_by && { sort_by: filters.sort_by }),
      ...(filters.order && { order: filters.order }),
    })

    return this.fetch(`/products?${params.toString()}`) as Promise<PaginatedResponse<Product>>
  }

  async getProduct(id: number) {
    return this.fetch(`/products/${id}`) as Promise<Product>
  }

  // Categories
  async getCategories() {
    return this.fetch('/categories') as Promise<Category[]>
  }

  async getCategory(id: number) {
    return this.fetch(`/categories/${id}`) as Promise<Category>
  }

  // Contacts
  async submitContact(data: Contact) {
    return this.fetch('/contacts', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }
}

export const api = new ApiClient()
