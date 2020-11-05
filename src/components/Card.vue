<template>
  <a
    class="card"
    v-on:click="$store.commit('SET_CURRENT_COMPETITION', data.code)"
  >
    <div class="wrapper">
      <h2>{{ data.name }}</h2>
      <h3>{{ data.area.name }}</h3>
    </div>
  </a>
</template>

<script>
export default {
  name: "Card",
  props: ["data"],
  methods: {
    updateCurrentLeague(code) {
      this.$store.dispatch("setCurrentCompetition", code);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  background-color: white;
  box-shadow: #d8d8d8 0px 0px 0.5rem;
  width: 100%;
  position: relative;
  border-collapse: collapse;

  &:before {
    transition: all 0.4s;
    position: absolute;
    content: "";
    width: 100%;
    height: 50%;
    left: 50%;
    margin-left: -50%;
    top: 25%;
    border-color: rgba(200, 200, 200, 0);
    border-style: solid;
    border-width: 0 2px;
  }

  &:after {
    transition: all 0.4s;
    position: absolute;
    content: "";
    width: 50%;
    height: 100%;
    left: 50%;
    margin-left: -25%;
    top: 0;
    border-color: rgba(200, 200, 200, 0);
    border-style: solid;
    border-width: 2px 0;
  }

  &:hover {
    &:after {
      width: calc(100% + 4px);
      margin-left: -50%;
      border-color: rgba(90, 90, 90, 1);
    }

    &:before {
      height: calc(100% + 4px);
      top: 0;
      border-color: rgba(90, 90, 90, 1);
    }
  }
}

.wrapper {
  margin: 0 1rem;
}
</style>