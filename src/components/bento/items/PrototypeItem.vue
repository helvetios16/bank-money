<script setup>
const constructionIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-construction"><rect x="2" y="6" width="20" height="8" rx="1"/><path d="M17 14v3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-3"/><path d="M12 18v4"/><path d="M12 2v4"/><path d="M4 6V2"/><path d="M20 6V2"/></svg>`;
</script>

<template>
  <div class="relative h-full flex flex-col items-center justify-center text-center p-4">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 rounded-lg"></div>

    <!-- Content -->
    <div class="relative z-10">
      <div class="flex items-center justify-center gap-2 mb-2">
        <div v-html="constructionIcon" class="text-yellow-500 w-8 h-8"></div>
      </div>
      <h2 class="text-2xl font-bold text-yellow-500 mb-2">En Construcción</h2>
      <p class="text-white/80 text-sm">Esta sección estará disponible próximamente.</p>
    </div>
  </div>
</template>
