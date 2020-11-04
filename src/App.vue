<template>
  <body id="app">
    <!-- MENU -->
    <Menu />
    <!-- MAIN CONTENT -->
    <div>
      <router-view />
    </div>
  </body>
</template>

<script>
import Menu from "@/components/Menu/index.vue";

export default {
  components: {
    Menu,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap");

body {
  margin: 0;
  font-family: "Lato", sans-serif;
}

ul,
ol {
  margin: 0;
  padding: 0;
}
</style>