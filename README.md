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

## 📚 Proyecto de Needfinding: Algoritmos de Ordenamiento

### Visión General

Como parte de nuestro curso de Interacción Humano-Computador (CS374), realizamos un proyecto de investigación de necesidades (needfinding) centrado en mejorar la experiencia de aprendizaje de algoritmos de ordenamiento para estudiantes universitarios.

### Objetivos del Proyecto

**Usuario Objetivo:** Estudiantes universitarios de carreras de computación, ingeniería de software o afines, que cursan materias como Estructuras de Datos y Algoritmos.

**Experiencia Investigada:** Cómo aprenden los estudiantes los algoritmos de ordenamiento y qué dificultades enfrentan en el proceso.

### Metodología

Realizamos **4 entrevistas en profundidad** con diferentes perfiles:

- **Participante A:** Estudiante de 4to ciclo aprendiendo algoritmos de ordenamiento por primera vez
- **Participante B:** Estudiante de 3er año que necesita reforzar comprensión de eficiencia y complejidad
- **Participante C:** Estudiante de 4to-5to año preparándose para entrevistas técnicas
- **Participante D:** Docente universitario con experiencia en enseñanza de Algoritmos

### Necesidades Identificadas

A través de nuestras entrevistas, identificamos **10 necesidades principales**:

1. **Visualización gráfica:** Poder ver el comportamiento de los algoritmos de manera visual
2. **Comprensión de recursión:** Visualizar el call stack para entender la recursión en algoritmos
3. **Código + visualización:** Ver pseudocódigo/código junto a la representación gráfica
4. **Navegación paso a paso:** Avanzar y retroceder entre pasos del algoritmo
5. **Código editable:** Modificar el código y observar cambios visuales en tiempo real
6. **Análisis de complejidad:** Identificar y comprender la complejidad del algoritmo
7. **Soporte y explicaciones:** Resolver dudas mediante explicaciones textuales o LLM
8. **Práctica activa:** Implementar algoritmos propios desde cero
9. **Pensamiento crítico:** Analizar y proponer mejoras a implementaciones existentes
10. **Consolidación:** Realizar pruebas prácticas para evaluar conocimientos adquiridos

### Insights Principales

#### 🎨 Visualización como Primer Recurso
Los estudiantes prefieren representaciones gráficas y videos antes que texto o código puro.

#### 🔄 Recursión: Punto de Confusión Crítica
La recursión resulta confusa sin poder visualizar el call stack o el flujo de llamadas.

#### 🎮 Necesidad de Interacción Paso a Paso
Los usuarios necesitan controlar el ritmo de ejecución para comprender los cambios.

#### 🧪 Código Editable para Experimentación
Modificar código y ver resultados inmediatos refuerza el aprendizaje a través del error.

#### 🔗 Conexión Código-Visual Simultánea
Requieren ver código y visualización al mismo tiempo para comprender el flujo completo.

#### ⚡ Complejidad como Reto Post-Básico
La eficiencia y complejidad son esenciales para valorar realmente el algoritmo.

#### 🤖 Apoyo de IA para Dudas Específicas
Los LLMs son útiles para resolver preguntas puntuales y reforzar conceptos.

#### 💪 Aprendizaje Activo mediante Práctica
Usar ejemplos físicos, escribir código propio y experimentar refuerza la comprensión.

### Materiales de Investigación

📄 **Presentación completa:** [Needfinding.pptx.pdf](../needfinding-research/Needfinding.pptx.pdf)

🎥 **Entrevistas grabadas:**
- [Usuario A - Estudiante principiante](https://drive.google.com/file/d/1PbS-Kfx3yotUwupkS18m1GR8L-rpPipN/view?usp=sharing)
- [Usuario B - Estudiante intermedio](https://drive.google.com/file/d/18VA8mWIXK9e8A2vkROYiqmsAjD9y0g_L/view?usp=sharing)
- [Usuarios C y D - Avanzado y Docente](https://drive.google.com/drive/folders/1HeUkFPXMJ8dusMQJm6LxpGRT_mkMXC-T?usp=sharing)

### Equipo de Investigación

- **Lizarve Mamani Johan Fabricio**
- **Machaca Muñiz Jose**
- **Mendoza Fernandez Sebastian Andres**
- **Ramos Pacco Wilson**