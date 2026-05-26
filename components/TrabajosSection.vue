<template>
  <section id="trabajos" class="section">
    <div class="container">
      <p class="tag">Nuestro trabajo</p>
      <h2>Portfolio</h2>
      <div class="divider"></div>

      <div class="galeria">
        <div
          v-for="(trabajo, i) in c.trabajos"
          :key="i"
          class="galeria__item"
          :class="`galeria__item--${(i % 5) + 1}`"
        >
          <img :src="trabajo.imagen" :alt="trabajo.titulo" />
          <div class="galeria__overlay">
            <span class="galeria__titulo">{{ trabajo.titulo }}</span>
          </div>
        </div>
      </div>

      <div class="trabajos__cta">
        <p>¿Querés ver más trabajos?</p>
        <a :href="`https://instagram.com/${c.instagram}`" target="_blank" class="btn">
          <span>Ver Instagram</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const config = useRuntimeConfig()
const c = config.public.client
</script>

<style scoped>
.galeria {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 280px;
  gap: 6px;
  margin-top: 3rem;
}

/* Layout asimétrico tipo masonry */
.galeria__item--1 { grid-column: span 2; }
.galeria__item--4 { grid-column: span 2; }

.galeria__item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.galeria__item img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease, filter 0.4s ease;
  filter: grayscale(20%);
}

.galeria__item:hover img {
  transform: scale(1.05);
  filter: grayscale(0%);
}

.galeria__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(13,13,13,0.8) 0%, transparent 60%);
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.galeria__item:hover .galeria__overlay { opacity: 1; }

.galeria__titulo {
  font-family: var(--font-display), serif;
  font-size: 1.1rem;
  color: var(--color-texto);
  transform: translateY(8px);
  transition: transform 0.4s ease;
}
.galeria__item:hover .galeria__titulo { transform: translateY(0); }

.trabajos__cta {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
  padding-top: 2.5rem;
  border-top: 1px solid var(--color-borde);
}

.trabajos__cta p {
  font-size: 1.1rem;
  color: var(--color-texto);
}

@media (max-width: 768px) {
  .galeria {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 200px;
  }
  .galeria__item--1,
  .galeria__item--4 { grid-column: span 1; }

  .trabajos__cta { flex-direction: column; align-items: flex-start; }
}
</style>
