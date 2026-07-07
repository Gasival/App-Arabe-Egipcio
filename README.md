# مصري — Aprende árabe egipcio (A2 → B1)

Web app (PWA) para aprender **árabe egipcio** en el ordenador y, sobre todo, en el **móvil**.
Cada palabra se muestra en **árabe** y en **árabe franco** (chat alphabet) para controlar la escritura.

## Características

- 📱 **Mobile-first** e instalable (PWA): funciona offline una vez abierta.
- ✍️ **Árabe franco** en cada palabra: `2`=qaf/hamza · `3`=ʿayn · `7`=ḥa · `kh`=خ · `gh`=غ.
- 📚 **12 lecciones** temáticas (A2 y B1): saludos, familia, números, restaurante, direcciones, rutina, verbos, adjetivos, clima, opiniones, planes…
- 🎯 **6 tipos de ejercicio**:
  1. Tarjetas (flashcards) con volteo.
  2. Árabe → Español (opción múltiple).
  3. Español → Árabe (opción múltiple).
  4. Escucha y elige (audio TTS).
  5. Escribe en franco (corrección tolerante a erratas).
  6. Parejas (emparejar árabe y significado).
- 🔊 **Audio** con voz árabe del sistema (Web Speech API; usa una voz `ar-EG`/`ar` si está disponible).
- 📈 **Progreso** guardado en el dispositivo (localStorage) con repaso priorizado de lo menos dominado.

## Cómo abrirla

El audio offline y la instalación PWA necesitan servirla por HTTP (no con `file://`).
Desde la carpeta del proyecto:

```powershell
# Opción 1: Python
python -m http.server 8080

# Opción 2: Node
npx serve .
```

Luego abre `http://localhost:8080` en el navegador.
En el móvil, abre esa URL (misma red Wi-Fi, usando la IP del PC) y pulsa **"Añadir a pantalla de inicio"**.

> Nota sobre el audio: las voces de árabe egipcio dependen del sistema operativo.
> Android e iOS suelen incluir voz árabe; en Windows quizá debas añadir el idioma árabe
> en *Configuración → Hora e idioma → Voz* para oír mejor las palabras.

## Añadir contenido

Edita [js/data.js](js/data.js). Cada lección es un objeto con `items`:

```js
{ ar: "إزيك", fr: "ezzayyak", es: "¿cómo estás? (a un hombre)" }
```

## Estructura

```
index.html              · estructura y navegación
css/styles.css          · estilos (tema oscuro, RTL para árabe)
js/data.js              · vocabulario y frases A2–B1
js/app.js               · router + motor de ejercicios
manifest.webmanifest    · metadatos PWA
sw.js                   · service worker (offline)
icon.svg                · icono
```
