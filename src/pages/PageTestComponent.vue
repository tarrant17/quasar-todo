<template>
  <q-page class="q-pa-lg flex flex-center column">
    <test-qtable/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import TestQTable from '../components/TestQTable'
// import mapState from 'vuex'

export default defineComponent({
  name: 'IndexPage',
  components: {
    'test-qtable': TestQTable
  },
  computed: {

  },
  methods: {

  }
})
</script>
