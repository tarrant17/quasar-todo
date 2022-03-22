<template>
    <q-input
        :model-value="modelValue"
        @update:modelValue="event=>$emit('update:modelValue', event)"
        label="A faire"
        :rules="[val => !!val || 'Field is required']"
      />
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['modelValue'],
  emits: ['update:modelValue'],
  methods: {
  }
})
</script>
