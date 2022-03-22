<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'gros-test',
  props: ['modelValue'],
  emits: ['update:modelValue']
})
</script>
