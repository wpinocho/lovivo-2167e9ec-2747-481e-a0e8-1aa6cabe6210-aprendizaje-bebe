import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from '@/components/ui/toaster'
import { CartProvider } from '@/contexts/CartContext'
import { CartUIProvider } from '@/components/CartProvider'
import { SettingsProvider } from '@/contexts/SettingsContext'

// Pages
import Index from '@/pages/Index'
import Product from '@/pages/Product'
import Cart from '@/pages/Cart'
import Checkout from '@/pages/Checkout'
import ThankYou from '@/pages/ThankYou'
import Blog from '@/pages/Blog'
import BlogPost from '@/pages/BlogPost'
import About from '@/pages/About'
import NotFound from '@/pages/NotFound'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SettingsProvider>
        <CartProvider>
          <CartUIProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/products/:slug" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/thank-you/:orderId" element={<ThankYou />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Toaster />
            </Router>
          </CartUIProvider>
        </CartProvider>
      </SettingsProvider>
    </QueryClientProvider>
  )
}

export default App