<script setup>
const gameplayLoopIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-repeat"><path d="M17 2.1l4 4-4 4"/><path d="M3 12.2v-2a4 4 0 0 1 4-4h12.8"/><path d="M7 21.9l-4-4 4-4"/><path d="M21 11.8v2a4 4 0 0 1-4 4H4.2"/></svg>`;

const steps = [
  { icon: 'bot', label: 'Llega un Bot', delay: '0.1s' },
  { icon: 'money', label: 'Das Dinero', delay: '0.2s' },
  { icon: 'score', label: 'Sube Puntaje', delay: '0.3s' },
];

const stepIcons = {
  bot: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-cog"><circle cx="12" cy="12" r="4"/><path d="M17.5 17.5L19 19"/><path d="M2 12h.01"/><path d="M12 2v.01"/><path d="M12 22v-.01"/><path d="M22 12h-.01"/><path d="m15.54 8.46-.71-.71"/><path d="m8.46 15.54-.71-.71"/><path d="m15.54 15.54.71-.71"/><path d="m8.46 8.46.71-.71"/></svg>`,
  money: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dollar-sign"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  score: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
};
</script>

<template>
  <div class="relative h-full flex flex-col justify-between p-4">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-phantom-accent/10 to-phantom-accent/5 rounded-lg"></div>

    <!-- Header -->
    <div class="relative z-10 mb-2">
      <div class="flex items-center gap-2 mb-2">
        <div v-html="gameplayLoopIcon" class="text-phantom-accent w-6 h-6"></div>
        <h2 class="text-lg font-bold text-phantom-accent">Ciclo de Juego</h2>
      </div>
      <p class="text-white/80 text-xs">Atiende a los bots, ¡rápido!</p>
    </div>

    <!-- Gameplay Loop -->
    <div class="relative z-10 flex-1 flex items-center justify-center">
      <div class="flex items-center gap-3 relative">
        <!-- Connecting line -->
        <div
          class="absolute top-1/2 left-6 right-6 h-0.5 bg-gradient-to-r from-phantom-accent/20 via-phantom-accent/40 to-phantom-accent/20 transform -translate-y-1/2">
        </div>

        <!-- Step icons -->
        <div v-for="(step, index) in steps" :key="index"
          class="relative flex flex-col items-center gap-1 animate-fadeInUp" :style="{ animationDelay: step.delay }">
          <div
            class="w-10 h-10 rounded-full bg-phantom-accent/10 border-2 border-phantom-accent/30 flex items-center justify-center transition-all duration-300 hover:bg-phantom-accent/20 hover:scale-110 hover:shadow-lg hover:shadow-phantom-accent/20">
            <div v-html="stepIcons[step.icon]" class="text-phantom-accent w-5 h-5"></div>
          </div>
          <span class="text-xs text-white/60 font-medium">{{ step.label }}</span>
        </div>
      </div>
    </div>

    <!-- Decorative element -->
    <div class="relative z-10 flex justify-center mt-2">
      <div class="flex gap-1">
        <div class="w-1.5 h-1.5 rounded-full bg-phantom-accent/40 animate-pulse"></div>
        <div class="w-1.5 h-1.5 rounded-full bg-phantom-accent/40 animate-pulse" style="animation-delay: 0.3s"></div>
        <div class="w-1.5 h-1.5 rounded-full bg-phantom-accent/40 animate-pulse" style="animation-delay: 0.6s"></div>
      </div>
    </div>
  </div>
</template>
