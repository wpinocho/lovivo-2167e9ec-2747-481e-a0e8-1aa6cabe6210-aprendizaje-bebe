import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { HeadlessProductCard } from "@/components/headless/HeadlessProductCard"
import { Heart, Shield, Award } from "lucide-react"
import type { Product } from "@/lib/supabase"

/**
 * EDITABLE UI COMPONENT - ProductCardUI
 * 
 * Tarjeta de producto especializada para tienda de bebés con necesidades especiales
 */

interface ProductCardUIProps {
  product: Product
}

export const ProductCardUI = ({ product }: ProductCardUIProps) => {
  return (
    <HeadlessProductCard product={product}>
      {(logic) => (
        <Card className="bg-white border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group overflow-hidden">
          <CardContent className="p-0">
            <Link to={`/products/${logic.product.slug}`} className="block">
              <div className="aspect-square bg-gradient-to-br from-baby-blue/20 to-baby-mint/20 overflow-hidden relative">
                {(logic.matchingVariant?.image || (logic.product.images && logic.product.images.length > 0)) ? (
                  <img
                    src={(logic.matchingVariant?.image as any) || logic.product.images![0]}
                    alt={logic.product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-primary/40">
                    <Heart className="h-16 w-16" />
                  </div>
                )}

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {logic.discountPercentage && (
                    <span className="bg-accent text-white text-xs px-2 py-1 rounded-full font-medium shadow-sm">
                      -{logic.discountPercentage}%
                    </span>
                  )}
                  {logic.product.featured && (
                    <span className="bg-primary text-white text-xs px-2 py-1 rounded-full font-medium shadow-sm flex items-center gap-1">
                      <Award className="h-3 w-3" />
                      Destacado
                    </span>
                  )}
                  {!logic.inStock && (
                    <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-sm">
                      Agotado
                    </span>
                  )}
                </div>

                {/* Safety Badge */}
                <div className="absolute top-3 right-3">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow-sm">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </div>
            </Link>

            <div className="p-4">
              <Link to={`/products/${logic.product.slug}`} className="block">
                <h3 className="text-foreground font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {logic.product.title}
                </h3>
                {logic.product.description && (
                  <p className="text-foreground/60 text-xs mb-3 line-clamp-2 leading-relaxed">
                    {logic.product.description.replace(/<[^>]*>/g, '')}
                  </p>
                )}
              </Link>

              {logic.hasVariants && logic.options && (
                <div className="mb-4 space-y-3">
                  {logic.options.map((opt) => (
                    <div key={opt.id}>
                      <div className="text-xs font-medium text-foreground mb-2">{opt.name}</div>
                      <div className="flex flex-wrap gap-2">
                        {opt.values.filter(val => logic.isOptionValueAvailable(opt.name, val)).map((val) => {
                          const isSelected = logic.selected[opt.name] === val
                          const swatch = opt.name.toLowerCase() === 'color' ? opt.swatches?.[val] : undefined

                          if (swatch) {
                            return (
                              <button
                                key={val}
                                type="button"
                                onClick={() => logic.handleOptionChange(opt.name, val)}
                                title={`${opt.name}: ${val}`}
                                className={`h-6 w-6 rounded-full border-2 transition-all ${
                                  isSelected ? 'border-primary scale-110' : 'border-gray-200 hover:border-primary/50'
                                } ${logic.selected[opt.name] && !isSelected ? 'opacity-40' : ''}`}
                                style={{ 
                                  backgroundColor: swatch
                                }}
                                aria-label={`${opt.name}: ${val}`}
                              />
                            )
                          }

                          return (
                            <button
                              key={val}
                              type="button"
                              onClick={() => logic.handleOptionChange(opt.name, val)}
                              className={`border rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                                isSelected 
                                  ? 'border-primary bg-primary text-white shadow-sm' 
                                  : logic.selected[opt.name] && !isSelected
                                    ? 'border-gray-200 bg-white text-gray-400 opacity-40'
                                    : 'border-gray-200 bg-white text-foreground hover:border-primary/50 hover:bg-primary/5'
                              }`}
                              aria-pressed={isSelected}
                              aria-label={`${opt.name}: ${val}`}
                              title={`${opt.name}: ${val}`}
                            >
                              {val}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-foreground font-bold text-lg">
                    {logic.formatMoney(logic.currentPrice)}
                  </span>
                  {logic.currentCompareAt && logic.currentCompareAt > logic.currentPrice && (
                    <span className="text-foreground/40 text-sm line-through">
                      {logic.formatMoney(logic.currentCompareAt)}
                    </span>
                  )}
                </div>
                <Button
                  size="sm"
                  onClick={() => {
                    logic.onAddToCartSuccess()
                    logic.handleAddToCart()
                  }}
                  disabled={!logic.canAddToCart}
                  className={`${
                    logic.inStock 
                      ? 'bg-primary hover:bg-primary/90 text-white' 
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  } transition-all duration-200 font-medium px-4`}
                >
                  {logic.inStock ? 'Agregar' : 'Agotado'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </HeadlessProductCard>
  )
}