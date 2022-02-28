type defaultSize = 'S' | 'M' | 'L' | 'XL'

export interface ProductVariation {
  name: string
  price: string
  description: string
  weight: string
  color: string
  size: string
  width: string
  height: string
}

export type BasicProductVariation = Omit<ProductVariation, "weight" | "color" | "size" | "width" | "height">;
