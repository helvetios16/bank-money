import React from 'react'
import { Mail, Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { label: 'Características', href: '#phases' },
      { label: 'Prototipo', href: '#prototype' },
      { label: 'Roadmap', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
    company: [
      { label: 'Equipo', href: '#team' },
      { label: 'Contacto', href: '#team' },
      { label: 'Prensa', href: '#' },
      { label: 'Inversores', href: '#' },
    ],
    legal: [
      { label: 'Privacidad', href: '#' },
      { label: 'Términos', href: '#' },
      { label: 'Cookies', href: '#' },
      { label: 'Licencias', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:team@phantom.dev', label: 'Email' },
  ]

  return (
    <footer className="bg-phantom-darker border-t border-phantom-accent/20 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <a href="#hero" className="text-2xl font-bold text-phantom-accent mb-4 block">
              <span className="font-mono">&lt;/&gt;</span> PHANTOM
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Experiencia cooperativa de robo en realidad virtual. Dos roles, un objetivo.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
  const Icon = social.icon
  return (
    <a
      key={index}
      href={social.href}
      className="p-2 bg-phantom-dark hover:bg-phantom-accent/10 rounded-lg transition-all duration-300 hover:scale-110"
      aria-label={social.label}
    >
      <Icon size={18} />
    </a>
  )
})}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Producto</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-phantom-accent transition-colors duration-300 text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Compañía</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-phantom-accent transition-colors duration-300 text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-phantom-accent transition-colors duration-300 text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-phantom-accent/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Phantom Heist Studios. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-sm">
              Hecho con Astro + React + Vite + Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}