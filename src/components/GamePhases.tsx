import React, { useState } from 'react'
import { Search, UserCheck, Lock, AlertTriangle } from 'lucide-react'

/**
 * PRINCIPIOS APLICADOS:
 * - Visibilidad: Cada fase claramente diferenciada con iconos
 * - Feedback: Estado activo visible, hover effects
 * - Consistencia: Estructura repetida para cada fase
 * - Minimizar carga cognitiva: Información organizada y progresiva
 */
export default function GamePhases() {
  const [activePhase, setActivePhase] = useState(0)

  const phases = [
    {
      number: '01',
      title: 'Recon & Control',
      subtitle: 'Hacker / Soporte Remoto',
      icon: Search,
      color: 'from-blue-500 to-cyan-500',
      description: 'El hacker analiza el edificio desde su terminal. Accede a planos arquitectónicos con capas interactivas, estudia horarios del personal y localiza sensores de seguridad.',
      features: [
        'Planos arquitectónicos interactivos (capas superpuestas)',
        'Mapa de horarios dinámico del personal',
        'Localización de cámaras y sensores',
        'Hackeo progresivo con coste temporal',
        'Desbloqueo gradual de subsistemas'
      ],
      mechanics: 'Sistema de recursos temporales donde cada acción consume tiempo. El hacker debe priorizar qué sistemas hackear primero.'
    },
    {
      number: '02',
      title: 'Infiltración',
      subtitle: 'Jugador VR Principal',
      icon: UserCheck,
      color: 'from-purple-500 to-pink-500',
      description: 'El jugador VR ingresa al edificio usando identidad falsa. Los NPCs verifican credenciales en tiempo real. Navegación sigilosa evitando líneas de visión de cámaras.',
      features: [
        'Sistema de identidad/disfraz verificado por NPCs',
        'Navegación sigilosa en primera persona',
        'Evitar cámaras con áreas de detección visibles',
        'Interacción física (abrir puertas, mover objetos)',
        'Mecánicas de sigilo basadas en línea de vista'
      ],
      mechanics: 'Los NPCs tienen patrones de movimiento predecibles pero responden a comportamientos sospechosos. El hacker puede distraerlos temporalmente.'
    },
    {
      number: '03',
      title: 'Bóveda',
      subtitle: 'Coordinación de Equipo',
      icon: Lock,
      color: 'from-green-500 to-emerald-500',
      description: 'Puzzle cooperativo de circuitos. El hacker ve el diagrama completo y da instrucciones. El jugador VR usa tijeras virtuales para cortar cables en el orden correcto.',
      features: [
        'Puzzle de circuitos con información asimétrica',
        'Hacker ve diagrama completo, da instrucciones',
        'Jugador VR ejecuta con herramientas físicas',
        'Sistema de tijeras virtuales para corte preciso',
        'Penalización por errores (alarmas tempranas)'
      ],
      mechanics: 'Comunicación verbal esencial. El hacker debe describir colores y patrones mientras el jugador VR interpreta en tiempo real.'
    },
    {
      number: '04',
      title: 'Escape',
      subtitle: 'Bajo Presión',
      icon: AlertTriangle,
      color: 'from-red-500 to-orange-500',
      description: 'Alarma activada. Countdown de 15-20 minutos. Oleadas de guardias de seguridad. El hacker cierra rutas dinámicamente. Objetivo: salir con la evidencia antes del colapso.',
      features: [
        'Countdown visible de 15-20 minutos',
        'Oleadas de seguridad con IA escalada',
        'Cierres dinámicos de rutas por el hacker',
        'Múltiples puntos de extracción',
        'Sistema de "punto de no retorno"'
      ],
      mechanics: 'El tiempo es el enemigo real. Cada segundo cuenta. El hacker debe elegir qué puertas cerrar para bloquear perseguidores sin atrapar al jugador VR.'
    }
  ]

  const currentPhase = phases[activePhase]
  const Icon = currentPhase.icon

  return (
    <section 
      id="phases" 
      className="py-20 px-4"
      aria-labelledby="phases-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header - Principio: Jerarquía Visual */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 id="phases-title" className="text-4xl md:text-5xl font-bold mb-4">
            Cuatro Fases, Un <span className="text-phantom-accent">Objetivo</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cada fase requiere coordinación perfecta entre el hacker remoto y el infiltrado VR. 
            Un error puede activar la alarma prematuramente.
          </p>
        </div>

        {/* Phase Selector - Principio: Visibilidad y Feedback */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {phases.map((phase, index) => {
            const PhaseIcon = phase.icon
            return (
              <button
                key={index}
                onClick={() => setActivePhase(index)}
                className={`p-6 rounded-xl transition-all duration-300 text-left ${
                  activePhase === index
                    ? 'bg-gradient-to-br ' + phase.color + ' text-white scale-105 shadow-2xl'
                    : 'bg-phantom-dark/50 border border-phantom-accent/20 hover:border-phantom-accent/50 hover:scale-102'
                }`}
                aria-pressed={activePhase === index}
                aria-label={`Seleccionar fase ${index + 1}: ${phase.title}`}
              >
                <PhaseIcon size={32} className="mb-3" />
                <div className={`text-sm font-mono mb-1 ${activePhase === index ? 'text-white/80' : 'text-phantom-accent'}`}>
                  FASE {phase.number}
                </div>
                <div className="font-bold text-lg">{phase.title}</div>
              </button>
            )
          })}
        </div>

        {/* Phase Detail - Principio: Claridad y Organización */}
        <div className="bg-phantom-dark/50 backdrop-blur-sm border border-phantom-accent/20 rounded-2xl p-8 md:p-12 animate-fadeInUp">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${currentPhase.color}`}>
                  <Icon size={40} />
                </div>
                <div>
                  <div className="text-sm font-mono text-phantom-accent mb-1">FASE {currentPhase.number}</div>
                  <h3 className="text-3xl font-bold mb-2">{currentPhase.title}</h3>
                  <p className="text-gray-400">{currentPhase.subtitle}</p>
                </div>
              </div>

              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                {currentPhase.description}
              </p>

              <div className="bg-phantom-darker/50 rounded-xl p-6 border border-phantom-accent/10">
                <h4 className="text-sm font-mono text-phantom-accent mb-3">MECÁNICAS CLAVE</h4>
                <p className="text-gray-300">{currentPhase.mechanics}</p>
              </div>
            </div>

            {/* Right Column - Features List */}
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-phantom-accent to-transparent"></div>
                Características
              </h4>
              <ul className="space-y-4" role="list">
                {currentPhase.features.map((feature, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <div className="mt-1 w-2 h-2 bg-phantom-accent rounded-full flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Timeline indicator */}
              <div className="mt-8 pt-8 border-t border-phantom-accent/20">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Duración estimada</span>
                  <span className="text-phantom-accent font-mono font-bold">
                    {activePhase === 3 ? '15-20 MIN' : '5-8 MIN'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Hint - Principio: Affordance */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          Selecciona una fase arriba para ver detalles • {activePhase + 1} de 4
        </div>
      </div>
    </section>
  )
}