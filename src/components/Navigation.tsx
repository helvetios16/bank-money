import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

/**
 * PRINCIPIOS APLICADOS:
 * - Visibilidad: Navegación siempre accesible, sticky
 * - Feedback: Estado activo visible, hover effects
 * - Consistencia: Mismo comportamiento en móvil y desktop
 * - Accesibilidad: ARIA labels, navegación por teclado
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Fases', href: '#phases' },
    { label: 'Prototipo', href: '#prototype' },
    { label: 'Equipo', href: '#team' },
    { label: 'Especificaciones', href: '#specs' },
  ]

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-phantom-darker/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a 
            href="#hero" 
            className="text-2xl font-bold text-phantom-accent hover:text-white transition-colors duration-300"
            aria-label="The Phantom Heist - Ir al inicio"
          >
            <span className="font-mono">&lt;/&gt;</span> PHANTOM HEIST
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-phantom-accent transition-colors duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <a href="#prototype" className="btn-primary text-sm">
              Ver Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-phantom-accent/10 transition-colors"
            aria-expanded={isOpen}
            aria-label="Menú de navegación"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-phantom-darker/98 backdrop-blur-md animate-fadeInUp">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 px-4 rounded-lg text-gray-300 hover:text-phantom-accent hover:bg-phantom-accent/10 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#prototype" className="btn-primary w-full block text-center mt-4">
              Ver Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}