import { useState, useEffect } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { useCategories } from "@/hooks/useCategories";
import { formatPriceWithCurrency } from "@/lib/utils";
import { BRANDS } from "@/lib/constants";

export interface ProductFilterValues {
  search: string;
  categoryId: number | undefined;
  brands: string[];
  minPrice: number | undefined;
  maxPrice: number | undefined;
  condition: string | undefined;
  inStock: boolean | undefined;
  sortBy: string;
  order: string;
}

interface ProductFiltersProps {
  filters: ProductFilterValues;
  onFilterChange: (filters: ProductFilterValues) => void;
  resultCount?: number;
}

const PRICE_RANGES = [
  { label: "Semua Harga", min: undefined, max: undefined },
  { label: "< 2 Juta", min: undefined, max: 2000000 },
  { label: "2 - 4 Juta", min: 2000000, max: 4000000 },
  { label: "4 - 7 Juta", min: 4000000, max: 7000000 },
  { label: "7 - 10 Juta", min: 7000000, max: 10000000 },
  { label: "> 10 Juta", min: 10000000, max: undefined },
];

const SORT_OPTIONS = [
  { label: "Terbaru", value: "created_at", order: "desc" },
  { label: "Terlama", value: "created_at", order: "asc" },
  { label: "Harga: Rendah - Tinggi", value: "price", order: "asc" },
  { label: "Harga: Tinggi - Rendah", value: "price", order: "desc" },
  { label: "Nama: A - Z", value: "name", order: "asc" },
  { label: "Nama: Z - A", value: "name", order: "desc" },
];

const CONDITIONS = [
  { label: "Semua Kondisi", value: undefined },
  { label: "Baru", value: "New" },
  { label: "Bekas", value: "Used" },
  { label: "Refurbished", value: "Refurbished" },
];

