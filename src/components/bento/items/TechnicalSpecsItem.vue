<script setup>
const cpuIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M9 2v2"/><path d="M9 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M2 12h20"/></svg>`
</script>

<template>
  <div class="relative h-full flex flex-col justify-between p-4">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-phantom-accent/10 to-transparent rounded-lg"></div>

    <!-- Content -->
    <div class="relative z-10">
      <div class="flex items-center gap-2 mb-2">
        <div v-html="cpuIcon" class="text-phantom-accent w-6 h-6"></div>
        <h2 class="text-lg font-bold text-phantom-accent">Especificaciones</h2>
      </div>
      <div class="text-white/80">
        <p class="text-xs">Requisitos mínimos y recomendados.</p>
      </div>
    </div>

    <!-- Decorative element -->
    <div class="relative z-10 mt-2 flex justify-end">
      <div class="w-6 h-6 border border-phantom-accent/30 rounded-full flex items-center justify-center">
        <div class="w-2 h-2 bg-phantom-accent/50 rounded-full"></div>
      </div>
    </div>
  </div>
</template>
