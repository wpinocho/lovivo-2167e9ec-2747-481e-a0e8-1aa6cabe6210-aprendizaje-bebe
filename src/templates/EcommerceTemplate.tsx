import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Heart, Phone, Mail } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'

/**
 * EDITABLE TEMPLATE - EcommerceTemplate
 * 
 * Template especializado para tienda de bebés con problemas de aprendizaje
 */

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const header = (
    <div className={`py-4 bg-white/95 backdrop-blur-sm border-b border-primary/10 sticky top-0 z-40 ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-primary to-accent rounded-full p-2">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient">Pequeños Genios</h1>
                <p className="text-xs text-foreground/60">Desarrollo Especial</p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className="text-foreground/70 hover:text-primary transition-colors font-medium"
              >
                Inicio
              </Link>
              <Link 
                to="/blog" 
                className="text-foreground/70 hover:text-primary transition-colors font-medium"
              >
                Guías
              </Link>
              <Link 
                to="/contacto" 
                className="text-foreground/70 hover:text-primary transition-colors font-medium"
              >
                Contacto
              </Link>
            </nav>
          </div>

          {/* Cart */}
          {showCart && (
            <Button
              variant="ghost"
              size="icon"
              onClick={openCart}
              className="relative hover:bg-primary/10"
            >
              <ShoppingCart className="h-5 w-5 text-primary" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-gentle-bounce">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </Button>
          )}
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-foreground">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-gradient-to-br from-primary to-primary/80 text-white py-16 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-white/20 rounded-full p-2">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Pequeños Genios</h3>
                <p className="text-white/80 text-sm">Desarrollo Especial</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Nos especializamos en productos para bebés con necesidades especiales de aprendizaje. 
              Cada producto está cuidadosamente seleccionado para apoyar el desarrollo cognitivo y sensorial.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-white/80">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@pequenosgenios.com</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Navegación</h3>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-white/80 hover:text-white transition-colors"
              >
                Inicio
              </Link>
              <Link 
                to="/productos" 
                className="block text-white/80 hover:text-white transition-colors"
              >
                Productos
              </Link>
              <Link 
                to="/blog" 
                className="block text-white/80 hover:text-white transition-colors"
              >
                Guías de Desarrollo
              </Link>
              <Link 
                to="/contacto" 
                className="block text-white/80 hover:text-white transition-colors"
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Información</h3>
            <div className="space-y-2">
              <Link 
                to="/sobre-nosotros" 
                className="block text-white/80 hover:text-white transition-colors"
              >
                Sobre Nosotros
              </Link>
              <Link 
                to="/envios" 
                className="block text-white/80 hover:text-white transition-colors"
              >
                Envíos
              </Link>
              <Link 
                to="/devoluciones" 
                className="block text-white/80 hover:text-white transition-colors"
              >
                Devoluciones
              </Link>
              <Link 
                to="/privacidad" 
                className="block text-white/80 hover:text-white transition-colors"
              >
                Privacidad
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm mb-4 md:mb-0">
              &copy; 2024 Pequeños Genios. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-4">
              <SocialLinks />
              <div className="text-white/60 text-xs">
                Productos certificados y seguros
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}