const ProductFilters = ({ filters, onFilterChange, resultCount }: ProductFiltersProps) => {
  const { data: categories = [], isLoading: loadingCategories } = useCategories();
  const [localSearch, setLocalSearch] = useState(filters.search);
  const [isOpen, setIsOpen] = useState(false);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      if (localSearch !== filters.search) {
        onFilterChange({ ...filters, search: localSearch });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [localSearch]);

  const handleReset = () => {
    const resetFilters: ProductFilterValues = {
      search: "",
      categoryId: undefined,
      brands: [],
      minPrice: undefined,
      maxPrice: undefined,
      condition: undefined,
      inStock: undefined,
      sortBy: "created_at",
      order: "desc",
    };
    setLocalSearch("");
    onFilterChange(resetFilters);
    setIsOpen(false);
  };

  const handlePriceRangeChange = (range: typeof PRICE_RANGES[0]) => {
    onFilterChange({
      ...filters,
      minPrice: range.min,
      maxPrice: range.max,
    });
  };

  const handleSortChange = (sortValue: string) => {
    const option = SORT_OPTIONS.find(opt => `${opt.value}_${opt.order}` === sortValue);
    if (option) {
      onFilterChange({
        ...filters,
        sortBy: option.value,
        order: option.order,
      });
    }
  };

  const getActiveFilterCount = () => {
    let count = 0;
    if (filters.search) count++;
    if (filters.categoryId) count++;
    if (filters.brands && filters.brands.length > 0) count++;
    if (filters.minPrice || filters.maxPrice) count++;
    if (filters.condition) count++;
    if (filters.inStock) count++;
    return count;
  };

  const activeFilterCount = getActiveFilterCount();

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="space-y-2">
        <Label htmlFor="category">Kategori</Label>
        <Select
          value={filters.categoryId?.toString() || "all"}
          onValueChange={(value) =>
            onFilterChange({
              ...filters,
              categoryId: value === "all" ? undefined : parseInt(value),
            })
          }
        >
          <SelectTrigger id="category">
            <SelectValue placeholder="Pilih kategori" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Kategori</SelectItem>
            {loadingCategories ? (
              <SelectItem value="loading" disabled>
                Memuat kategori...
              </SelectItem>
            ) : (
              categories.map((cat) => (
                <SelectItem key={cat.id} value={cat.id.toString()}>
                  {cat.name}
                </SelectItem>
              ))
            )}
          </SelectContent>
        </Select>
      </div>

      {/* Brand Filter - Multi-select with Checkboxes */}
      <div className="space-y-2">
        <Label>Brand</Label>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {BRANDS.map((brand) => {
            const isChecked = filters.brands.includes(brand.name);
            return (
              <div key={brand.name} className="flex items-center space-x-2">
                <Checkbox
                  id={`brand-${brand.name}`}
                  checked={isChecked}
                  onCheckedChange={(checked) => {
                    const newBrands = checked
                      ? [...filters.brands, brand.name]
                      : filters.brands.filter((b) => b !== brand.name);
                    onFilterChange({ ...filters, brands: newBrands });
                  }}
                />
                <label
                  htmlFor={`brand-${brand.name}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {brand.name}
                </label>
              </div>
            );
          })}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="space-y-2">
        <Label>Range Harga</Label>
        <div className="grid grid-cols-2 gap-2">
          {PRICE_RANGES.map((range, index) => {
            const isActive =
              filters.minPrice === range.min && filters.maxPrice === range.max;
            return (
              <Button
                key={index}
                variant={isActive ? "default" : "outline"}
                size="sm"
                onClick={() => handlePriceRangeChange(range)}
                className="text-xs"
              >
                {range.label}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Custom Price Range */}
      <div className="space-y-2">
        <Label>Harga Custom</Label>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Input
              type="number"
              placeholder="Min"
              value={filters.minPrice || ""}
              onChange={(e) =>
                onFilterChange({
                  ...filters,
                  minPrice: e.target.value ? parseInt(e.target.value) : undefined,
                })
              }
            />
          </div>
          <div>
            <Input
              type="number"
              placeholder="Max"
              value={filters.maxPrice || ""}
              onChange={(e) =>
                onFilterChange({
                  ...filters,
                  maxPrice: e.target.value ? parseInt(e.target.value) : undefined,
                })
              }
            />
          </div>
        </div>
      </div>

      {/* Condition Filter */}
      <div className="space-y-2">
        <Label htmlFor="condition">Kondisi</Label>
        <Select
          value={filters.condition || "all"}
          onValueChange={(value) =>
            onFilterChange({
              ...filters,
              condition: value === "all" ? undefined : value,
            })
          }
        >
          <SelectTrigger id="condition">
            <SelectValue placeholder="Pilih kondisi" />
          </SelectTrigger>
          <SelectContent>
            {CONDITIONS.map((cond, index) => (
              <SelectItem key={index} value={cond.value || "all"}>
                {cond.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Stock Filter */}
      <div className="flex items-center justify-between">
        <Label htmlFor="inStock">Hanya Stok Tersedia</Label>
        <Button
          variant={filters.inStock ? "default" : "outline"}
          size="sm"
          onClick={() =>
            onFilterChange({
              ...filters,
              inStock: filters.inStock ? undefined : true,
            })
          }
        >
          {filters.inStock ? "Aktif" : "Nonaktif"}
        </Button>
      </div>

      {/* Reset Button */}
      {activeFilterCount > 0 && (
        <Button variant="outline" className="w-full" onClick={handleReset}>
          <X className="h-4 w-4 mr-2" />
          Reset Semua Filter
        </Button>
      )}
    </div>
  );

  return (
    <div className="space-y-4">
      {/* Search and Sort Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search Input */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Cari laptop, smartphone, printer..."
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Sort Dropdown */}
        <Select
          value={`${filters.sortBy}_${filters.order}`}
          onValueChange={handleSortChange}
        >
          <SelectTrigger className="w-full sm:w-[220px]">
            <SelectValue placeholder="Urutkan" />
          </SelectTrigger>
          <SelectContent>
            {SORT_OPTIONS.map((option, index) => (
              <SelectItem key={index} value={`${option.value}_${option.order}`}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Filter Button (Mobile) */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="relative">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filter
              {activeFilterCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {activeFilterCount}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filter Produk</SheetTitle>
              <SheetDescription>
                Temukan produk yang sesuai dengan kebutuhan Anda
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Active Filters Display */}
      {activeFilterCount > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted-foreground">Filter aktif:</span>
          {filters.search && (
            <Badge variant="secondary" className="gap-1">
              Search: {filters.search}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => {
                  setLocalSearch("");
                  onFilterChange({ ...filters, search: "" });
                }}
              />
            </Badge>
          )}
          {filters.categoryId && (
            <Badge variant="secondary" className="gap-1">
              Kategori: {categories.find(c => c.id === filters.categoryId)?.name}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => onFilterChange({ ...filters, categoryId: undefined })}
              />
            </Badge>
          )}
          {filters.brands && filters.brands.length > 0 && (
            <Badge variant="secondary" className="gap-1">
              Brand: {filters.brands.join(", ")}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => onFilterChange({ ...filters, brands: [] })}
              />
            </Badge>
          )}
          {(filters.minPrice || filters.maxPrice) && (
            <Badge variant="secondary" className="gap-1">
              Harga: {filters.minPrice ? formatPriceWithCurrency(filters.minPrice) : "Min"} -{" "}
              {filters.maxPrice ? formatPriceWithCurrency(filters.maxPrice) : "Max"}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() =>
                  onFilterChange({ ...filters, minPrice: undefined, maxPrice: undefined })
                }
              />
            </Badge>
          )}
          {filters.condition && (
            <Badge variant="secondary" className="gap-1">
              {CONDITIONS.find(c => c.value === filters.condition)?.label}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => onFilterChange({ ...filters, condition: undefined })}
              />
            </Badge>
          )}
          {filters.inStock && (
            <Badge variant="secondary" className="gap-1">
              Stok Tersedia
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => onFilterChange({ ...filters, inStock: undefined })}
              />
            </Badge>
          )}
        </div>
      )}

      {/* Result Count */}
      {resultCount !== undefined && (
        <p className="text-sm text-muted-foreground">
          Menampilkan {resultCount} produk
        </p>
      )}
    </div>
  );
};

export default ProductFilters;
