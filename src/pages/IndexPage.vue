<template>
  <q-page class="q-pa-lg flex flex-center column">
    <div class="compteur">
      <h4>Compteur</h4>
      <span><span class="text-bold">Valeur actuelle du compteur : </span>{{compteur}}</span>
      <q-input label="Input compteur direct" v-model="compteur" color="primary"/>
      <q-btn @click="incrementCompteur" color="primary" label="Bouton Incrementer" class="q-ma-xl"/>
      <test-component v-model="compteur"/>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import ChildToParentEmitUpdateValue from '../components/Tests/ChildToParentEmitUpdateValue'
// import mapState from 'vuex'

export default defineComponent({
  name: 'IndexPage',
  components: {
    'test-component': ChildToParentEmitUpdateValue
  },
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
<style lang="scss">
.compteur {
    border : 5px $blue-3 solid;
    padding: 50px;
    border-radius: 50px;
    background-color: $blue-2

  }
</style>
