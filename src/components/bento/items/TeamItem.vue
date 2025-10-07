<script setup>
const displayMembers = [
  { avatar: 'WR', color: 'from-blue-500 to-cyan-500' },
  { avatar: 'JF', color: 'from-purple-500 to-pink-500' },
  { avatar: 'SM', color: 'from-green-500 to-emerald-500' },
  { avatar: 'JM', color: 'from-orange-500 to-red-500' },
];

const teamIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
</script>

<template>
  <div class="relative h-full flex flex-col justify-between p-4">
    <!-- Enhanced background with gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-phantom-accent/5 to-phantom-accent/10 rounded-lg"></div>
    <div class="absolute inset-0 flex items-center justify-center opacity-5">
      <div class="w-32 h-32 rounded-full bg-gradient-to-br from-phantom-accent to-transparent blur-xl"></div>
    </div>

    <div class="relative z-10">
      <div class="flex items-center gap-2 mb-2">
        <div v-html="teamIcon" class="text-phantom-accent w-6 h-6"></div>
        <h2 class="text-lg font-bold text-phantom-accent">Conoce al Equipo</h2>
      </div>
      <p class="text-white/80 text-xs mb-3">Un equipo multidisciplinario.</p>
    </div>

    <div class="relative z-10 flex justify-center -space-x-3 mb-3">
      <div
        v-for="(member, index) in displayMembers"
        :key="index"
        :class="`w-10 h-10 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-sm font-bold border-2 border-phantom-darker transition-all duration-300 hover:scale-110 hover:z-20 animate-fadeInUp group`"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <div class="group-hover:animate-pulse">{{ member.avatar }}</div>
      </div>
    </div>

    <div class="relative z-10">
      <button class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg
                     bg-phantom-accent/10 border border-phantom-accent/30 text-phantom-accent
                     font-semibold transition-all duration-300 hover:bg-phantom-accent/20
                     hover:scale-105 focus:outline-none focus:ring-4 focus:ring-phantom-accent/50
                     active:scale-95 w-full group">
        <span class="group-hover:translate-x-1 transition-transform duration-200">Ver Equipo</span>
        <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
      </button>

      <!-- Decorative element -->
      <div class="flex justify-center mt-2">
        <div class="flex gap-1">
          <div class="w-1.5 h-1.5 rounded-full bg-phantom-accent/30 animate-pulse"></div>
          <div class="w-1.5 h-1.5 rounded-full bg-phantom-accent/30 animate-pulse" style="animation-delay: 0.2s"></div>
          <div class="w-1.5 h-1.5 rounded-full bg-phantom-accent/30 animate-pulse" style="animation-delay: 0.4s"></div>
        </div>
      </div>
    </div>
  </div>
</template>
