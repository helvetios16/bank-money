<template>
  <div class="relative h-full flex flex-col items-center justify-center text-center overflow-hidden">
    <!-- Efecto de resplandor de fondo -->
    <div class="absolute -inset-24 w-full h-full bg-phantom-accent opacity-10 blur-3xl rounded-full"></div>

    <!-- Patrón SVG sutil -->
    <div class="absolute inset-0 w-full h-full opacity-5">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-pattern" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(2)">
            <rect x="0" y="0" width="100%" height="100%" fill="none"></rect>
            <path d="M10-5v50" stroke="var(--color-phantom-accent)" stroke-width="0.5"></path>
            <path d="-5 10h50" stroke="var(--color-phantom-accent)" stroke-width="0.5"></path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-pattern)"></rect>
      </svg>
    </div>

    <!-- Contenido de texto -->
    <div class="relative z-10">
      <h2 class="text-4xl md:text-5xl font-bold mb-3 leading-tight">
        BANK <span class="text-phantom-accent">MONEY</span>
      </h2>
      <p class="text-sm text-gray-300 leading-relaxed max-w-xs mx-auto">
        Conviértete en un cajero de banco en esta experiencia de realidad virtual para un solo jugador.
      </p>
    </div>
  </div>
</template>
