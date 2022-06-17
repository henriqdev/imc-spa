<template>
  <q-page class="row flex-center">
    <q-card
      bordered
      class="q-pa-md my-card col-10"
    >
      <q-card-section>
        <div class="text-grey-8 text-h6">Converse com Ana</div>
        <div class="text-grey text-subtitle2">Educadora alimentar virtual</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-btn
          to="/chat"
          round
          flat
          size="32px"
          icon="far fa-comments"
          text-color="secondary"
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
