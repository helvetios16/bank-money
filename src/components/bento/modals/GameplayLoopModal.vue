<script setup>
import { ref } from 'vue'

const activeStep = ref(0)

const steps = [
  {
    number: '01',
    title: 'Llega un Bot',
    subtitle: 'Solicitud de Dinero',
    icon: 'bot',
    color: 'from-blue-500 to-cyan-500',
    description: 'Un bot cliente se acerca al cajero con una solicitud de una cantidad específica de dinero. Tienes 30 segundos para atenderlo.',
    features: [
      'Bots con apariencias variadas.',
      'Solicitudes de dinero generadas proceduralmente.',
      'Temporizador de 30 segundos por bot.',
    ],
    mechanics: 'Debes identificar rápidamente la cantidad solicitada y entregar el dinero antes de que se acabe el tiempo.'
  },
  {
    number: '02',
    title: 'Entregas el Dinero',
    subtitle: 'Interacción VR',
    icon: 'money',
    color: 'from-purple-500 to-pink-500',
    description: 'Usando los controles de VR, tomas el dinero del cajón y se lo entregas al bot. Tienes hasta 3 intentos para darle la cantidad correcta.',
    features: [
      'Interacción física para agarrar y soltar dinero.',
      'Cajón de dinero virtual con diferentes denominaciones.',
      'Sistema de 3 intentos para la cantidad correcta.',
    ],
    mechanics: 'Si fallas 3 veces o se acaba el tiempo, el cliente se irá insatisfecho.'
  },
  {
    number: '03',
    title: 'Satisfacción del Cliente',
    subtitle: 'Ganas o Pierdes',
    icon: 'score',
    color: 'from-green-500 to-emerald-500',
    description: 'Comienzas con 2 clientes satisfechos. Si atiendes a un cliente correctamente, ganas un punto de satisfacción. Si un cliente se va insatisfecho, pierdes un punto. Si llegas a 5 puntos, ganas. Si llegas a 0, pierdes.',
    features: [
      'Medidor de satisfacción de clientes.',
      'Ganas con 5 clientes satisfechos.',
      'Pierdes con 0 clientes satisfechos.',
    ],
    mechanics: 'El objetivo es mantener a los clientes contentos para ganar la partida.'
  },
]

const icons = {
  bot: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-cog"><circle cx="12" cy="12" r="4"/><path d="M17.5 17.5L19 19"/><path d="M2 12h.01"/><path d="M12 2v.01"/><path d="M12 22v-.01"/><path d="M22 12h-.01"/><path d="m15.54 8.46-.71-.71"/><path d="m8.46 15.54-.71-.71"/><path d="m15.54 15.54.71-.71"/><path d="m8.46 8.46.71-.71"/></svg>`,
  money: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dollar-sign"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  score: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
}

const currentStep = ref(steps[activeStep.value])

const setActiveStep = (index) => {
  activeStep.value = index
  currentStep.value = steps[index]
}

</script>

<template>
  <div class="max-w-7xl mx-auto">
    <!-- Header -->
    <div class="text-center mb-12 animate-fadeInUp">
      <h2 id="gameplay-loop-title" class="text-3xl md:text-4xl font-bold mb-4">
        Ciclo de Juego <span class="text-phantom-accent">de Satisfacción</span>
      </h2>
      <p class="text-lg text-gray-400 max-w-3xl mx-auto">
        Tu objetivo es alcanzar 5 clientes satisfechos para ganar. Si tu medidor de satisfacción llega a 0, pierdes.
      </p>
    </div>

    <!-- Step Selector -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <button
        v-for="(step, index) in steps"
        :key="index"
        @click="setActiveStep(index)"
        :class="['p-4 rounded-xl transition-all duration-300 text-left', {
          ['bg-gradient-to-br text-white scale-105 shadow-2xl '+ step.color]: activeStep === index,
          'bg-phantom-dark/50 border border-phantom-accent/20 hover:border-phantom-accent/50 hover:scale-102': activeStep !== index
        }]"
        :aria-pressed="activeStep === index"
        :aria-label="`Seleccionar paso ${index + 1}: ${step.title}`"
      >
        <div v-html="icons[step.icon]" class="mb-3 w-8 h-8"></div>
        <div :class="['text-sm font-mono mb-1', { 'text-white/80': activeStep === index, 'text-phantom-accent': activeStep !== index }]">
          PASO {{ step.number }}
        </div>
        <div class="font-bold text-lg">{{ step.title }}</div>
      </button>
    </div>

    <!-- Step Detail -->
    <div class="bg-phantom-dark/50 backdrop-blur-sm border border-phantom-accent/20 rounded-2xl p-6 md:p-10 animate-fadeInUp">
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Left Column -->
        <div>
          <div class="flex items-start gap-4 mb-6">
            <div :class="['p-3 rounded-xl bg-gradient-to-br', currentStep.color]">
              <div v-html="icons[currentStep.icon]" class="w-8 h-8"></div>
            </div>
            <div>
              <div class="text-sm font-mono text-phantom-accent mb-1">PASO {{ currentStep.number }}</div>
              <h3 class="text-2xl font-bold mb-2">{{ currentStep.title }}</h3>
              <p class="text-gray-400">{{ currentStep.subtitle }}</p>
            </div>
          </div>

          <p class="text-base text-gray-300 mb-6 leading-relaxed">
            {{ currentStep.description }}
          </p>

          <div class="bg-phantom-darker/50 rounded-xl p-4 border border-phantom-accent/10">
            <h4 class="text-sm font-mono text-phantom-accent mb-3">MECÁNICAS CLAVE</h4>
            <p class="text-gray-300">{{ currentStep.mechanics }}</p>
          </div>
        </div>

        <!-- Right Column - Features List -->
        <div>
          <h4 class="text-lg font-bold mb-6 flex items-center gap-2">
            <div class="w-1 h-6 bg-gradient-to-b from-phantom-accent to-transparent"></div>
            Características
          </h4>
          <ul class="space-y-3" role="list">
            <li
              v-for="(feature, index) in currentStep.features"
              :key="index"
              class="flex items-start gap-3 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <div class="mt-1 w-2 h-2 bg-phantom-accent rounded-full flex-shrink-0"></div>
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Navigation Hint -->
    <div class="text-center mt-6 text-gray-500 text-sm">
      Selecciona un paso arriba para ver detalles • {{ activeStep + 1 }} de 3
    </div>
  </div>
</template>
