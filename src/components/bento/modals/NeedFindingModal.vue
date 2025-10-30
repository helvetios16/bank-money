<script setup>
const needs = [
  { id: 1, title: 'Visualización gráfica', description: 'Ver el comportamiento de los algoritmos de manera visual', icon: '🎨' },
  { id: 2, title: 'Comprensión de recursión', description: 'Visualizar el call stack para entender la recursión', icon: '🔄' },
  { id: 3, title: 'Código + visualización', description: 'Ver pseudocódigo/código junto a la representación gráfica', icon: '💻' },
  { id: 4, title: 'Navegación paso a paso', description: 'Avanzar y retroceder entre pasos del algoritmo', icon: '🎮' },
  { id: 5, title: 'Código editable', description: 'Modificar el código y observar cambios visuales en tiempo real', icon: '🧪' },
  { id: 6, title: 'Análisis de complejidad', description: 'Identificar y comprender la complejidad del algoritmo', icon: '⚡' },
  { id: 7, title: 'Soporte y explicaciones', description: 'Resolver dudas mediante explicaciones textuales o LLM', icon: '🤖' },
  { id: 8, title: 'Práctica activa', description: 'Implementar algoritmos propios desde cero', icon: '💪' },
  { id: 9, title: 'Pensamiento crítico', description: 'Analizar y proponer mejoras a implementaciones existentes', icon: '💡' },
  { id: 10, title: 'Consolidación', description: 'Realizar pruebas prácticas para evaluar conocimientos', icon: '📝' },
];

const insights = [
  {
    title: 'Visualización como Primer Recurso',
    description: 'Los estudiantes prefieren representaciones gráficas y videos antes que texto o código puro.',
    icon: '🎨'
  },
  {
    title: 'Recursión: Punto de Confusión Crítica',
    description: 'La recursión resulta confusa sin poder visualizar el call stack o el flujo de llamadas.',
    icon: '🔄'
  },
  {
    title: 'Necesidad de Interacción Paso a Paso',
    description: 'Los usuarios necesitan controlar el ritmo de ejecución para comprender los cambios.',
    icon: '🎮'
  },
  {
    title: 'Código Editable para Experimentación',
    description: 'Modificar código y ver resultados inmediatos refuerza el aprendizaje a través del error.',
    icon: '🧪'
  },
  {
    title: 'Conexión Código-Visual Simultánea',
    description: 'Requieren ver código y visualización al mismo tiempo para comprender el flujo completo.',
    icon: '🔗'
  },
  {
    title: 'Complejidad como Reto Post-Básico',
    description: 'La eficiencia y complejidad son esenciales para valorar realmente el algoritmo.',
    icon: '⚡'
  },
  {
    title: 'Apoyo de IA para Dudas Específicas',
    description: 'Los LLMs son útiles para resolver preguntas puntuales y reforzar conceptos.',
    icon: '🤖'
  },
  {
    title: 'Aprendizaje Activo mediante Práctica',
    description: 'Usar ejemplos físicos, escribir código propio y experimentar refuerza la comprensión.',
    icon: '💪'
  },
];

const participants = [
  {
    name: 'Participante A',
    profile: 'Estudiante de 4to ciclo aprendiendo algoritmos de ordenamiento por primera vez',
    color: 'from-red-500 to-orange-500',
    interviewer: 'Jose'
  },
  {
    name: 'Participante B',
    profile: 'Estudiante de 3er año que necesita reforzar comprensión de eficiencia y complejidad',
    color: 'from-blue-500 to-cyan-500',
    interviewer: 'Johan'
  },
  {
    name: 'Participante C',
    profile: 'Estudiante de 4to-5to año preparándose para entrevistas técnicas',
    color: 'from-green-500 to-emerald-500',
    interviewer: 'Sebastian'
  },
  {
    name: 'Participante D',
    profile: 'Docente universitario con experiencia en enseñanza de Algoritmos',
    color: 'from-purple-500 to-pink-500',
    interviewer: 'Wilson'
  },
];

const teamMembers = [
  'Lizarve Mamani Johan Fabricio',
  'Machaca Muñiz Jose',
  'Mendoza Fernandez Sebastian Andres',
  'Ramos Pacco Wilson'
];
</script>

