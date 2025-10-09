<script setup>
import { ref } from 'vue'

const activePhase = ref(0)

const phases = [
  {
    number: '01',
    title: 'Recon & Control',
    subtitle: 'Hacker / Soporte Remoto',
    icon: 'search',
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
    icon: 'user-check',
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
    icon: 'lock',
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
    icon: 'alert-triangle',
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

const icons = {
  search: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  'user-check': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-check"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>`,
  lock: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  'alert-triangle': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-triangle"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`
}

const currentPhase = ref(phases[activePhase.value])

const setActivePhase = (index) => {
  activePhase.value = index
  currentPhase.value = phases[index]
}

</script>

<template>
  <div class="max-w-7xl mx-auto">
    <!-- Header -->
    <div class="text-center mb-12 animate-fadeInUp">
      <h2 id="phases-title" class="text-3xl md:text-4xl font-bold mb-4">
        Cuatro Fases, Un <span class="text-phantom-accent">Objetivo</span>
      </h2>
      <p class="text-lg text-gray-400 max-w-3xl mx-auto">
        Cada fase requiere coordinación perfecta entre el hacker remoto y el infiltrado VR. 
        Un error puede activar la alarma prematuramente.
      </p>
    </div>

    <!-- Phase Selector -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <button
        v-for="(phase, index) in phases"
        :key="index"
        @click="setActivePhase(index)"
        :class="['p-4 rounded-xl transition-all duration-300 text-left', {
          ['bg-gradient-to-br text-white scale-105 shadow-2xl '+ phase.color]: activePhase === index,
          'bg-phantom-dark/50 border border-phantom-accent/20 hover:border-phantom-accent/50 hover:scale-102': activePhase !== index
        }]"
        :aria-pressed="activePhase === index"
        :aria-label="`Seleccionar fase ${index + 1}: ${phase.title}`"
      >
        <div v-html="icons[phase.icon]" class="mb-3 w-8 h-8"></div>
        <div :class="['text-sm font-mono mb-1', { 'text-white/80': activePhase === index, 'text-phantom-accent': activePhase !== index }]">
          FASE {{ phase.number }}
        </div>
        <div class="font-bold text-lg">{{ phase.title }}</div>
      </button>
    </div>

    <!-- Phase Detail -->
    <div class="bg-phantom-dark/50 backdrop-blur-sm border border-phantom-accent/20 rounded-2xl p-6 md:p-10 animate-fadeInUp">
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Left Column -->
        <div>
          <div class="flex items-start gap-4 mb-6">
            <div :class="['p-3 rounded-xl bg-gradient-to-br', currentPhase.color]">
              <div v-html="icons[currentPhase.icon]" class="w-8 h-8"></div>
            </div>
            <div>
              <div class="text-sm font-mono text-phantom-accent mb-1">FASE {{ currentPhase.number }}</div>
              <h3 class="text-2xl font-bold mb-2">{{ currentPhase.title }}</h3>
              <p class="text-gray-400">{{ currentPhase.subtitle }}</p>
            </div>
          </div>

          <p class="text-base text-gray-300 mb-6 leading-relaxed">
            {{ currentPhase.description }}
          </p>

          <div class="bg-phantom-darker/50 rounded-xl p-4 border border-phantom-accent/10">
            <h4 class="text-sm font-mono text-phantom-accent mb-3">MECÁNICAS CLAVE</h4>
            <p class="text-gray-300">{{ currentPhase.mechanics }}</p>
          </div>
        </div>

        <!-- Right Column - Features List -->
        <div>
          <h4 class="text-lg font-bold mb-6 flex items-center gap-2">
            <div class="w-1 h-6 bg-gradient-to-b from-phantom-accent to-transparent"></div>
            Características
          </h4>
          <ul class="space-y-3" role="list">
            <li
              v-for="(feature, index) in currentPhase.features"
              :key="index"
              class="flex items-start gap-3 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <div class="mt-1 w-2 h-2 bg-phantom-accent rounded-full flex-shrink-0"></div>
              <span>{{ feature }}</span>
            </li>
          </ul>

          <!-- Timeline indicator -->
          <div class="mt-6 pt-6 border-t border-phantom-accent/20">
            <div class="flex items-center justify-between text-sm">
              <span class="text-gray-400">Duración estimada</span>
              <span class="text-phantom-accent font-mono font-bold">
                {{ activePhase === 3 ? '15-20 MIN' : '5-8 MIN' }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Hint -->
    <div class="text-center mt-6 text-gray-500 text-sm">
      Selecciona una fase arriba para ver detalles • {{ activePhase + 1 }} de 4
    </div>
  </div>
</template>
