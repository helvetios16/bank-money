import React from 'react'
import { Monitor, Cpu, HardDrive, Headphones, Wifi, Gamepad2 } from 'lucide-react'

/**
 * PRINCIPIOS APLICADOS:
 * - Claridad: Información técnica organizada y escaneable
 * - Iconografía: Uso de íconos para facilitar comprensión
 * - Jerarquía visual: Requisitos mínimos vs recomendados
 */
export default function TechnicalSpecs() {
  const specs = {
    minimum: [
      { icon: Monitor, label: 'Headset VR', value: 'Oculus Quest 2 / HTC Vive' },
      { icon: Cpu, label: 'CPU', value: 'Intel i5-9400F / AMD Ryzen 5 3600' },
      { icon: HardDrive, label: 'RAM', value: '8 GB' },
      { icon: Gamepad2, label: 'GPU', value: 'NVIDIA GTX 1060 / AMD RX 580' },
      { icon: HardDrive, label: 'Almacenamiento', value: '15 GB disponibles' },
      { icon: Wifi, label: 'Internet', value: 'Conexión de banda ancha' },
    ],
    recommended: [
      { icon: Monitor, label: 'Headset VR', value: 'Valve Index / Meta Quest 3' },
      { icon: Cpu, label: 'CPU', value: 'Intel i7-11700K / AMD Ryzen 7 5800X' },
      { icon: HardDrive, label: 'RAM', value: '16 GB' },
      { icon: Gamepad2, label: 'GPU', value: 'NVIDIA RTX 3070 / AMD RX 6800' },
      { icon: HardDrive, label: 'Almacenamiento', value: '20 GB SSD' },
      { icon: Wifi, label: 'Internet', value: 'Fibra óptica 100 Mbps+' },
    ]
  }

  const platforms = [
    { name: 'PC (Steam)', status: 'Lanzamiento', color: 'green' },
    { name: 'Meta Quest', status: 'Lanzamiento', color: 'green' },
    { name: 'PlayStation VR2', status: 'Post-lanzamiento', color: 'yellow' },
    { name: 'Apple Vision Pro', status: 'En evaluación', color: 'blue' },
  ]

  return (
    <section 
      id="specs" 
      className="py-20 px-4 bg-phantom-darker/30"
      aria-labelledby="specs-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 id="specs-title" className="text-4xl md:text-5xl font-bold mb-4">
            Especificaciones <span className="text-phantom-accent">Técnicas</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Requisitos del sistema y plataformas soportadas
          </p>
        </div>

        {/* Platforms - Principio: Visibilidad clara del estado */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Plataformas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-phantom-dark/50 border border-phantom-accent/20 rounded-xl p-6 text-center hover:border-phantom-accent/50 transition-colors duration-300"
              >
                <div className="font-bold mb-2">{platform.name}</div>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  platform.color === 'green' ? 'bg-green-500/20 text-green-500' :
                  platform.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-500' :
                  'bg-blue-500/20 text-blue-500'
                }`}>
                  {platform.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Requirements - Principio: Organización clara */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Minimum */}
          <div className="bg-phantom-dark/50 backdrop-blur-sm border border-phantom-accent/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Requisitos <span className="text-yellow-500">Mínimos</span>
            </h3>
            <div className="space-y-4">
              {specs.minimum.map((spec, index) => {
                const Icon = spec.icon
                return (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-phantom-darker/50 rounded-lg"
                  >
                    <Icon size={24} className="text-yellow-500 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-sm text-gray-400">{spec.label}</div>
                      <div className="font-semibold">{spec.value}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Recommended */}
          <div className="bg-phantom-dark/50 backdrop-blur-sm border border-phantom-accent/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Requisitos <span className="text-green-500">Recomendados</span>
            </h3>
            <div className="space-y-4">
              {specs.recommended.map((spec, index) => {
                const Icon = spec.icon
                return (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-phantom-darker/50 rounded-lg"
                  >
                    <Icon size={24} className="text-green-500 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-sm text-gray-400">{spec.label}</div>
                      <div className="font-semibold">{spec.value}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-12 bg-phantom-accent/5 border border-phantom-accent/30 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-4">Características Adicionales</h3>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
            <li className="flex items-center gap-2">
              <Headphones size={20} className="text-phantom-accent" />
              <span>Audio espacial 3D requerido</span>
            </li>
            <li className="flex items-center gap-2">
              <Wifi size={20} className="text-phantom-accent" />
              <span>Multijugador online obligatorio</span>
            </li>
            <li className="flex items-center gap-2">
              <Monitor size={20} className="text-phantom-accent" />
              <span>Soporte para monitores secundarios</span>
            </li>
            <li className="flex items-center gap-2">
              <Gamepad2 size={20} className="text-phantom-accent" />
              <span>Compatible con mandos estándar</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}