<script setup>
import { ref } from 'vue'

const activeLayer = ref('floor1')
const hackedSystems = ref([])
const timeElapsed = ref(0)
const cameraVisible = ref(true)

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

const icons = {
  play: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  layers: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.84l8.57 3.92a2 2 0 0 0 1.66 0l8.57-3.92a1 1 0 0 0 0-1.84Z"/><path d="m2.6 11.92 8.57 3.92a2 2 0 0 0 1.66 0l8.57-3.92"/><path d="m2.6 17.68 8.57 3.92a2 2 0 0 0 1.66 0l8.57-3.92"/></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  cpu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M9 2v2"/><path d="M9 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M2 12h20"/></svg>`,
  eye: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  'eye-off': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`
}

const handleHack = (systemId) => {
  if (!hackedSystems.value.includes(systemId)) {
    hackedSystems.value.push(systemId)
    const system = systems.find(s => s.id === systemId)
    timeElapsed.value += system.time
  }
}

const resetSimulation = () => {
  hackedSystems.value = []
  timeElapsed.value = 0
}

</script>

<template>
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-12 animate-fadeInUp">
      <div class="inline-block mb-4 px-4 py-2 bg-phantom-accent/10 border border-phantom-accent/30 rounded-full">
        <span class="text-phantom-accent text-sm font-mono">PROTOTIPO INTERACTIVO</span>
      </div>
      <h2 id="prototype-title" class="text-3xl md:text-4xl font-bold mb-4">
        Experimenta la <span class="text-phantom-accent">Fase de Hackeo</span>
      </h2>
      <p class="text-lg text-gray-400 max-w-3xl mx-auto">
        Prototipo de baja fidelidad que demuestra las mecánicas core del hacker:
        visualización de planos por capas, hackeo progresivo y gestión temporal.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      <!-- Prototype Canvas -->
      <div class="bg-phantom-dark/50 backdrop-blur-sm border border-phantom-accent/20 rounded-2xl p-4">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-bold flex items-center gap-2">
            <div v-html="icons.layers" class="w-6 h-6 text-phantom-accent"></div>
            Visualizador de Planos
          </h3>
          <div class="flex items-center gap-2 text-sm">
            <div v-html="icons.clock" class="w-4 h-4 text-phantom-accent"></div>
            <span class="font-mono text-phantom-accent">{{ timeElapsed }}s</span>
          </div>
        </div>

        <!-- Layer Selector -->
        <div class="flex gap-2 mb-4 flex-wrap">
          <button v-for="layer in layers" :key="layer.id" @click="activeLayer = layer.id" :class="['px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300', {
            'bg-phantom-accent text-phantom-darker scale-105': activeLayer === layer.id,
            'bg-phantom-darker/50 text-gray-400 hover:text-white hover:bg-phantom-darker': activeLayer !== layer.id
          }]" :aria-pressed="activeLayer === layer.id">
            {{ layer.name }}
          </button>
        </div>

        <!-- Canvas Area -->
        <div
          class="relative aspect-square bg-phantom-darker/50 rounded-xl border-2 border-phantom-accent/30 overflow-hidden">
          <div class="absolute inset-0 opacity-20"
            style="background-image: linear-gradient(#00f0ff 1px, transparent 1px), linear-gradient(90deg, #00f0ff 1px, transparent 1px); background-size: 20px 20px;">
          </div>
          <svg viewBox="0 0 600 600" class="w-full h-full">
            <rect x="40" y="40" width="520" height="520" fill="none" stroke="#00f0ff" stroke-width="3" opacity="0.8" />
            <rect x="40" y="280" width="80" height="100" fill="none" stroke="#00f0ff" stroke-width="2" opacity="0.6" />
            <text x="80" y="335" text-anchor="middle" fill="#00f0ff" font-size="14" font-weight="bold">Entrada</text>
            <line x1="40" y1="320" x2="40" y2="350" :stroke="hackedSystems.includes('doors') ? '#22c55e' : '#fbbf24'"
              stroke-width="6" />
            <rect x="120" y="120" width="180" height="280" fill="none" stroke="#00f0ff" stroke-width="2"
              opacity="0.6" />
            <text x="210" y="270" text-anchor="middle" fill="#00f0ff" font-size="18" font-weight="bold">Hall</text>
            <rect x="120" y="40" width="120" height="80" fill="none" stroke="#00f0ff" stroke-width="2" opacity="0.6" />
            <text x="180" y="85" text-anchor="middle" fill="#00f0ff" font-size="14" font-weight="bold">Vanilla</text>
            <rect x="300" y="40" width="120" height="140" fill="none" stroke="#00f0ff" stroke-width="2" opacity="0.6" />
            <text x="360" y="100" text-anchor="middle" fill="#00f0ff" font-size="12" font-weight="bold"
              transform="rotate(-90 360 100)">Administración</text>
            <rect x="300" y="180" width="120" height="120" fill="none" stroke="#00f0ff" stroke-width="2"
              opacity="0.6" />
            <text x="360" y="235" text-anchor="middle" fill="#00f0ff" font-size="12" font-weight="bold"
              transform="rotate(-90 360 235)">Gerencia</text>
            <rect x="420" y="40" width="140" height="140" fill="none" stroke="#00f0ff" stroke-width="2" opacity="0.6" />
            <text x="490" y="100" text-anchor="middle" fill="#00f0ff" font-size="11" font-weight="bold"
              transform="rotate(-90 490 100)">Sala de Reuniones</text>
            <rect x="300" y="300" width="80" height="80" fill="none" stroke="#00f0ff" stroke-width="2" opacity="0.6" />
            <text x="340" y="345" text-anchor="middle" fill="#00f0ff" font-size="12" font-weight="bold">Archivo</text>
            <rect x="380" y="300" width="100" height="80" fill="none" stroke="#00f0ff" stroke-width="2" opacity="0.6" />
            <text x="430" y="335" text-anchor="middle" fill="#00f0ff" font-size="11" font-weight="bold">Data</text>
            <text x="430" y="350" text-anchor="middle" fill="#00f0ff" font-size="11" font-weight="bold">Center</text>
            <rect x="120" y="400" width="90" height="120" fill="none" stroke="#00f0ff" stroke-width="2" opacity="0.6" />
            <text x="165" y="445" text-anchor="middle" fill="#00f0ff" font-size="11" font-weight="bold">Bobeda I</text>
            <text x="165" y="480" text-anchor="middle" fill="#22c55e" font-size="12" font-weight="bold">Vault II</text>
            <rect x="210" y="400" width="90" height="120" fill="none" stroke="#00f0ff" stroke-width="2" opacity="0.6" />
            <text x="255" y="445" text-anchor="middle" fill="#00f0ff" font-size="11" font-weight="bold">Bobeda II</text>
            <text x="255" y="480" text-anchor="middle" fill="#22c55e" font-size="12" font-weight="bold">Vault I</text>
            <line x1="210" y1="400" x2="210" y2="520" stroke="#00f0ff" stroke-width="2" opacity="0.6" />
            <template v-if="cameraVisible">
              <circle cx="200" cy="70" r="10" :fill="hackedSystems.includes('cameras') ? '#22c55e' : '#ff3366'"
                class="animate-pulse" />
              <circle cx="450" cy="70" r="10" :fill="hackedSystems.includes('cameras') ? '#22c55e' : '#ff3366'"
                class="animate-pulse" />
              <circle cx="200" cy="300" r="10" :fill="hackedSystems.includes('cameras') ? '#22c55e' : '#ff3366'"
                class="animate-pulse" />
              <circle cx="150" cy="380" r="10" :fill="hackedSystems.includes('cameras') ? '#22c55e' : '#ff3366'"
                class="animate-pulse" />
              <circle cx="520" cy="520" r="10" :fill="hackedSystems.includes('cameras') ? '#22c55e' : '#ff3366'"
                class="animate-pulse" />
            </template>
            <line x1="300" y1="240" x2="300" y2="270" :stroke="hackedSystems.includes('doors') ? '#22c55e' : '#fbbf24'"
              stroke-width="6" />
            <line x1="390" y1="40" x2="420" y2="40" :stroke="hackedSystems.includes('doors') ? '#22c55e' : '#fbbf24'"
              stroke-width="6" />
            <line x1="480" y1="300" x2="510" y2="300" :stroke="hackedSystems.includes('doors') ? '#22c55e' : '#fbbf24'"
              stroke-width="6" />
            <line x1="510" y1="180" x2="540" y2="180" :stroke="hackedSystems.includes('doors') ? '#22c55e' : '#fbbf24'"
              stroke-width="6" />
            <line x1="255" y1="400" x2="285" y2="400" :stroke="hackedSystems.includes('doors') ? '#22c55e' : '#fbbf24'"
              stroke-width="6" />
            <line x1="210" y1="450" x2="210" y2="480" :stroke="hackedSystems.includes('doors') ? '#22c55e' : '#fbbf24'"
              stroke-width="6" />
            <rect v-if="hackedSystems.length >= 3" x="215" y="460" width="80" height="50" fill="none" stroke="#ff3366"
              stroke-width="4" class="animate-pulse" />
          </svg>
          <div class="absolute bottom-4 left-4 bg-phantom-darker/90 backdrop-blur-sm rounded-lg p-2 text-xs space-y-1">
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 bg-red-500 rounded-full"></div><span>Cámara Activa</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 bg-green-500 rounded-full"></div><span>Sistema Hackeado</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-6 h-3 bg-yellow-500"></div><span>Puerta Bloqueada</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-6 h-3 bg-green-500"></div><span>Puerta Desbloqueada</span>
            </div>
          </div>
        </div>
        <button @click="cameraVisible = !cameraVisible"
          class="mt-3 w-full py-2 bg-phantom-darker/50 hover:bg-phantom-darker border border-phantom-accent/20 hover:border-phantom-accent/50 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
          <div v-html="cameraVisible ? icons.eye : icons['eye-off']" class="w-5 h-5"></div>
          {{ cameraVisible ? 'Ocultar Cámaras' : 'Mostrar Cámaras' }}
        </button>
      </div>

      <!-- Control Panel -->
      <div class="space-y-4">
        <div class="bg-phantom-dark/50 backdrop-blur-sm border border-phantom-accent/20 rounded-2xl p-4">
          <h3 class="text-lg font-bold mb-4 flex items-center gap-2">
            <div v-html="icons.cpu" class="w-6 h-6 text-phantom-accent"></div>
            Panel de Hackeo
          </h3>
          <div class="space-y-3">
            <div v-for="system in systems" :key="system.id"
              :class="['p-3 rounded-xl border-2 transition-all duration-300', { 'bg-green-500/10 border-green-500': hackedSystems.includes(system.id), 'bg-phantom-darker/50 border-phantom-accent/30 hover:border-phantom-accent/60': !hackedSystems.includes(system.id) }]">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-3">
                  <div
                    :class="['w-3 h-3 rounded-full', { 'bg-green-500': hackedSystems.includes(system.id), 'bg-red-500 animate-pulse': !hackedSystems.includes(system.id) }]">
                  </div>
                  <span class="font-semibold">{{ system.name }}</span>
                </div>
                <span class="text-sm text-gray-400 font-mono">+{{ system.time }}s</span>
              </div>
              <button @click="handleHack(system.id)" :disabled="hackedSystems.includes(system.id)"
                :class="['w-full py-1 rounded-lg font-medium transition-all duration-300', { 'bg-green-500/20 text-green-500 cursor-not-allowed': hackedSystems.includes(system.id), 'bg-phantom-accent text-phantom-darker hover:bg-white hover:scale-105 active:scale-95': !hackedSystems.includes(system.id) }]">
                {{ hackedSystems.includes(system.id) ? '✓ Hackeado' : 'Hackear Sistema' }}
              </button>
            </div>
          </div>
        </div>

        <!-- Progress indicator -->
        <div class="bg-phantom-dark/50 backdrop-blur-sm border border-phantom-accent/20 rounded-2xl p-4">
          <h4 class="text-base font-bold mb-3">Progreso de Infiltración</h4>
          <div class="space-y-3">
            <div class="flex justify-between text-sm mb-2">
              <span class="text-gray-400">Sistemas Comprometidos</span>
              <span class="text-phantom-accent font-bold">{{ hackedSystems.length }} / {{ systems.length }}</span>
            </div>
            <div class="h-3 bg-phantom-darker rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-phantom-accent to-green-500 transition-all duration-500"
                :style="{ width: `${(hackedSystems.length / systems.length) * 100}%` }"></div>
            </div>
            <div v-if="hackedSystems.length === systems.length"
              class="mt-4 p-4 bg-green-500/10 border border-green-500 rounded-lg animate-fadeInUp">
              <p class="text-green-500 font-bold text-center">✓ Todos los sistemas comprometidos. El infiltrado puede
                avanzar.
              </p>
            </div>
          </div>
        </div>

        <!-- Reset button -->
        <button @click="resetSimulation"
          class="w-full py-2 bg-phantom-darker/50 hover:bg-red-500/20 border border-phantom-accent/20 hover:border-red-500 rounded-lg transition-all duration-300 text-gray-400 hover:text-red-500">
          Reiniciar Simulación
        </button>
      </div>
    </div>

    <!-- Info box -->
    <!-- <div class="mt-6 bg-phantom-accent/5 border border-phantom-accent/30 rounded-2xl p-4"> -->
    <!--   <h4 class="font-bold text-base mb-3 text-phantom-accent">💡 Sobre este Prototipo</h4> -->
    <!--   <p class="text-gray-300 leading-relaxed text-sm"> -->
    <!--     Este es un <strong>prototipo de baja fidelidad</strong> basado en el plano arquitectónico real del edificio objetivo.  -->
    <!--     Las cámaras (puntos rojos) y puertas (líneas amarillas/verdes).  -->
    <!--     En el juego final, el hacker podrá hackear sistemas para desactivar cámaras y abrir puertas de forma progresiva,  -->
    <!--     coordinando con el infiltrado VR en tiempo real. -->
    <!--   </p> -->
    <!-- </div> -->
  </div>
</template>
