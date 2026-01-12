# Hello GitHub

Un sitio web estático moderno que muestra "¡Hola Mundo desde GitHub!" desplegable en Cloudflare Pages.

## 🌐 Sitio Web Estático

Este proyecto contiene un sitio web estático construido con HTML5, CSS3 y JavaScript vanilla. Está optimizado para desplegarse en **Cloudflare Pages** sin necesidad de comandos de build.

### Características

- **Diseño moderno y responsivo**: Utiliza flexbox y gradientes CSS para un diseño atractivo
- **Interactividad**: Fecha y hora en tiempo real, efectos de partículas al hacer clic
- **Compatible con dispositivos móviles**: Diseño completamente responsive
- **Sin dependencias**: HTML, CSS y JavaScript puros

## 🚀 Despliegue en Cloudflare Pages

### Paso 1: Conectar tu repositorio

1. Ve a [Cloudflare Pages](https://pages.cloudflare.com/)
2. Inicia sesión o crea una cuenta
3. Haz clic en "Create a project"
4. Conecta tu repositorio de GitHub

### Paso 2: Configurar el proyecto

- **Framework preset**: Ninguno (None)
- **Build command**: Dejar vacío (no se necesita build)
- **Build output directory**: `/` (raíz del proyecto)
- **Root directory**: `/` (raíz del proyecto)

### Paso 3: Desplegar

Haz clic en "Save and Deploy" y tu sitio estará disponible en unos segundos.

## 📁 Estructura del Proyecto

```
hello-github/
├── index.html       # Página principal del sitio
├── styles.css       # Estilos CSS modernos
├── script.js        # Interactividad JavaScript
├── index.js         # Script Node.js original (mantenido)
├── package.json     # Configuración Node.js (mantenida)
├── .gitignore       # Archivos ignorados por Git
└── README.md        # Este archivo
```

## 💻 Desarrollo Local

### Ver el sitio web

Simplemente abre el archivo `index.html` en tu navegador web favorito.

O usa un servidor local:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (npx)
npx serve .
```

Luego visita `http://localhost:8000` en tu navegador.

### Script Node.js (original)

Si deseas ejecutar el script Node.js original:

```bash
npm install
npm start
```

Esto imprimirá "Hola Mundo desde GitHub" en la consola.

## 🎨 Características del Sitio

- **Reloj en tiempo real**: Muestra la fecha y hora actual que se actualiza cada segundo
- **Efecto de partículas**: Haz clic en el título para ver un efecto mágico con emojis
- **Diseño degradado**: Fondo con gradiente morado/azul atractivo
- **Animaciones suaves**: Transiciones y animaciones CSS modernas
- **Badges tecnológicos**: Muestra las tecnologías utilizadas

## 📝 Licencia

MIT
