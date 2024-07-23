<template>
  <div>
    <v-card
    >
      <v-card-title>
        {{ title }}
      </v-card-title>

      <v-card-text class="bg-surface-light pt-4">
        <slot></slot>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'AppPage',
  components: {},
  props: {
    title: String
  }
}
</script>