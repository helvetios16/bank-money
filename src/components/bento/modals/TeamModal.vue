<script setup>
const teamMembers = [
  {
    name: 'Wilson Ramos Pacco',
    role: 'Product Manager',
    bio: 'Visión estratégica y roadmap. 8 años en gaming, especializada en experiencias cooperativas.',
    avatar: 'AG',
    color: 'from-blue-500 to-cyan-500',
    responsibilities: 'Coordina desarrollo, define prioridades y gestiona stakeholders.',
    social: {
      github: '#',
      linkedin: '#',
      email: 'wilson.ramos@phantom.dev'
    }
  },
  {
    name: 'Johan Frabicio Lizarve Mamani',
    role: 'Lead Developer',
    bio: 'Full-stack + networking. Experto en Unity y arquitecturas multiplayer de baja latencia.',
    avatar: 'CM',
    color: 'from-purple-500 to-pink-500',
    responsibilities: 'Backend, networking, optimización y arquitectura técnica.',
    social: {
      github: '#',
      linkedin: '#',
      email: 'johan.lizarve@phantom.dev'
    }
  },
  {
    name: 'Sebastian Andres Mendoza Fernandez',
    role: 'UX/UI Designer',
    bio: 'Diseño centrado en usuario para VR. Especialista en interfaces diegéticas y prototipado.',
    avatar: 'LM',
    color: 'from-green-500 to-emerald-500',
    responsibilities: 'Research, wireframes, UI/UX de ambos roles y testing de usabilidad.',
    social: {
      github: '#',
      linkedin: '#',
      email: 'sebas.mendoza@phantom.dev'
    }
  },
  {
    name: 'Jose Alejando Machaca Muñiz',
    role: 'VR Artist & Interaction Designer',
    bio: '3D artist con enfoque en narrativa ambiental. 5 años en proyectos VR immersivos.',
    avatar: 'DR',
    color: 'from-orange-500 to-red-500',
    responsibilities: 'Assets 3D, iluminación, interacciones físicas y diseño de niveles.',
    social: {
      github: '#',
      linkedin: '#',
      email: 'Jose.Alejando@phantom.dev'
    }
  }
];
</script>

<template>
  <div class="text-center">
    <!-- Header -->
    <div class="text-center mb-10 animate-fadeInUp">
      <h2 id="team-title" class="text-4xl md:text-5xl font-bold mb-4">
        Conoce al <span class="text-phantom-accent">Equipo</span>
      </h2>
      <p class="text-xl text-gray-400 max-w-3xl mx-auto">
        Un equipo multidisciplinario con experiencia en gaming, VR y desarrollo cooperativo.
      </p>
    </div>

    <!-- Team Grid - Principio: Consistencia en layout -->
    <div class="grid md:grid-cols-2 gap-8">
      <article
        v-for="(member, index) in teamMembers"
        :key="index"
        class="bg-phantom-dark/50 backdrop-blur-sm border border-phantom-accent/20 rounded-2xl p-8 hover:border-phantom-accent/50 transition-all duration-300 card-interactive"
      >
        <div class="flex items-start gap-6">
          <!-- Avatar - Principio: Visibilidad -->
          <div :class="`w-20 h-20 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center text-2xl font-bold flex-shrink-0`">
            {{ member.avatar }}
          </div>

          <div class="flex-1 text-left">
            <h3 class="text-2xl font-bold mb-1">{{ member.name }}</h3>
            <p class="text-phantom-accent font-semibold mb-3">{{ member.role }}</p>
            <p class="text-gray-400 text-sm leading-relaxed mb-4">
              {{ member.bio }}
            </p>

            <div class="bg-phantom-darker/50 rounded-lg p-3 mb-4">
              <p class="text-xs text-gray-300">
                <strong class="text-phantom-accent">Responsabilidades:</strong> {{ member.responsibilities }}
              </p>
            </div>

            <!-- Social Links - Principio: Affordance -->
            <div class="flex gap-3">
              <a 
                :href="member.social.github"
                class="p-2 bg-phantom-darker/50 hover:bg-phantom-accent/10 rounded-lg transition-all duration-300 hover:scale-110"
                :aria-label="`GitHub de ${member.name}`"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.44-.78-3.46 0 0-1.09-.35-3.56 1.06A4.87 4.87 0 0 0 12 5.17c-1.1 0-2.2.22-3.2.73C4.5 2.6 3.42 2.25 3.42 2.25A4.87 4.87 0 0 0 3 5.75c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a 
                :href="member.social.linkedin"
                class="p-2 bg-phantom-darker/50 hover:bg-phantom-accent/10 rounded-lg transition-all duration-300 hover:scale-110"
                :aria-label="`LinkedIn de ${member.name}`"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a 
                :href="`mailto:${member.social.email}`"
                class="p-2 bg-phantom-darker/50 hover:bg-phantom-accent/10 rounded-lg transition-all duration-300 hover:scale-110"
                :aria-label="`Email de ${member.name}`"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>


  </div>
</template>