<template>
  <q-page class="q-pa-lg flex flex-center column">
    <h3>Test composition API</h3>
    <div class="compteur">
      <h4>Compteur</h4>
      <div class="q-mb-md"><span class="text-subtitle2">Valeur actuelle du compteur : </span>{{compteur}}</div>
      <div><span class="text-subtitle2">Valeur négative computed du compteur : </span>{{sillyComputed}}</div>
      <q-btn @click="incrementCompteur" color="primary" label="Bouton Incrementer" class="q-ma-xl"/>
    </div>
  </q-page>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  // use composition api
  setup () {
    const compteur = ref(0)
    function incrementCompteur () {
      compteur.value++
    }
    const sillyComputed = computed(() => {
      return 0 - compteur.value
    })
    return { compteur, incrementCompteur, sillyComputed }
  }
}
</script>
<style lang="scss">
.compteur {
    border : 5px $blue-3 solid;
    padding: 50px;
    border-radius: 50px;
    background-color: $blue-2

  }
</style>
