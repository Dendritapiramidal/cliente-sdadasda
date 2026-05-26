# 🚀 DeuterioTech — Template Base Vue/Nuxt

Template reutilizable para crear sitios de clientes en minutos.

## Estructura

```
deuterio-template/
├── client.config.js      ← ✏️ ÚNICO ARCHIVO QUE EDITÁS POR CLIENTE
├── nuxt.config.ts
├── netlify.toml
├── pages/
│   └── index.vue         ← ensambla todas las secciones
├── layouts/
│   └── default.vue       ← inyecta variables CSS
├── components/
│   ├── NavBar.vue
│   ├── HeroSection.vue
│   ├── ServiciosSection.vue
│   ├── SobreSection.vue
│   ├── TrabajosSection.vue
│   ├── TestimoniosSection.vue
│   ├── ContactoSection.vue
│   └── FooterSection.vue
├── assets/
│   └── css/main.css
└── public/               ← imágenes del cliente van acá
    ├── logo.png
    ├── hero.jpg
    ├── about.jpg
    ├── work1.jpg ... work6.jpg
    └── og.jpg
```

---

## ⚡ Nuevo cliente en 5 pasos

### 1. Cloná la carpeta template

```bash
cp -r deuterio-template nuevo-cliente
cd nuevo-cliente
```

### 2. Editá `client.config.js`

Solo este archivo. Completá:
- Nombre, rubro, descripción
- WhatsApp, email, Instagram
- Textos del hero, servicios, sobre
- Colores y fuentes (Google Fonts)
- SEO

### 3. Agregá las imágenes en `/public`

```
logo.png      → logo del cliente (PNG transparente)
hero.jpg      → foto principal (1920×1080 mínimo)
about.jpg     → foto del sobre/nosotros
work1-6.jpg   → portfolio (ratio 4:3 recomendado)
og.jpg        → imagen para redes sociales (1200×630)
```

### 4. Probá en local

```bash
npm install
npm run dev
# → http://localhost:3000
```

### 5. Deploy a Netlify

**Opción A — Manual (más rápido):**
```bash
npm run generate
# Subí la carpeta .output/public a Netlify Drop
# → app.netlify.com/drop
```

**Opción B — Automático con GitHub:**
1. Creá un repo en GitHub
2. `git push`
3. Conectá el repo en app.netlify.com
4. Build command: `npm run generate`
5. Publish directory: `.output/public`
6. Cada `git push` → deploy automático ✓

---

## 🎨 Personalización rápida de colores

En `client.config.js`:

```js
colores: {
  primario:   "#0D0D0D",   // fondo oscuro
  secundario: "#1A1A1A",   // cards/secciones
  acento:     "#C8A96E",   // color destacado (botones, íconos)
  texto:      "#F0EDE8",   // texto principal
  textoSuave: "#9A9590",   // texto secundario
  borde:      "#2A2A2A",   // líneas divisoras
}
```

Para un cliente con tema claro, por ejemplo:
```js
colores: {
  primario:   "#FFFFFF",
  secundario: "#F5F5F5",
  acento:     "#0A0F2E",
  texto:      "#1A1A1A",
  textoSuave: "#666666",
  borde:      "#E0E0E0",
}
```

---

## 📱 Secciones incluidas

| Sección        | Configurable desde config.js |
|----------------|------------------------------|
| Navbar         | Logo, nombre, WhatsApp       |
| Hero           | Título, subtítulo, CTA, imagen |
| Servicios      | Hasta N servicios con ícono  |
| Sobre nosotros | Texto, imagen, stats         |
| Portfolio      | Hasta N trabajos con imagen  |
| Testimonios    | Hasta N testimonios          |
| Contacto       | WhatsApp, email, dirección   |
| Footer         | Auto-generado desde config   |
| FAB WhatsApp   | Siempre visible              |

---

## 🔧 Automatización futura (opcional)

Para generar sitios automáticamente desde un formulario:

1. **Tally.so** → cliente completa sus datos
2. **Make / Zapier** → webhook recibe los datos
3. **Script de generación** → copia template + reemplaza `client.config.js`
4. **GitHub API** → push automático al repo
5. **Netlify** → deploy automático en minutos

---

Desarrollado por **DeuterioTech** — deuteriotech.com
