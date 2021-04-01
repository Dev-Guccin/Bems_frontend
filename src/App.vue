<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
    <AppSidebar></AppSidebar>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>4Msys Monitoring System</v-toolbar-title>
      <v-layout align-end justify-end>
        <v-btn elevation="3" router :to="{name: 'login'}" exact>Admin page</v-btn>
      </v-layout>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppSidebar from './components/AppSidebar.vue'

  export default {
    data: () => ({ drawer: null }),
    components: {
      AppSidebar
    }
  }
</script>