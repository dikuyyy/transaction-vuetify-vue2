<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Transaction App</v-list-item-title>
            <v-list-item-subtitle>Vuetify</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
            :to="{ name: 'transaction-history' }"
            :class="{ 'bg-amber': $route.name === 'transaction-history' }"
            link
        >
          <v-list-item-content>
            <v-list-item-title>Transaction</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-toolbar-title>Halo, Admin!</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Add your custom styles here */
</style>
