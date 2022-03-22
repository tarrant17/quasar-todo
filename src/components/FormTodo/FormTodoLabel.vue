<template>
    <q-input
        :modelValue="name"
        @input="$emit('update:modelValue', $event.target.value)"
        label="A faire"
      />
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['name'],
  emits: ['update:modelValue']
})
</script>
