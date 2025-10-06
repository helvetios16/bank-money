import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

/**
 * PRINCIPIOS APLICADOS:
 * - Consistencia: Layout uniforme para cada miembro
 * - Affordance: Enlaces sociales claramente clickeables
 * - Accesibilidad: Alt text en imágenes, roles semánticos
 */
export default function Team() {
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
  ]

  return (
    <section 
      id="team" 
      className="py-20 px-4"
      aria-labelledby="team-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 id="team-title" className="text-4xl md:text-5xl font-bold mb-4">
            Conoce al <span className="text-phantom-accent">Equipo</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Un equipo multidisciplinario con experiencia en gaming, VR y desarrollo cooperativo.
          </p>
        </div>

        {/* Team Grid - Principio: Consistencia en layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <article
              key={index}
              className="bg-phantom-dark/50 backdrop-blur-sm border border-phantom-accent/20 rounded-2xl p-8 hover:border-phantom-accent/50 transition-all duration-300 card-interactive"
            >
              <div className="flex items-start gap-6">
                {/* Avatar - Principio: Visibilidad */}
                <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center text-2xl font-bold flex-shrink-0`}>
                  {member.avatar}
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-phantom-accent font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  <div className="bg-phantom-darker/50 rounded-lg p-3 mb-4">
                    <p className="text-xs text-gray-300">
                      <strong className="text-phantom-accent">Responsabilidades:</strong> {member.responsibilities}
                    </p>
                  </div>

                  {/* Social Links - Principio: Affordance */}
                  <div className="flex gap-3">
                    <a 
                      href={member.social.github}
                      className="p-2 bg-phantom-darker/50 hover:bg-phantom-accent/10 rounded-lg transition-all duration-300 hover:scale-110"
                      aria-label={`GitHub de ${member.name}`}
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href={member.social.linkedin}
                      className="p-2 bg-phantom-darker/50 hover:bg-phantom-accent/10 rounded-lg transition-all duration-300 hover:scale-110"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <Linkedin size={18} />
                    </a>
                    <a 
                      href={`mailto:${member.social.email}`}
                      className="p-2 bg-phantom-darker/50 hover:bg-phantom-accent/10 rounded-lg transition-all duration-300 hover:scale-110"
                      aria-label={`Email de ${member.name}`}
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA - Principio: Visibilidad de acción principal */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-phantom-accent/10 to-transparent border border-phantom-accent/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">¿Interesado en colaborar?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Estamos buscando inversores, publishers y partners tecnológicos para llevar 
              The Phantom Heist al siguiente nivel.
            </p>
            <a 
              href="mailto:team@phantom.dev" 
              className="btn-primary inline-flex items-center gap-2"
            >
              <Mail size={20} />
              Contactar Equipo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}