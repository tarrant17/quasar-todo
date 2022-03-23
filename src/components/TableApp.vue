<template>
  <div class="q-pa-md">
    <q-table
      color="primary"
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="id"
      :loading="loading"
    />
  </div>
</template>

<script>
const columns = [
  { name: 'id', align: 'left', label: 'id', field: 'id', sortable: true },
  { name: 'label', label: 'Libellé', align: 'left', field: 'label', sortable: true },
  { name: 'date', label: 'Date', field: 'date', align: 'right', sortable: true }
]

export default {
  props: ['rows', 'loading'],
  setup () {
    return {
      columns
    }
  }
}
</script>
