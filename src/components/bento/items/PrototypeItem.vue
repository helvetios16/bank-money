<script setup>
const prototypeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-terminal"><polyline points="4,17 10,11 4,5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>`;

const codeLines = [
  '> ACCESO CONCEDIDO...',
  '> ANALIZANDO FIREWALL...',
  '> BYPASSING SECURITY...',
  '> EXTRACTING DATA...',
  '> OPERATION COMPLETE.'
];
</script>

<template>
  <div class="relative h-full flex flex-col justify-between p-4 overflow-hidden">
    <!-- Animated background -->
    <div class="absolute inset-0 bg-gradient-to-br from-phantom-accent/5 to-phantom-accent/10 rounded-lg"></div>
    <div class="absolute inset-0 opacity-5">
      <div class="w-full h-full bg-gradient-to-r from-transparent via-phantom-accent/20 to-transparent animate-pulse">
      </div>
    </div>

    <!-- Header -->
    <div class="relative z-10 mb-2">
      <div class="flex items-center gap-2 mb-2">
        <div v-html="prototypeIcon" class="text-phantom-accent w-6 h-6"></div>
        <h2 class="text-lg font-bold text-phantom-accent">Prototipo Interactivo</h2>
      </div>
      <p class="text-white/80 text-xs">Experimenta la fase de hackeo.</p>
    </div>

    <!-- Code terminal simulation -->
    <div class="relative z-10 flex-1 flex items-center justify-center">
      <div
        class="w-full max-w-xs bg-phantom-darker/80 border border-phantom-accent/30 rounded-md p-3 font-mono text-xs">
        <!-- Terminal header -->
        <div class="flex items-center gap-1 mb-2 pb-1 border-b border-phantom-accent/20">
          <div class="w-2 h-2 rounded-full bg-red-500"></div>
          <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div class="w-2 h-2 rounded-full bg-green-500"></div>
          <span class="text-phantom-accent text-xs ml-1">terminal</span>
        </div>

        <!-- Animated code lines -->
        <div class="space-y-0.5">
          <div v-for="(line, index) in codeLines.slice(0, 3)" :key="index"
            class="text-green-400 animate-fadeInUp flex items-center gap-1"
            :style="{ animationDelay: `${index * 0.6}s` }">
            <span class="text-phantom-accent">$</span>
            <span class="typing-animation" :style="{ animationDelay: `${index * 0.6 + 0.2}s` }">{{ line }}</span>
          </div>
        </div>

        <!-- Progress bar -->
        <div class="mt-2">
          <div class="flex justify-between text-xs text-white/60 mb-0.5">
            <span>Progress</span>
            <span>78%</span>
          </div>
          <div class="w-full bg-phantom-accent/20 rounded-full h-1.5">
            <div class="bg-phantom-accent h-1.5 rounded-full animate-pulse" style="width: 78%"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative elements -->
    <div class="relative z-10 flex justify-between items-center mt-2">
      <div class="flex gap-0.5">
        <div class="w-1.5 h-1.5 rounded-full bg-phantom-accent/40 animate-ping"></div>
        <div class="w-1.5 h-1.5 rounded-full bg-phantom-accent/40 animate-ping" style="animation-delay: 0.5s"></div>
        <div class="w-1.5 h-1.5 rounded-full bg-phantom-accent/40 animate-ping" style="animation-delay: 1s"></div>
      </div>
      <div class="text-xs text-phantom-accent/60 font-mono">v2.1.4</div>
    </div>
  </div>
</template>

<style scoped>
.typing-animation {
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #00ff00;
  animation: typing 2s steps(20, end), blink 1s infinite;
}

@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

@keyframes blink {

  from,
  to {
    border-color: transparent;
  }

  50% {
    border-color: #00ff00;
  }
}
</style>