<template>
  <div class="max-h-[80vh] overflow-y-auto pr-4 custom-scrollbar">
    <!-- Header -->
    <div class="text-center mb-10 animate-fadeInUp">
      <div class="flex items-center justify-center gap-3 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-check text-purple-400">
          <path d="m8 11 2 2 4-4"/>
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.3-4.3"/>
        </svg>
        <h2 class="text-4xl md:text-5xl font-bold">
          <span class="text-purple-400">Needfinding</span> Research
        </h2>
      </div>
      <p class="text-xl text-gray-400 max-w-3xl mx-auto">
        Investigación sobre el aprendizaje de algoritmos de ordenamiento
      </p>
      <div class="inline-block mt-4 px-4 py-2 bg-purple-500/10 border border-purple-400/30 rounded-full">
        <span class="text-sm text-purple-400 font-semibold">CS374 Design Project</span>
      </div>
    </div>

    <!-- Objetivos del Proyecto -->
    <section class="mb-12 animate-fadeInUp" style="animation-delay: 0.1s">
      <h3 class="text-2xl font-bold mb-4 text-purple-400">📋 Objetivos del Proyecto</h3>
      <div class="bg-phantom-dark/50 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-6">
        <p class="text-gray-300 mb-4">
          <strong class="text-white">Usuario Objetivo:</strong> Estudiantes universitarios de carreras de computación,
          ingeniería de software o afines, que cursan materias como Estructuras de Datos y Algoritmos.
        </p>
        <p class="text-gray-300">
          <strong class="text-white">Experiencia Investigada:</strong> Cómo aprenden los estudiantes los algoritmos
          de ordenamiento y qué dificultades enfrentan en el proceso.
        </p>
      </div>
    </section>

    <!-- Metodología -->
    <section class="mb-12 animate-fadeInUp" style="animation-delay: 0.2s">
      <h3 class="text-2xl font-bold mb-6 text-purple-400">🔍 Metodología</h3>
      <div class="grid md:grid-cols-2 gap-4">
        <div v-for="(participant, index) in participants" :key="index"
          class="bg-phantom-dark/50 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300">
          <div class="flex items-start gap-4">
            <div :class="`w-12 h-12 rounded-lg bg-gradient-to-br ${participant.color} flex items-center justify-center text-xl font-bold flex-shrink-0`">
              {{ String.fromCharCode(65 + index) }}
            </div>
            <div class="flex-1">
              <h4 class="font-bold text-white mb-2">{{ participant.name }}</h4>
              <p class="text-sm text-gray-400 mb-2">{{ participant.profile }}</p>
              <p class="text-xs text-purple-400">Entrevistado por: {{ participant.interviewer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Necesidades Identificadas -->
    <section class="mb-12 animate-fadeInUp" style="animation-delay: 0.3s">
      <h3 class="text-2xl font-bold mb-6 text-purple-400">💡 Necesidades Identificadas</h3>
      <div class="grid md:grid-cols-2 gap-4">
        <div v-for="need in needs" :key="need.id"
          class="bg-phantom-dark/50 backdrop-blur-sm border border-purple-400/20 rounded-xl p-4 hover:border-purple-400/50 transition-all duration-300">
          <div class="flex items-start gap-3">
            <span class="text-3xl flex-shrink-0">{{ need.icon }}</span>
            <div>
              <h4 class="font-bold text-white mb-1">{{ need.id }}. {{ need.title }}</h4>
              <p class="text-sm text-gray-400">{{ need.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Insights Principales -->
    <section class="mb-12 animate-fadeInUp" style="animation-delay: 0.4s">
      <h3 class="text-2xl font-bold mb-6 text-purple-400">✨ Insights Principales</h3>
      <div class="space-y-4">
        <div v-for="(insight, index) in insights" :key="index"
          class="bg-phantom-dark/50 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300">
          <div class="flex items-start gap-4">
            <span class="text-4xl flex-shrink-0">{{ insight.icon }}</span>
            <div>
              <h4 class="font-bold text-white text-lg mb-2">{{ insight.title }}</h4>
              <p class="text-gray-400">{{ insight.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Materiales de Investigación -->
    <section class="mb-12 animate-fadeInUp" style="animation-delay: 0.5s">
      <h3 class="text-2xl font-bold mb-6 text-purple-400">📚 Materiales de Investigación</h3>
      <div class="bg-phantom-dark/50 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-6">
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <span class="text-2xl">📄</span>
            <div>
              <p class="text-white font-semibold">Presentación completa</p>
              <a href="https://drive.google.com/file/d/184A_SPeaLXj0TaMjSn28JMG1og4uTYSk/view?usp=sharing" target="_blank"
                class="text-purple-400 hover:text-purple-300 text-sm transition-colors">
                Needfinding.pdf
              </a>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-2xl">🎥</span>
            <div class="flex-1">
              <p class="text-white font-semibold mb-2">Entrevistas grabadas</p>
              <div class="space-y-1 text-sm">
                <a href="https://drive.google.com/file/d/1PbS-Kfx3yotUwupkS18m1GR8L-rpPipN/view?usp=sharing" target="_blank"
                  class="block text-purple-400 hover:text-purple-300 transition-colors">
                  → Usuario A - Estudiante principiante
                </a>
                <a href="https://drive.google.com/file/d/18VA8mWIXK9e8A2vkROYiqmsAjD9y0g_L/view?usp=sharing" target="_blank"
                  class="block text-purple-400 hover:text-purple-300 transition-colors">
                  → Usuario B - Estudiante intermedio
                </a>
                <a href="https://drive.google.com/drive/folders/1HeUkFPXMJ8dusMQJm6LxpGRT_mkMXC-T?usp=sharing" target="_blank"
                  class="block text-purple-400 hover:text-purple-300 transition-colors">
                  → Usuarios C y D - Avanzado y Docente
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Equipo de Investigación -->
    <section class="animate-fadeInUp" style="animation-delay: 0.6s">
      <h3 class="text-2xl font-bold mb-6 text-purple-400">👥 Equipo de Investigación</h3>
      <div class="bg-phantom-dark/50 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-6">
        <div class="grid md:grid-cols-2 gap-3">
          <div v-for="(member, index) in teamMembers" :key="index"
            class="flex items-center gap-3 bg-phantom-darker/50 rounded-lg p-3">
            <div class="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">
              {{ member.split(' ')[0][0] }}{{ member.split(' ')[member.split(' ').length - 1][0] }}
            </div>
            <span class="text-gray-300 text-sm">{{ member }}</span>
          </div>
        </div>
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
