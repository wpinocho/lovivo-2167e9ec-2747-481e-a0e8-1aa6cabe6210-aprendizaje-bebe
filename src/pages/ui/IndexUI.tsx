import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Heart, Shield, Award } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

/**
 * EDITABLE UI - IndexUI
 * 
 * Interfaz especializada para tienda de bebés con problemas de aprendizaje
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    blogs,
    loading,
    loadingCollections,
    loadingBlogs,
    searchTerm,
    selectedCollectionId,
    filteredProducts,
    setSearchTerm,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate 
      showCart={true}
    >
      {/* Hero Section */}
      <section className="gradient-baby py-16 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-gentle-bounce mb-6">
            <Heart className="h-16 w-16 text-primary mx-auto mb-4" />
          </div>
          <h1 className="text-5xl font-bold text-gradient mb-6">
            Pequeños Genios
          </h1>
          <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Productos especializados para el desarrollo de bebés con necesidades especiales de aprendizaje. 
            Cada juguete está cuidadosamente seleccionado para estimular el crecimiento cognitivo y sensorial.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              type="text" 
              placeholder="Buscar productos especializados..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              className="pl-10 bg-white/80 backdrop-blur-sm border-primary/20 focus:border-primary"
            />
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
              <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">100% Seguro</h3>
              <p className="text-sm text-foreground/70">Productos certificados y libres de materiales tóxicos</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
              <Award className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Recomendado</h3>
              <p className="text-sm text-foreground/70">Avalado por especialistas en desarrollo infantil</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
              <Heart className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Con Amor</h3>
              <p className="text-sm text-foreground/70">Diseñado pensando en cada necesidad especial</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-baby-blue/20 via-baby-mint/20 to-baby-peach/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Nuestras Colecciones Especializadas
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Productos organizados por área de desarrollo para facilitar tu búsqueda
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {collections.map((collection) => (
                <div key={collection.id} className="transform hover:scale-105 transition-transform duration-300">
                  <CollectionCard 
                    collection={collection} 
                    onViewProducts={handleViewCollectionProducts} 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                {selectedCollectionId 
                  ? `${collections.find(c => c.id === selectedCollectionId)?.name || 'Colección'}` 
                  : 'Productos Destacados'
                }
              </h2>
              <p className="text-foreground/70">
                {selectedCollectionId 
                  ? collections.find(c => c.id === selectedCollectionId)?.description
                  : 'Los mejores productos para el desarrollo de tu bebé'
                }
              </p>
            </div>
            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Ver Todos los Productos
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-gradient-to-br from-baby-blue/20 to-baby-mint/20 rounded-2xl h-96 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="transform hover:scale-105 transition-transform duration-300">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-gradient-to-br from-baby-blue/20 to-baby-mint/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-primary/60" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {searchTerm 
                  ? 'No encontramos productos que coincidan' 
                  : 'No hay productos disponibles'
                }
              </h3>
              <p className="text-foreground/70">
                {searchTerm 
                  ? 'Intenta con otros términos de búsqueda' 
                  : 'Pronto tendremos más productos disponibles'
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Comprometidos con el Desarrollo Especial
          </h2>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            En Pequeños Genios entendemos que cada bebé es único y tiene necesidades especiales de aprendizaje. 
            Nuestros productos están cuidadosamente seleccionados y recomendados por especialistas en desarrollo infantil 
            para brindar el mejor apoyo en esta etapa tan importante.
          </p>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-primary/10">
            <p className="text-foreground/70 italic">
              "Cada juguete es una oportunidad de crecimiento, cada momento de juego es un paso hacia el desarrollo."
            </p>
          </div>
        </div>
      </section>

      <FloatingCart />
    </EcommerceTemplate>
  );
};