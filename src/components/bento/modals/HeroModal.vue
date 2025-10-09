<script setup>
const stats = [
  { value: '4', label: 'Fases de Juego' },
  { value: '2', label: 'Jugadores' },
  { value: '20', label: 'Min por Partida' },
  { value: 'VR', label: 'Experiencia Inmersiva' },
];
</script>

<template>
  <div class="text-center">
    <!-- Tag superior -->
    <div class="inline-block mb-6 px-4 py-2 bg-phantom-accent/10 border border-phantom-accent/30 rounded-full">
      <span class="text-phantom-accent text-sm font-mono">
        COOPERATIVO • REALIDAD VIRTUAL • SIGILO
      </span>
    </div>

    <!-- Título principal -->
    <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
      THE <span class="text-phantom-accent">PHANTOM</span><br />
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-phantom-accent to-white">HEIST</span>
    </h1>

    <!-- Subtítulo -->
    <p class="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
      Experiencia cooperativa inmersiva donde 
      <strong class="text-white">un hacker remoto</strong> y 
      <strong class="text-white"> un infiltrado VR</strong> deben coordinar el robo perfecto.
    </p>

    <!-- Botones CTA -->
    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
      <a 
        href="#prototype"
        class="btn-primary inline-flex items-center gap-2 group"
        aria-label="Ver prototipo interactivo"
      >
        Ver Prototipo
      </a>
      <a 
        href="#team"
        class="btn-secondary inline-flex items-center gap-2"
        aria-label="Conocer al equipo de desarrollo"
      >
        Contactar Equipo
      </a>
    </div>

    <!-- Estadísticas -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
      <div v-for="stat in stats" :key="stat.label" class="bg-phantom-dark/50 backdrop-blur-sm border border-phantom-accent/20 rounded-lg p-4 hover:border-phantom-accent/50 transition-colors duration-300">
        <div class="text-3xl font-bold text-phantom-accent mb-1">{{ stat.value }}</div>
        <div class="text-sm text-gray-400">{{ stat.label }}</div>
      </div>
    </div>
  </div>
</template>