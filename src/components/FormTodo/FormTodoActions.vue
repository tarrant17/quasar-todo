<template>
<div>
  <q-btn-group spread unelevated rounded  >
      <q-btn type="submit" color="primary" label="Ajouter" class="q-ma-md" />
      <q-btn
        @click="$emit('cancel')"
        color="secondary"
        label="Annuler"
        class="q-ma-md"
      />
  </q-btn-group>
</div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
  },
  emits: ['cancel']
})
</script>
