<template>
  <q-input
    filled
    :model-value="date"
    @update:modelValue="event=>$emit('update:modelValue', event)"
    mask="date"
    :rules="['date']">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy
            ref="qDateProxy"
            cover
            transition-show="scale"
            transition-hide="scale"
          >
            <q-date
              :model-value="date"
              @update:modelValue="onChangeSelectCalendar($event)">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data () {
    return {
      date: this.modelValue
    }
  },
  methods: {
    onChangeSelectCalendar (event) {
      this.date = event
      this.$emit('update:modelValue', event)
    }
  }
})
</script>
