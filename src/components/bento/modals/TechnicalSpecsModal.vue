<script setup>
const specs = {
  minimum: [
    { icon: 'monitor', label: 'Headset VR', value: 'Oculus Quest 2 / HTC Vive' },
    { icon: 'cpu', label: 'CPU', value: 'Intel i5-9400F / AMD Ryzen 5 3600' },
    { icon: 'hard-drive', label: 'RAM', value: '8 GB' },
    { icon: 'gamepad-2', label: 'GPU', value: 'NVIDIA GTX 1060 / AMD RX 580' },
    { icon: 'hard-drive', label: 'Almacenamiento', value: '15 GB disponibles' },
    { icon: 'wifi', label: 'Internet', value: 'Conexión de banda ancha' },
  ],
  recommended: [
    { icon: 'monitor', label: 'Headset VR', value: 'Valve Index / Meta Quest 3' },
    { icon: 'cpu', label: 'CPU', value: 'Intel i7-11700K / AMD Ryzen 7 5800X' },
    { icon: 'hard-drive', label: 'RAM', value: '16 GB' },
    { icon: 'gamepad-2', label: 'GPU', value: 'NVIDIA RTX 3070 / AMD RX 6800' },
    { icon: 'hard-drive', label: 'Almacenamiento', value: '20 GB SSD' },
    { icon: 'wifi', label: 'Internet', value: 'Fibra óptica 100 Mbps+' },
  ]
}

const platforms = [
  { name: 'PC (Steam)', status: 'Lanzamiento', color: 'green' },
  { name: 'Meta Quest', status: 'Lanzamiento', color: 'green' },
  { name: 'PlayStation VR2', status: 'Post-lanzamiento', color: 'yellow' },
  { name: 'Apple Vision Pro', status: 'En evaluación', color: 'blue' },
]

const icons = {
  monitor: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>`,
  cpu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M9 2v2"/><path d="M9 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M2 12h20"/></svg>`,
  'hard-drive': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hard-drive"><line x1="22" x2="2" y1="12" y2="12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" x2="6.01" y1="16" y2="16"/><line x1="10" x2="10.01" y1="16" y2="16"/></svg>`,
  headphones: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-headphones"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/><path d="M12 13V4a4 4 0 1 0-8 0v5"/></svg>`,
  wifi: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wifi"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" x2="12.01" y1="20" y2="20"/></svg>`,
  'gamepad-2': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gamepad-2"><line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="10" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.97 3.59c-.02.08-.03.16-.03.25V15a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V8.84c0-.09-.01-.17-.03-.25a4 4 0 0 0-3.97-3.59Z"/></svg>`
}
</script>

<template>
  <div class="max-w-7xl mx-auto">
    <!-- Header -->
    <div class="text-center mb-16 animate-fadeInUp">
      <h2 id="specs-title" class="text-4xl md:text-5xl font-bold mb-4">
        Especificaciones <span class="text-phantom-accent">Técnicas</span>
      </h2>
      <p class="text-xl text-gray-400 max-w-3xl mx-auto">
        Requisitos del sistema y plataformas soportadas
      </p>
    </div>

    <!-- Platforms -->
    <div class="mb-16">
      <h3 class="text-2xl font-bold mb-6 text-center">Plataformas</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="(platform, index) in platforms"
          :key="index"
          class="bg-phantom-dark/50 border border-phantom-accent/20 rounded-xl p-6 text-center hover:border-phantom-accent/50 transition-colors duration-300"
        >
          <div class="font-bold mb-2">{{ platform.name }}</div>
          <div :class="['inline-block px-3 py-1 rounded-full text-xs font-semibold', {
            'bg-green-500/20 text-green-500': platform.color === 'green',
            'bg-yellow-500/20 text-yellow-500': platform.color === 'yellow',
            'bg-blue-500/20 text-blue-500': platform.color === 'blue'
          }]">
            {{ platform.status }}
          </div>
        </div>
      </div>
    </div>

    <!-- System Requirements -->
    <div class="grid md:grid-cols-2 gap-8">
      <!-- Minimum -->
      <div class="bg-phantom-dark/50 backdrop-blur-sm border border-phantom-accent/20 rounded-2xl p-8">
        <h3 class="text-2xl font-bold mb-6 text-center">
          Requisitos <span class="text-yellow-500">Mínimos</span>
        </h3>
        <div class="space-y-4">
          <div
            v-for="(spec, index) in specs.minimum"
            :key="index"
            class="flex items-center gap-4 p-4 bg-phantom-darker/50 rounded-lg"
          >
            <div v-html="icons[spec.icon]" class="text-yellow-500 flex-shrink-0 w-6 h-6"></div>
            <div class="flex-1">
              <div class="text-sm text-gray-400">{{ spec.label }}</div>
              <div class="font-semibold">{{ spec.value }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recommended -->
      <div class="bg-phantom-dark/50 backdrop-blur-sm border border-phantom-accent/20 rounded-2xl p-8">
        <h3 class="text-2xl font-bold mb-6 text-center">
          Requisitos <span class="text-green-500">Recomendados</span>
        </h3>
        <div class="space-y-4">
          <div
            v-for="(spec, index) in specs.recommended"
            :key="index"
            class="flex items-center gap-4 p-4 bg-phantom-darker/50 rounded-lg"
          >
            <div v-html="icons[spec.icon]" class="text-green-500 flex-shrink-0 w-6 h-6"></div>
            <div class="flex-1">
              <div class="text-sm text-gray-400">{{ spec.label }}</div>
              <div class="font-semibold">{{ spec.value }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Additional Features -->
    <div class="mt-12 bg-phantom-accent/5 border border-phantom-accent/30 rounded-2xl p-8">
      <h3 class="text-xl font-bold mb-4">Características Adicionales</h3>
      <ul class="grid md:grid-cols-2 gap-4 text-gray-300">
        <li class="flex items-center gap-2">
          <div v-html="icons.headphones" class="text-phantom-accent w-5 h-5"></div>
          <span>Audio espacial 3D requerido</span>
        </li>
        <li class="flex items-center gap-2">
          <div v-html="icons.wifi" class="text-phantom-accent w-5 h-5"></div>
          <span>Multijugador online obligatorio</span>
        </li>
        <li class="flex items-center gap-2">
          <div v-html="icons.monitor" class="text-phantom-accent w-5 h-5"></div>
          <span>Soporte para monitores secundarios</span>
        </li>
        <li class="flex items-center gap-2">
          <div v-html="icons['gamepad-2']" class="text-phantom-accent w-5 h-5"></div>
          <span>Compatible con mandos estándar</span>
        </li>
      </ul>
    </div>
  </div>
</template>
