<template>
  <section id="inicio" class="hero">
    <div class="hero__bg" v-if="hero.imagen">
      <img :src="hero.imagen" alt="Hero" class="hero__bg-img" />
      <div class="hero__overlay"></div>
    </div>

    <div class="container hero__content">
      <p class="tag fade-up delay-1">{{ c.rubro }}</p>
      <h1 class="hero__title fade-up delay-2">
        {{ hero.titulo }}
      </h1>
      <div class="divider fade-up delay-3"></div>
      <p class="hero__sub fade-up delay-3">{{ hero.subtitulo }}</p>
      <div class="hero__actions fade-up delay-4">
        <a :href="`https://wa.me/${c.whatsapp}`" target="_blank" class="btn btn--filled">
          <span>{{ hero.cta }}</span>
        </a>
        <a href="#servicios" class="btn">
          <span>Ver servicios</span>
        </a>
      </div>
    </div>

    <a href="#servicios" class="hero__scroll">
      <span class="hero__scroll-line"></span>
      <span class="hero__scroll-label">Scroll</span>
    </a>
  </section>
</template>

<script setup>
const config = useRuntimeConfig()
const c = config.public.client
const hero = c.hero
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__bg-img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center;
  filter: grayscale(30%);
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(13,13,13,0.92) 0%,
    rgba(13,13,13,0.6) 60%,
    rgba(13,13,13,0.4) 100%
  );
}

.hero__content {
  position: relative;
  z-index: 1;
  max-width: 780px;
  padding-top: 8rem;
}

.hero__title {
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--color-texto) 60%, var(--color-acento));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__sub {
  font-size: 1.2rem;
  color: var(--color-texto-suave);
  max-width: 520px;
  margin-bottom: 2.5rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

/* Scroll indicator */
.hero__scroll {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 1;
  animation: fadeIn 1s ease 1s both;
}

.hero__scroll-line {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, transparent, var(--color-acento));
  animation: scrollPulse 2s ease-in-out infinite;
}

.hero__scroll-label {
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-acento);
  font-family: var(--font-body), sans-serif;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.4; transform: scaleY(1); }
  50%       { opacity: 1;   transform: scaleY(1.2); }
}

@media (max-width: 600px) {
  .hero__actions { flex-direction: column; }
  .hero__actions .btn { text-align: center; justify-content: center; }
}
</style>
