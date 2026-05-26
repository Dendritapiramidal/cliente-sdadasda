// ============================================================
//  DEUTERIOTECH — CONFIGURACIÓN DEL CLIENTE
//  Editá solo este archivo para cada nuevo cliente.
//  Luego corré: npm run generate
// ============================================================

export default {

  // ── DATOS GENERALES ────────────────────────────────────────
  nombre:      "Estudio Creativo Majo",
  rubro:       "Diseño & Tatuajes",
  descripcion: "Arte en tu piel. Diseño exclusivo, trazo preciso.",
  logo:        "/logo.png",          // colocá el logo en /public/
  favicon:     "/favicon.ico",

  // ── CONTACTO ───────────────────────────────────────────────
  whatsapp:    "5491134149059",
  email:       "hola@majotattoo.com",
  instagram:   "majotattoo",
  direccion:   "San Fernando, Buenos Aires",

  // ── HERO ───────────────────────────────────────────────────
  hero: {
    titulo:    "Arte que dura para siempre",
    subtitulo: "Diseños únicos hechos a medida para vos",
    cta:       "Reservá tu turno",
    imagen:    "/hero.jpg",          // colocá en /public/
  },

  // ── SERVICIOS ──────────────────────────────────────────────
  servicios: [
    { icono: "✦", titulo: "Tatuajes Custom",    descripcion: "Diseño exclusivo creado desde cero para cada cliente." },
    { icono: "◈", titulo: "Retoques",           descripcion: "Recuperamos la vida de tatuajes viejos o desvanecidos." },
    { icono: "❋", titulo: "Diseño Gráfico",     descripcion: "Logos, ilustraciones y piezas digitales a pedido." },
    { icono: "⬡", titulo: "Consulta Gratuita",  descripcion: "Primera consulta sin cargo para hablar de tu idea." },
  ],

  // ── SOBRE / ABOUT ──────────────────────────────────────────
  sobre: {
    titulo:    "¿Quiénes somos?",
    texto:     "Somos un estudio especializado en tatuajes artísticos con más de 8 años de experiencia. Cada trazo es intencional, cada diseño es único. Trabajamos con los mejores materiales y los más altos estándares de higiene.",
    imagen:    "/about.jpg",
  },

  // ── TRABAJOS / PORTFOLIO ────────────────────────────────────
  trabajos: [
    { imagen: "/work1.jpg", titulo: "Botanico lineal" },
    { imagen: "/work2.jpg", titulo: "Retrato realista" },
    { imagen: "/work3.jpg", titulo: "Geométrico minimalista" },
    { imagen: "/work4.jpg", titulo: "Acuarela abstracta" },
    { imagen: "/work5.jpg", titulo: "Lettering script" },
    { imagen: "/work6.jpg", titulo: "Neo tradicional" },
  ],

  // ── TESTIMONIOS ────────────────────────────────────────────
  testimonios: [
    { nombre: "Laura M.",   texto: "Increíble trabajo, superó todas mis expectativas. ¡El diseño quedó perfecto!", estrellas: 5 },
    { nombre: "Rodrigo P.", texto: "Profesional y muy atento. El ambiente del estudio es muy cómodo y limpio.", estrellas: 5 },
    { nombre: "Camila V.",  texto: "Ya llevo 3 tatuajes con Majo y siempre quedé enamorada del resultado.", estrellas: 5 },
  ],

  // ── PALETA DE COLORES ──────────────────────────────────────
  colores: {
    primario:   "#0D0D0D",   // fondo principal
    secundario: "#1A1A1A",   // fondo cards/secciones
    acento:     "#C8A96E",   // dorado elegante
    texto:      "#F0EDE8",   // texto principal
    textoSuave: "#9A9590",   // texto secundario
    borde:      "#2A2A2A",   // bordes
  },

  // ── TIPOGRAFÍA ─────────────────────────────────────────────
  // Usá nombres exactos de Google Fonts
  fuentes: {
    display: "Cormorant Garamond",   // títulos
    body:    "DM Sans",              // cuerpo
  },

  // ── SEO ────────────────────────────────────────────────────
  seo: {
    titulo:      "Estudio Majo | Tatuajes y Diseño en San Fernando",
    descripcion: "Estudio de tatuajes artísticos en San Fernando. Diseños a medida, retoques y consulta gratuita.",
    keywords:    "tatuajes san fernando, tattoo zona norte, tatuajes custom buenos aires",
    ogImagen:    "/og.jpg",
  },

}
