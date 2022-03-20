<template>
  <q-page class="q-pa-lg flex flex-center column">
    {{compteur}}
    <q-input v-model="compteur" />
    <q-btn @click="incrementCompteur">add</q-btn>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
// import mapState from 'vuex'

export default defineComponent({
  name: 'IndexPage',
  computed: {
    compteur: {
      get () {
        return this.$store.state.compteur.compteur
      },
      set (value) {
        this.$store.dispatch('setCompteur', parseInt(value))
      }
    }
  },
  methods: {
    incrementCompteur () {
      this.$store.dispatch('incrementCompteur')
    }
  }
})
</script>
