<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <span class="footer__nombre">{{ c.nombre }}</span>
        <p>{{ c.descripcion }}</p>
      </div>

      <div class="footer__links">
        <a href="#servicios">Servicios</a>
        <a href="#sobre">Nosotros</a>
        <a href="#trabajos">Portfolio</a>
        <a href="#contacto">Contacto</a>
      </div>

      <div class="footer__social">
        <a :href="`https://instagram.com/${c.instagram}`" target="_blank" aria-label="Instagram">◉ Instagram</a>
        <a :href="`https://wa.me/${c.whatsapp}`" target="_blank" aria-label="WhatsApp">◈ WhatsApp</a>
        <a :href="`mailto:${c.email}`" aria-label="Email">✉ Email</a>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="container">
        <span>© {{ new Date().getFullYear() }} {{ c.nombre }}. Todos los derechos reservados.</span>
        <span class="footer__credit">
          Sitio desarrollado por
          <a href="https://deuteriotech.com" target="_blank">DeuterioTech</a>
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup>
const config = useRuntimeConfig()
const c = config.public.client
</script>

<style scoped>
.footer {
  background: color-mix(in srgb, var(--color-primario) 60%, black);
  border-top: 1px solid var(--color-borde);
}

.footer__inner {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  padding: 4rem 2rem 3rem;
}

.footer__nombre {
  display: block;
  font-family: var(--font-display), serif;
  font-size: 1.6rem;
  color: var(--color-texto);
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
}

.footer__brand p { font-size: 0.9rem; max-width: 280px; }

.footer__links,
.footer__social {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 0.5rem;
}

.footer__links a,
.footer__social a {
  font-size: 0.85rem;
  color: var(--color-texto-suave);
  transition: color 0.3s;
  letter-spacing: 0.05em;
}
.footer__links a:hover,
.footer__social a:hover { color: var(--color-acento); }

.footer__bottom {
  border-top: 1px solid var(--color-borde);
  padding: 1.25rem 0;
}

.footer__bottom .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.78rem;
  color: var(--color-texto-suave);
}

.footer__credit a {
  color: var(--color-acento);
  transition: opacity 0.3s;
}
.footer__credit a:hover { opacity: 0.7; }

@media (max-width: 768px) {
  .footer__inner {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 3rem 2rem 2rem;
  }
  .footer__brand { grid-column: span 2; }
  .footer__bottom .container { justify-content: center; text-align: center; }
}
</style>
