<template>
  <q-page class="row flex-center">
    <q-card bordered class="q-pa-md my-card col-10 bg-green-2">
      <q-card-section>
        <div class="text-h6">Converse com Ana</div>
        <div class="text-subtitle2">Educadora alimentar virtual</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-avatar
          size="100px"
          font-size="52px"
          text-color="primary"
          icon="far fa-comments"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
