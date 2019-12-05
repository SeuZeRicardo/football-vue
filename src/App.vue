<template>
  <v-app id="app">
    <!-- MENU -->
    <Menu />
    <!-- MAIN CONTENT -->
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>    
  </v-app>
</template>

<script>
import Menu from '@/components/Menu';

export default {
  components: {
    Menu,
  }
}
</script>

<style lang="scss">
  footer {
    width: 100%;
  }
</style>