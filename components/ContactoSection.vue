<template>
  <section id="contacto" class="section">
    <div class="container contacto__inner">
      <div class="contacto__info">
        <p class="tag">Hablemos</p>
        <h2>¿Tenés un proyecto en mente?</h2>
        <div class="divider"></div>
        <p>Contactanos por cualquiera de estos medios y te respondemos a la brevedad.</p>

        <div class="contacto__links">
          <a :href="`https://wa.me/${c.whatsapp}`" target="_blank" class="contacto__link">
            <span class="contacto__link-icon">◈</span>
            <div>
              <span class="contacto__link-label">WhatsApp</span>
              <span class="contacto__link-value">+{{ c.whatsapp }}</span>
            </div>
          </a>

          <a :href="`mailto:${c.email}`" class="contacto__link">
            <span class="contacto__link-icon">✉</span>
            <div>
              <span class="contacto__link-label">Email</span>
              <span class="contacto__link-value">{{ c.email }}</span>
            </div>
          </a>

          <a :href="`https://instagram.com/${c.instagram}`" target="_blank" class="contacto__link">
            <span class="contacto__link-icon">◉</span>
            <div>
              <span class="contacto__link-label">Instagram</span>
              <span class="contacto__link-value">@{{ c.instagram }}</span>
            </div>
          </a>

          <div class="contacto__link" v-if="c.direccion">
            <span class="contacto__link-icon">⌖</span>
            <div>
              <span class="contacto__link-label">Ubicación</span>
              <span class="contacto__link-value">{{ c.direccion }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Formulario de contacto -->
      <form class="contacto__form" @submit.prevent="enviar">
        <div class="form__group">
          <label>Nombre</label>
          <input v-model="form.nombre" type="text" placeholder="Tu nombre completo" required />
        </div>
        <div class="form__group">
          <label>Email o WhatsApp</label>
          <input v-model="form.contacto" type="text" placeholder="Para responderte" required />
        </div>
        <div class="form__group">
          <label>¿En qué te podemos ayudar?</label>
          <textarea v-model="form.mensaje" rows="4" placeholder="Contanos tu idea..."></textarea>
        </div>
        <button type="submit" class="btn btn--filled" style="width:100%">
          <span>{{ enviado ? '¡Mensaje enviado! ✓' : 'Enviar mensaje' }}</span>
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
const config = useRuntimeConfig()
const c = config.public.client

const form = reactive({ nombre: '', contacto: '', mensaje: '' })
const enviado = ref(false)

// El formulario redirige a WhatsApp con el mensaje pre-armado
function enviar() {
  const texto = encodeURIComponent(
    `¡Hola! Soy ${form.nombre}.\n\n${form.mensaje}\n\nPodés contactarme en: ${form.contacto}`
  )
  window.open(`https://wa.me/${c.whatsapp}?text=${texto}`, '_blank')
  enviado.value = true
  setTimeout(() => {
    enviado.value = false
    Object.assign(form, { nombre: '', contacto: '', mensaje: '' })
  }, 3000)
}
</script>

<style scoped>
.contacto__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
}

.contacto__links {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 2.5rem;
}

.contacto__link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border: 1px solid var(--color-borde);
  background: var(--color-secundario);
  transition: border-color 0.3s, background 0.3s;
  cursor: pointer;
}
.contacto__link:hover {
  border-color: var(--color-acento);
  background: color-mix(in srgb, var(--color-acento) 5%, var(--color-secundario));
}

.contacto__link-icon {
  font-size: 1.3rem;
  color: var(--color-acento);
  width: 24px;
  text-align: center;
  flex-shrink: 0;
}

.contacto__link div {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.contacto__link-label {
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-texto-suave);
}

.contacto__link-value {
  font-size: 0.92rem;
  color: var(--color-texto);
}

/* Formulario */
.contacto__form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form__group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form__group label {
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-texto-suave);
}

.form__group input,
.form__group textarea {
  background: var(--color-secundario);
  border: 1px solid var(--color-borde);
  color: var(--color-texto);
  font-family: var(--font-body), sans-serif;
  font-size: 0.95rem;
  padding: 0.9rem 1rem;
  outline: none;
  resize: vertical;
  transition: border-color 0.3s;
  width: 100%;
}

.form__group input:focus,
.form__group textarea:focus {
  border-color: var(--color-acento);
}

@media (max-width: 768px) {
  .contacto__inner {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>
