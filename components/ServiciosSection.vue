<template>
  <section id="servicios" class="section">
    <div class="container">
      <p class="tag">Lo que hacemos</p>
      <h2>Servicios</h2>
      <div class="divider"></div>

      <div class="grid">
        <div
          v-for="(servicio, i) in c.servicios"
          :key="i"
          class="card"
        >
          <span class="card__icono">{{ servicio.icono }}</span>
          <h3 class="card__titulo">{{ servicio.titulo }}</h3>
          <p class="card__desc">{{ servicio.descripcion }}</p>
          <div class="card__line"></div>
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
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5px;
  margin-top: 3rem;
  border: 1px solid var(--color-borde);
}

.card {
  padding: 2.5rem 2rem;
  background: var(--color-secundario);
  position: relative;
  overflow: hidden;
  transition: background 0.4s ease;
  cursor: default;
}

.card:hover {
  background: color-mix(in srgb, var(--color-acento) 6%, var(--color-secundario));
}

.card__icono {
  display: block;
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
  color: var(--color-acento);
  transition: transform 0.3s ease;
}
.card:hover .card__icono { transform: scale(1.15); }

.card__titulo {
  font-size: 1.25rem;
  color: var(--color-texto);
  margin-bottom: 0.75rem;
}

.card__desc {
  font-size: 0.92rem;
  line-height: 1.7;
}

.card__line {
  position: absolute;
  bottom: 0; left: 0;
  width: 0; height: 2px;
  background: var(--color-acento);
  transition: width 0.4s ease;
}
.card:hover .card__line { width: 100%; }
</style>
