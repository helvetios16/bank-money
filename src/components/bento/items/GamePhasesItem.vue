<script setup>
const gamePhasesIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;

const phases = [
  { icon: 'target', label: 'Infiltración', delay: '0.1s' },
  { icon: 'gem', label: 'Robo', delay: '0.2s' },
  { icon: 'run', label: 'Escape', delay: '0.3s' },
  { icon: 'trophy', label: 'Éxito', delay: '0.4s' }
];

const phaseIcons = {
  target: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  gem: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gem"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/></svg>`,
  run: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-run"><path d="M19 13l-7 5-7-5V6l7 5 7-5z"/><path d="M2 2v10c0 1.1.9 2 2 2h14"/></svg>`,
  trophy: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trophy"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.2-.47.2 0 .53.47.8.47.8V22"/><path d="M14 14.66V17c0 .55.47.2.47.2 0 .53-.47.8-.47.8V22"/><path d="M18 2H6v7a6 6 0 0 0 12 0Z"/></svg>`
};
</script>

<template>
  <div class="relative h-full flex flex-col justify-between p-4">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-phantom-accent/10 to-phantom-accent/5 rounded-lg"></div>

    <!-- Header -->
    <div class="relative z-10 mb-2">
      <div class="flex items-center gap-2 mb-2">
        <div v-html="gamePhasesIcon" class="text-phantom-accent w-6 h-6"></div>
        <h2 class="text-lg font-bold text-phantom-accent">Fases del Juego</h2>
      </div>
      <p class="text-white/80 text-xs">4 fases, un objetivo.</p>
    </div>

    <!-- Phase Timeline -->
    <div class="relative z-10 flex-1 flex items-center justify-center">
      <div class="flex items-center gap-3 relative">
        <!-- Connecting line -->
        <div
          class="absolute top-1/2 left-6 right-6 h-0.5 bg-gradient-to-r from-phantom-accent/20 via-phantom-accent/40 to-phantom-accent/20 transform -translate-y-1/2">
        </div>

        <!-- Phase icons -->
        <div v-for="(phase, index) in phases" :key="index"
          class="relative flex flex-col items-center gap-1 animate-fadeInUp" :style="{ animationDelay: phase.delay }">
          <div
            class="w-10 h-10 rounded-full bg-phantom-accent/10 border-2 border-phantom-accent/30 flex items-center justify-center transition-all duration-300 hover:bg-phantom-accent/20 hover:scale-110 hover:shadow-lg hover:shadow-phantom-accent/20">
            <div v-html="phaseIcons[phase.icon]" class="text-phantom-accent w-5 h-5"></div>
          </div>
          <span class="text-xs text-white/60 font-medium">{{ phase.label }}</span>
        </div>
      </div>
    </div>

    <!-- Decorative element -->
    <div class="relative z-10 flex justify-center mt-2">
      <div class="flex gap-1">
        <div class="w-1.5 h-1.5 rounded-full bg-phantom-accent/40 animate-pulse"></div>
        <div class="w-1.5 h-1.5 rounded-full bg-phantom-accent/40 animate-pulse" style="animation-delay: 0.3s"></div>
        <div class="w-1.5 h-1.5 rounded-full bg-phantom-accent/40 animate-pulse" style="animation-delay: 0.6s"></div>
        <div class="w-1.5 h-1.5 rounded-full bg-phantom-accent/40 animate-pulse" style="animation-delay: 0.9s"></div>
      </div>
    </div>
  </div>
</template>
