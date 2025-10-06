import React, { useState } from 'react'
import { Play, Layers, Clock, Cpu, Eye, EyeOff } from 'lucide-react'

export default function Prototype() {
  const [activeLayer, setActiveLayer] = useState('floor1')
  const [hackedSystems, setHackedSystems] = useState([])
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [cameraVisible, setCameraVisible] = useState(true)

  const layers = [
    { id: 'floor1', name: 'Planta 1', color: 'blue' },
    { id: 'floor2', name: 'Planta 2', color: 'purple' },
    { id: 'security', name: 'Seguridad', color: 'red' },
    { id: 'electrical', name: 'Eléctrico', color: 'yellow' }
  ]

  const systems = [
    { id: 'cameras', name: 'Cámaras', time: 30 },
    { id: 'doors', name: 'Puertas', time: 45 },
    { id: 'alarms', name: 'Alarmas', time: 60 },
    { id: 'lights', name: 'Luces', time: 20 }
  ]

  const handleHack = (systemId) => {
    if (!hackedSystems.includes(systemId)) {
      setHackedSystems([...hackedSystems, systemId])
      const system = systems.find(s => s.id === systemId)
      setTimeElapsed(prev => prev + system.time)
    }
  }

  return (
    <section 
      id="prototype" 
      className="py-20 px-4 bg-phantom-darker/30"
      aria-labelledby="prototype-title"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block mb-4 px-4 py-2 bg-phantom-accent/10 border border-phantom-accent/30 rounded-full">
            <span className="text-phantom-accent text-sm font-mono">PROTOTIPO INTERACTIVO</span>
          </div>
          <h2 id="prototype-title" className="text-4xl md:text-5xl font-bold mb-4">
            Experimenta la <span className="text-phantom-accent">Fase de Hackeo</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Prototipo de baja fidelidad que demuestra las mecánicas core del hacker: 
            visualización de planos por capas, hackeo progresivo y gestión temporal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Prototype Canvas */}
          <div className="bg-phantom-dark/50 backdrop-blur-sm border border-phantom-accent/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Layers size={24} className="text-phantom-accent" />
                Visualizador de Planos
              </h3>
              <div className="flex items-center gap-2 text-sm">
                <Clock size={16} className="text-phantom-accent" />
                <span className="font-mono text-phantom-accent">{timeElapsed}s</span>
              </div>
            </div>

            {/* Layer Selector */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {layers.map(layer => (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeLayer === layer.id
                      ? 'bg-phantom-accent text-phantom-darker scale-105'
                      : 'bg-phantom-darker/50 text-gray-400 hover:text-white hover:bg-phantom-darker'
                  }`}
                  aria-pressed={activeLayer === layer.id}
                >
                  {layer.name}
                </button>
              ))}
            </div>

            {/* Canvas Area - PLANO EXACTO SEGÚN TU IMAGEN */}
            <div className="relative aspect-square bg-phantom-darker/50 rounded-xl border-2 border-phantom-accent/30 overflow-hidden">
              {/* Grid background */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'linear-gradient(#00f0ff 1px, transparent 1px), linear-gradient(90deg, #00f0ff 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>

              <svg viewBox="0 0 600 600" className="w-full h-full">
                {/* ESTRUCTURA EXTERIOR */}
                <rect x="40" y="40" width="520" height="520" 
                      fill="none" stroke="#00f0ff" strokeWidth="3" opacity="0.8" />

                {/* ENTRADA (izquierda, abajo) */}
                <rect x="40" y="280" width="80" height="100" 
                      fill="none" stroke="#00f0ff" strokeWidth="2" opacity="0.6" />
                <text x="80" y="335" textAnchor="middle" fill="#00f0ff" fontSize="14" fontWeight="bold">
                  Entrada
                </text>
                {/* Puerta verde de entrada */}
                <line x1="40" y1="320" x2="40" y2="350" 
                      stroke={hackedSystems.includes('doors') ? '#22c55e' : '#fbbf24'} 
                      strokeWidth="6" />

                {/* HALL (centro-izquierda) */}
                <rect x="120" y="120" width="180" height="280" 
                      fill="none" stroke="#00f0ff" strokeWidth="2" opacity="0.6" />
                <text x="210" y="270" textAnchor="middle" fill="#00f0ff" fontSize="18" fontWeight="bold">
                  Hall
                </text>

                {/* VANILLA (arriba-izquierda) */}
                <rect x="120" y="40" width="120" height="80" 
                      fill="none" stroke="#00f0ff" strokeWidth="2" opacity="0.6" />
                <text x="180" y="85" textAnchor="middle" fill="#00f0ff" fontSize="14" fontWeight="bold">
                  Vanilla
                </text>

                {/* ADMINISTRACIÓN (arriba-centro) */}
                <rect x="300" y="40" width="120" height="140" 
                      fill="none" stroke="#00f0ff" strokeWidth="2" opacity="0.6" />
                <text x="360" y="100" textAnchor="middle" fill="#00f0ff" fontSize="12" fontWeight="bold" transform="rotate(-90 360 100)">
                  Administración
                </text>

                {/* GERENCIA (centro-derecha arriba) */}
                <rect x="300" y="180" width="120" height="120" 
                      fill="none" stroke="#00f0ff" strokeWidth="2" opacity="0.6" />
                <text x="360" y="235" textAnchor="middle" fill="#00f0ff" fontSize="12" fontWeight="bold" transform="rotate(-90 360 235)">
                  Gerencia
                </text>

                {/* SALA DE REUNIONES (arriba-derecha) */}
                <rect x="420" y="40" width="140" height="140" 
                      fill="none" stroke="#00f0ff" strokeWidth="2" opacity="0.6" />
                <text x="490" y="100" textAnchor="middle" fill="#00f0ff" fontSize="11" fontWeight="bold" transform="rotate(-90 490 100)">
                  Sala de Reuniones
                </text>

                {/* ARCHIVO (centro) */}
                <rect x="300" y="300" width="80" height="80" 
                      fill="none" stroke="#00f0ff" strokeWidth="2" opacity="0.6" />
                <text x="340" y="345" textAnchor="middle" fill="#00f0ff" fontSize="12" fontWeight="bold">
                  Archivo
                </text>

                {/* DATA CENTER (centro-derecha) */}
                <rect x="380" y="300" width="100" height="80" 
                      fill="none" stroke="#00f0ff" strokeWidth="2" opacity="0.6" />
                <text x="430" y="335" textAnchor="middle" fill="#00f0ff" fontSize="11" fontWeight="bold">
                  Data
                </text>
                <text x="430" y="350" textAnchor="middle" fill="#00f0ff" fontSize="11" fontWeight="bold">
                  Center
                </text>

                {/* BÓVEDA I - BOBEDA II (abajo-izquierda) */}
                <rect x="120" y="400" width="90" height="120" 
                      fill="none" stroke="#00f0ff" strokeWidth="2" opacity="0.6" />
                <text x="165" y="445" textAnchor="middle" fill="#00f0ff" fontSize="11" fontWeight="bold">
                  Bobeda I
                </text>
                <text x="165" y="480" textAnchor="middle" fill="#22c55e" fontSize="12" fontWeight="bold">
                  Vault II
                </text>

                {/* BÓVEDA II - BOBEDA I (abajo-centro) */}
                <rect x="210" y="400" width="90" height="120" 
                      fill="none" stroke="#00f0ff" strokeWidth="2" opacity="0.6" />
                <text x="255" y="445" textAnchor="middle" fill="#00f0ff" fontSize="11" fontWeight="bold">
                  Bobeda II
                </text>
                <text x="255" y="480" textAnchor="middle" fill="#22c55e" fontSize="12" fontWeight="bold">
                  Vault I
                </text>

                {/* Línea divisoria entre bóvedas */}
                <line x1="210" y1="400" x2="210" y2="520" stroke="#00f0ff" strokeWidth="2" opacity="0.6" />

                {/* === CÁMARAS (círculos rojos) === */}
                {cameraVisible && (
                  <>
                    {/* Cámara 1: Vanilla (arriba-izquierda) */}
                    <circle cx="200" cy="70" r="10" 
                            fill={hackedSystems.includes('cameras') ? '#22c55e' : '#ff3366'} 
                            className="animate-pulse" />
                    
                    {/* Cámara 2: Administración (arriba-centro-derecha) */}
                    <circle cx="450" cy="70" r="10" 
                            fill={hackedSystems.includes('cameras') ? '#22c55e' : '#ff3366'} 
                            className="animate-pulse" />
                    
                    {/* Cámara 3: Hall centro */}
                    <circle cx="200" cy="300" r="10" 
                            fill={hackedSystems.includes('cameras') ? '#22c55e' : '#ff3366'} 
                            className="animate-pulse" />
                    
                    {/* Cámara 4: Hall abajo-izquierda */}
                    <circle cx="150" cy="380" r="10" 
                            fill={hackedSystems.includes('cameras') ? '#22c55e' : '#ff3366'} 
                            className="animate-pulse" />
                    
                    {/* Cámara 5: Abajo-derecha cerca sala reuniones */}
                    <circle cx="520" cy="520" r="10" 
                            fill={hackedSystems.includes('cameras') ? '#22c55e' : '#ff3366'} 
                            className="animate-pulse" />
                  </>
                )}

                {/* === PUERTAS (líneas amarillas/verdes) === */}
                {/* Puerta Entrada principal (ya dibujada arriba) */}

                {/* Puerta Hall a Gerencia */}
                <line x1="300" y1="240" x2="300" y2="270" 
                      stroke={hackedSystems.includes('doors') ? '#22c55e' : '#fbbf24'} 
                      strokeWidth="6" />

                {/* Puerta Administración */}
                <line x1="390" y1="40" x2="420" y2="40" 
                      stroke={hackedSystems.includes('doors') ? '#22c55e' : '#fbbf24'} 
                      strokeWidth="6" />

                {/* Puerta Data Center */}
                <line x1="480" y1="300" x2="510" y2="300" 
                      stroke={hackedSystems.includes('doors') ? '#22c55e' : '#fbbf24'} 
                      strokeWidth="6" />

                {/* Puerta Sala Reuniones */}
                <line x1="510" y1="180" x2="540" y2="180" 
                      stroke={hackedSystems.includes('doors') ? '#22c55e' : '#fbbf24'} 
                      strokeWidth="6" />

                {/* Puerta hacia Bóvedas */}
                <line x1="255" y1="400" x2="285" y2="400" 
                      stroke={hackedSystems.includes('doors') ? '#22c55e' : '#fbbf24'} 
                      strokeWidth="6" />

                {/* Puerta entre Vault I y II */}
                <line x1="210" y1="450" x2="210" y2="480" 
                      stroke={hackedSystems.includes('doors') ? '#22c55e' : '#fbbf24'} 
                      strokeWidth="6" />

                {/* OBJETIVO: VAULT I (highlight si todos los sistemas están hackeados) */}
                {hackedSystems.length >= 3 && (
                  <rect x="215" y="460" width="80" height="50" 
                        fill="none" stroke="#ff3366" strokeWidth="4" 
                        className="animate-pulse" />
                )}
              </svg>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-phantom-darker/90 backdrop-blur-sm rounded-lg p-3 text-xs space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Cámara Activa</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Sistema Hackeado</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-3 bg-yellow-500"></div>
                  <span>Puerta Bloqueada</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-3 bg-green-500"></div>
                  <span>Puerta Desbloqueada</span>
                </div>
              </div>
            </div>

            {/* Toggle camera visibility */}
            <button
              onClick={() => setCameraVisible(!cameraVisible)}
              className="mt-4 w-full py-3 bg-phantom-darker/50 hover:bg-phantom-darker border border-phantom-accent/20 hover:border-phantom-accent/50 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              {cameraVisible ? <Eye size={20} /> : <EyeOff size={20} />}
              {cameraVisible ? 'Ocultar Cámaras' : 'Mostrar Cámaras'}
            </button>
          </div>

          {/* Control Panel */}
          <div className="space-y-6">
            <div className="bg-phantom-dark/50 backdrop-blur-sm border border-phantom-accent/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Cpu size={24} className="text-phantom-accent" />
                Panel de Hackeo
              </h3>

              <div className="space-y-4">
                {systems.map(system => {
                  const isHacked = hackedSystems.includes(system.id)
                  return (
                    <div
                      key={system.id}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        isHacked
                          ? 'bg-green-500/10 border-green-500'
                          : 'bg-phantom-darker/50 border-phantom-accent/30 hover:border-phantom-accent/60'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${
                            isHacked ? 'bg-green-500' : 'bg-red-500 animate-pulse'
                          }`}></div>
                          <span className="font-semibold">{system.name}</span>
                        </div>
                        <span className="text-sm text-gray-400 font-mono">
                          +{system.time}s
                        </span>
                      </div>

                      <button
                        onClick={() => handleHack(system.id)}
                        disabled={isHacked}
                        className={`w-full py-2 rounded-lg font-medium transition-all duration-300 ${
                          isHacked
                            ? 'bg-green-500/20 text-green-500 cursor-not-allowed'
                            : 'bg-phantom-accent text-phantom-darker hover:bg-white hover:scale-105 active:scale-95'
                        }`}
                        aria-label={`${isHacked ? 'Sistema hackeado' : 'Hackear'} ${system.name}`}
                      >
                        {isHacked ? '✓ Hackeado' : 'Hackear Sistema'}
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Progress indicator */}
            <div className="bg-phantom-dark/50 backdrop-blur-sm border border-phantom-accent/20 rounded-2xl p-6">
              <h4 className="text-lg font-bold mb-4">Progreso de Infiltración</h4>
              <div className="space-y-3">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Sistemas Comprometidos</span>
                  <span className="text-phantom-accent font-bold">
                    {hackedSystems.length} / {systems.length}
                  </span>
                </div>
                <div className="h-3 bg-phantom-darker rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-phantom-accent to-green-500 transition-all duration-500"
                    style={{ width: `${(hackedSystems.length / systems.length) * 100}%` }}
                  ></div>
                </div>
                
                {hackedSystems.length === systems.length && (
                  <div className="mt-4 p-4 bg-green-500/10 border border-green-500 rounded-lg animate-fadeInUp">
                    <p className="text-green-500 font-bold text-center">
                      ✓ Todos los sistemas comprometidos. El infiltrado puede avanzar.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Reset button */}
            <button
              onClick={() => {
                setHackedSystems([])
                setTimeElapsed(0)
              }}
              className="w-full py-3 bg-phantom-darker/50 hover:bg-red-500/20 border border-phantom-accent/20 hover:border-red-500 rounded-lg transition-all duration-300 text-gray-400 hover:text-red-500"
            >
              Reiniciar Simulación
            </button>
          </div>
        </div>

        {/* Info box */}
        <div className="mt-8 bg-phantom-accent/5 border border-phantom-accent/30 rounded-2xl p-6">
          <h4 className="font-bold text-lg mb-3 text-phantom-accent">💡 Sobre este Prototipo</h4>
          <p className="text-gray-300 leading-relaxed">
            Este es un <strong>prototipo de baja fidelidad</strong> basado en el plano arquitectónico real del edificio objetivo. 
            Las cámaras (puntos rojos) y puertas (líneas amarillas/verdes). 
            En el juego final, el hacker podrá hackear sistemas para desactivar cámaras y abrir puertas de forma progresiva, 
            coordinando con el infiltrado VR en tiempo real.
          </p>
        </div>
      </div>
    </section>
  )
}