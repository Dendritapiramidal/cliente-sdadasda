<template>
  <section id="sobre" class="section section--alt">
    <div class="container sobre__inner">
      <div class="sobre__imagen" v-if="sobre.imagen">
        <img :src="sobre.imagen" :alt="c.nombre" />
        <div class="sobre__imagen-frame"></div>
      </div>

      <div class="sobre__texto">
        <p class="tag">Quiénes somos</p>
        <h2>{{ sobre.titulo }}</h2>
        <div class="divider"></div>
        <p>{{ sobre.texto }}</p>

        <div class="sobre__stats">
          <div class="stat">
            <span class="stat__num">8+</span>
            <span class="stat__label">Años de experiencia</span>
          </div>
          <div class="stat">
            <span class="stat__num">500+</span>
            <span class="stat__label">Clientes satisfechos</span>
          </div>
          <div class="stat">
            <span class="stat__num">100%</span>
            <span class="stat__label">Diseño a medida</span>
          </div>
        </div>

        <a :href="`https://wa.me/${c.whatsapp}`" target="_blank" class="btn" style="margin-top:2rem">
          <span>Hablemos</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const config = useRuntimeConfig()
const c = config.public.client
const sobre = c.sobre
</script>

<style scoped>
.sobre__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.sobre__imagen {
  position: relative;
}

.sobre__imagen img {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
  filter: grayscale(20%);
  position: relative;
  z-index: 1;
}

.sobre__imagen-frame {
  position: absolute;
  top: 1.5rem; right: -1.5rem;
  width: 100%; height: 100%;
  border: 1px solid var(--color-acento);
  opacity: 0.3;
  z-index: 0;
}

.sobre__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-borde);
}

.stat__num {
  display: block;
  font-family: var(--font-display), serif;
  font-size: 2.2rem;
  color: var(--color-acento);
  line-height: 1;
  margin-bottom: 0.4rem;
}

.stat__label {
  font-size: 0.78rem;
  color: var(--color-texto-suave);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .sobre__inner {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .sobre__imagen-frame { display: none; }
  .sobre__stats { grid-template-columns: repeat(3, 1fr); }
}
</style>
