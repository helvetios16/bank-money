<script setup>
const videos = [
  {
    id: 1,
    title: 'Explicación General',
    description: 'Una visión completa de la experiencia de juego y sus características principales.',
    url: 'https://drive.google.com/file/d/1CiFSuVdcMYhmRnOWHLcCw7Ph4bqRXJ8W/view?usp=sharing',
    icon: '🎬'
  },
  {
    id: 2,
    title: 'Explicación en Situación de Crisis',
    description: 'Detalles sobre cómo el juego maneja situaciones de alta presión y desafíos inesperados.',
    url: 'https://drive.google.com/file/d/12SdtuiDVcXIZCdT6aYv2R6t25XBB8W81/view?usp=sharing',
    icon: '🚨'
  },
];
</script>

<template>
  <div class="max-h-[80vh] overflow-y-auto pr-4 custom-scrollbar">
    <!-- Header -->
    <div class="text-center mb-10 animate-fadeInUp">
      <div class="flex items-center justify-center gap-3 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play-circle text-purple-400">
            <circle cx="12" cy="12" r="10"/>
            <polygon points="10 8 16 12 10 16 10 8"/>
        </svg>
        <h2 class="text-4xl md:text-5xl font-bold">
          <span class="text-purple-400">Explicando el</span> Juego
        </h2>
      </div>
      <p class="text-xl text-gray-400 max-w-3xl mx-auto">
        Aquí encontrarás videos que explican el gameplay y las mecánicas del juego.
      </p>
    </div>

    <!-- Videos -->
    <section class="animate-fadeInUp" style="animation-delay: 0.1s">
      <div class="grid md:grid-cols-2 gap-6">
        <a v-for="video in videos" :key="video.id" :href="video.url" target="_blank"
          class="bg-phantom-dark/50 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300 flex items-start gap-4 group">
          <div class="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{{ video.icon }}</div>
          <div class="flex-1">
            <h4 class="font-bold text-white text-lg mb-2 group-hover:text-purple-400 transition-colors duration-300">{{ video.title }}</h4>
            <p class="text-gray-400 text-sm">{{ video.description }}</p>
            <div class="mt-3 text-purple-400 text-xs font-semibold flex items-center gap-1">
              Ver video
              <svg class="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </div>
          </div>
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(10, 14, 26, 0.5);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(168, 85, 247, 0.3);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(168, 85, 247, 0.5);
}
</style>
