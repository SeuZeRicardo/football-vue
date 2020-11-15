<template>
  <body id="app">
    <!-- MENU -->
    <Menu />
    <!-- MAIN CONTENT -->
    <div class="main__content">
      <div class="wrapper">
        <router-view />
      </div>
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

.main__content {
  margin-left: 90px;
  background-color: #e5e5e5;
  width: 100%;
  max-width: calc(100vw - 90px);
  height: 100%;
  min-height: 100vh;
}

.wrapper {
  margin: 0 15px;
}

h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
}
</style>