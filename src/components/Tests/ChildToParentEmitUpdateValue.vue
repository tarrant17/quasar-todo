<template>
  <div class="compteur column">
    <p class="text-subtitle1">Composant Test ChildToParentEmitUpdateValue</p>
    <label>
      Met à jour le composant parent avec un input html :
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </label>
    <q-input
        :model-value="modelValue"
        @update:modelValue="event=>$emit('update:modelValue', event)"
        class="col-2"
        label="Met à jour le composant parent avec un input quasar :"/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: ['modelValue'],
  emits: ['update:modelValue']
})
</script>
<style>
  .child {
    border : 5px blue solid;
    padding: 10px
  }
</style>
