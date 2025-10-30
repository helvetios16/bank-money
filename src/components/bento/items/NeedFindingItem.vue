<script setup>
const researchIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-check"><path d="m8 11 2 2 4-4"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`;
</script>

<template>
  <div class="relative h-full flex flex-col justify-between p-4">
    <!-- Enhanced background with gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/10 rounded-lg"></div>
    <div class="absolute inset-0 flex items-center justify-center opacity-5">
      <div class="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 blur-xl"></div>
    </div>

    <div class="relative z-10">
      <div class="flex items-center gap-2 mb-2">
        <div v-html="researchIcon" class="text-purple-400 w-6 h-6"></div>
        <h2 class="text-lg font-bold text-purple-400">Needfinding</h2>
      </div>
      <p class="text-white/80 text-xs">Algoritmos de ordenamiento</p>
    </div>

    <div class="relative z-10">
      <button class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg
                     bg-purple-500/10 border border-purple-400/30 text-purple-400
                     font-semibold transition-all duration-300 hover:bg-purple-500/20
                     hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-400/50
                     active:scale-95 w-full group">
        <span class="group-hover:translate-x-1 transition-transform duration-200">Ver Investigación</span>
        <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none"
          stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </button>

      <!-- Decorative element -->
      <div class="flex justify-center mt-2">
        <div class="flex gap-1">
          <div class="w-1.5 h-1.5 rounded-full bg-purple-400/30 animate-pulse"></div>
          <div class="w-1.5 h-1.5 rounded-full bg-purple-400/30 animate-pulse" style="animation-delay: 0.2s"></div>
          <div class="w-1.5 h-1.5 rounded-full bg-purple-400/30 animate-pulse" style="animation-delay: 0.4s"></div>
        </div>
      </div>
    </div>
  </div>
</template>
