# The Phantom Heist

<!-- ![The Phantom Heist Logo](public/favicon.svg) -->

> 🕵️ **Infiltra. Hackea. Escapa.** Una experiencia interactiva de heist cibernético.

## 📋 Descripción del Proyecto

**The Phantom Heist** es un sitio web promocional para nuestro innovador juego de realidad virtual. Este juego VR sumerge a los jugadores en una emocionante misión de infiltración donde asumen el rol de un hacker de élite que debe infiltrarse en sistemas de seguridad corporativos, comprometer varios subsistemas y extraer información confidencial sin ser detectado.

Esta página web está diseñada para mostrar las características principales del juego, ofrecer una vista previa de la experiencia inmersiva en VR y proporcionar información sobre cómo adquirir y disfrutar de la experiencia completa. El sitio combina elementos visuales de estilo cyberpunk que reflejan la estética del juego VR, presentando sus mecánicas de hacking en tiempo real y la inmersión que solo la realidad virtual puede ofrecer.

## 🚀 Estructura del Proyecto

La estructura de archivos está organizada de la siguiente manera:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── background.svg
│   │   └── [otros recursos gráficos]
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── GamePhases.tsx
│   │   ├── Hero.astro
│   │   ├── Navigation.tsx
│   │   ├── Prototype.tsx
│   │   └── [otros componentes]
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Esta estructura facilita la separación de responsabilidades y la reutilización de componentes en toda la aplicación.

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, en una terminal:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Instala las dependencias                         |
| `bun dev`                 | Inicia servidor local en `localhost:4321`        |
| `bun build`               | Construye el sitio para producción en `./dist/`  |
| `bun preview`             | Previsualiza la build antes de desplegar         |
| `bun astro ...`           | Ejecuta comandos CLI como `astro add`, `astro check` |
| `bun astro -- --help`     | Obtiene ayuda sobre el CLI de Astro              |

## 🛠️ Tecnologías Utilizadas

Este proyecto está construido con las siguientes tecnologías:

- **[Astro](https://astro.build/)**: Framework web para sitios orientados a contenido
- **[React](https://reactjs.org/)**: Biblioteca para interfaces de usuario interactivas
- **[TypeScript](https://www.typescriptlang.org/)**: Superconjunto tipado de JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utilitario
- **[Framer Motion](https://www.framer.com/motion/)**: Biblioteca para animaciones fluidas

## Principios de Diseño de Interacción Implementados

Nuestro proyecto implementa los siguientes principios fundamentales de diseño de interacción para garantizar una experiencia de usuario óptima:

### Principios de Usabilidad

#### 1. **Visibilidad del Sistema**
* **Navegación persistente:** Barra de navegación sticky siempre visible y accesible
* **Retroalimentación de estado:** Indicadores claros del progreso de hackeo y sistemas comprometidos
* **Orientación espacial:** Marcadores visuales de scroll y secciones activas

#### 2. **Feedback y Respuesta**
* **Interactividad:** Efectos hover en todos los elementos interactivos
* **Transiciones:** Animaciones suaves (300ms) para cambios de estado
* **Confirmación:** Respuesta visual inmediata tras completar acciones
* **Micro-interacciones:** Detalles animados en botones y tarjetas para mejorar la experiencia

### Principios de Estructura

#### 3. **Restricciones y Guías**
* **Prevención de errores:** Botones deshabilitados cuando no son aplicables
* **Validación:** Control de estados para evitar acciones duplicadas
* **Navegación guiada:** Flujo intuitivo a través de la experiencia

#### 4. **Consistencia y Estándares**
* **Diseño visual:** Paleta de colores uniforme y coherente
* **Sistema de diseño:** Espaciado sistemático basado en múltiplos de 4px
* **Tipografía:** Uso consistente de fuentes (Inter para texto, Courier para código)
* **Patrones:** Estructura repetible en componentes similares para facilitar el aprendizaje

### Principios de Interacción

#### 5. **Affordance e Indicaciones Visuales**
* **Elementos accionables:** Botones con sombras y efectos hover que sugieren interactividad
* **Enlaces:** Subrayado en hover para identificar elementos navegables
* **Cursores:** Cambio a pointer en elementos interactivos
* **Iconografía:** Símbolos que comunican claramente su función

#### 6. **Accesibilidad Universal**
* **Navegación alternativa:** Control completo mediante teclado
* **Estructura semántica:** Skip-to-content link y jerarquía clara
* **ARIA:** Etiquetas descriptivas en elementos interactivos
* **Legibilidad:** Contraste WCAG AA (4.5:1 mínimo) y tamaños de fuente adecuados (16px+)

#### 7. **Eficiencia Cognitiva**
* **Jerarquía informativa:** Estructura clara de títulos, subtítulos y contenido
* **Simplicidad:** Máximo 3 niveles de información por sección
* **Refuerzo visual:** Iconografía complementaria para conceptos clave
* **Respiración visual:** Espaciado generoso entre secciones para reducir la fatiga