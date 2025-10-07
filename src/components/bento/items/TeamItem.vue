<script setup>
const displayMembers = [
  { avatar: 'WR', color: 'from-blue-500 to-cyan-500' },
  { avatar: 'JF', color: 'from-purple-500 to-pink-500' },
  { avatar: 'SM', color: 'from-green-500 to-emerald-500' },
  { avatar: 'JM', color: 'from-orange-500 to-red-500' },
];
</script>

<template>
  <div class="relative h-full flex flex-col justify-between p-6">
    <!-- Fondo sutil para los avatares -->
    <div class="absolute inset-0 flex items-center justify-center opacity-10">
      <div class="w-48 h-48 rounded-full bg-phantom-accent blur-2xl"></div>
    </div>

    <div class="relative z-10">
      <h2 class="text-2xl font-bold text-phantom-accent mb-2">Conoce al Equipo</h2>
      <p class="text-white/80 text-sm mb-4">Un equipo multidisciplinario.</p>
    </div>

    <div class="relative z-10 flex justify-center -space-x-3 mb-4">
      <div
        v-for="(member, index) in displayMembers"
        :key="index"
        :class="`w-12 h-12 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-sm font-bold border-2 border-phantom-darker`"
      >
        {{ member.avatar }}
      </div>
    </div>

    <div class="relative z-10">
      <button class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg
                     bg-phantom-accent/10 border border-phantom-accent/30 text-phantom-accent
                     font-semibold transition-all duration-300 hover:bg-phantom-accent/20
                     hover:scale-105 focus:outline-none focus:ring-4 focus:ring-phantom-accent/50
                     active:scale-95 w-full">
        Ver Equipo
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
      </button>
    </div>
  </div>
</template>
