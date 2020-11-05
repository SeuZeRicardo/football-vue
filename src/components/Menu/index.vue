<template>
  <nav id="menu">
    <div class="header">
      <div class="logo-box">
        <img src="@/assets/logo.svg" />
      </div>
    </div>
    <div class="content">
      <div class="group-itens">
        <ul>
          <Item icon="worldLeague" text="Home" url="/" />
          <Item icon="soccer" text="Live" url="/live" />
          <Item icon="table" text="Table League" url="/table" />
        </ul>
      </div>
      <div class="group-itens">
        <ul>
          <Item icon="twitter" type="twitter" text="Twitter" url="/" />
          <Item icon="github" type="github" text="Github" url="/" />
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Item from "./Item/index.vue";

export default {
  name: "Menu",
  components: {
    Item,
  },
  data() {
    return {
      mini: true,
    };
  },
};
</script>

<style lang="scss" scoped>
#menu {
  max-width: 90px;
  width: 100%;
  height: 100vh;
  border-right: 1px solid grey;
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 1;
}

.header {
  border-bottom: 1px solid grey;

  .logo-box {
    margin: 1rem;
  }
}

.content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>