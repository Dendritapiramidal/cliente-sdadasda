<template>
  <section class="section section--alt">
    <div class="container">
      <p class="tag">Opiniones</p>
      <h2>Lo que dicen nuestros clientes</h2>
      <div class="divider"></div>

      <div class="grid">
        <div v-for="(t, i) in c.testimonios" :key="i" class="card">
          <div class="card__estrellas">
            <span v-for="s in t.estrellas" :key="s">★</span>
          </div>
          <p class="card__texto">"{{ t.texto }}"</p>
          <div class="card__autor">
            <div class="card__avatar">{{ t.nombre.charAt(0) }}</div>
            <span>{{ t.nombre }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const config = useRuntimeConfig()
const c = config.public.client
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
}

.card {
  background: var(--color-primario);
  border: 1px solid var(--color-borde);
  padding: 2rem;
  position: relative;
  transition: border-color 0.3s ease;
}
.card:hover { border-color: var(--color-acento); }

.card__estrellas {
  color: var(--color-acento);
  font-size: 1rem;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

.card__texto {
  font-size: 0.98rem;
  line-height: 1.75;
  color: var(--color-texto-suave);
  font-style: italic;
  margin-bottom: 1.5rem;
}

.card__autor {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.88rem;
  color: var(--color-texto);
  font-weight: 500;
}

.card__avatar {
  width: 36px; height: 36px;
  border-radius: 50%;
  background: var(--color-acento);
  color: var(--color-primario);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display), serif;
  font-size: 1rem;
  flex-shrink: 0;
}
</style>
