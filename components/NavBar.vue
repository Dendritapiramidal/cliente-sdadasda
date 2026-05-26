<template>
  <header class="nav" :class="{ 'nav--scrolled': scrolled }">
    <div class="container nav__inner">
      <a href="#inicio" class="nav__logo">
        <img v-if="c.logo" :src="c.logo" :alt="c.nombre" class="nav__logo-img" />
        <span v-else class="nav__logo-text">{{ c.nombre }}</span>
      </a>

      <nav class="nav__links" :class="{ 'nav__links--open': menuOpen }">
        <a href="#servicios" @click="menuOpen = false">Servicios</a>
        <a href="#sobre"     @click="menuOpen = false">Nosotros</a>
        <a href="#trabajos"  @click="menuOpen = false">Portfolio</a>
        <a href="#contacto"  @click="menuOpen = false">Contacto</a>
      </nav>

      <a :href="`https://wa.me/${c.whatsapp}`" target="_blank" class="btn btn--filled nav__cta">
        <span>WhatsApp</span>
      </a>

      <button class="nav__hamburger" @click="menuOpen = !menuOpen" :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú'">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
const config = useRuntimeConfig()
const c = config.public.client

const scrolled  = ref(false)
const menuOpen  = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 60
  })
})
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 1.5rem 0;
  transition: all 0.4s ease;
}

.nav--scrolled {
  background: rgba(13, 13, 13, 0.95);
  backdrop-filter: blur(12px);
  padding: 1rem 0;
  border-bottom: 1px solid var(--color-borde);
}

.nav__inner {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav__logo { flex: 0 0 auto; }
.nav__logo-img { height: 36px; width: auto; }
.nav__logo-text {
  font-family: var(--font-display), serif;
  font-size: 1.4rem;
  color: var(--color-texto);
  letter-spacing: -0.02em;
}

.nav__links {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin-left: auto;
}

.nav__links a {
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-texto-suave);
  transition: color 0.3s;
}
.nav__links a:hover { color: var(--color-acento); }

.nav__cta { margin-left: 1rem; }

.nav__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  margin-left: auto;
}
.nav__hamburger span {
  display: block;
  width: 24px; height: 1px;
  background: var(--color-texto);
  transition: all 0.3s;
}

@media (max-width: 768px) {
  .nav__hamburger { display: flex; }
  .nav__cta { display: none; }

  .nav__links {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    flex-direction: column;
    justify-content: center;
    background: var(--color-primario);
    font-size: 1.5rem;
    gap: 2.5rem;
    transform: translateX(100%);
    transition: transform 0.4s ease;
    margin-left: 0;
  }
  .nav__links--open { transform: translateX(0); }
  .nav__links a { font-size: 1rem; letter-spacing: 0.2em; }
}
</style>
