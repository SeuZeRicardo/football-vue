<template>
  <div class="rounded" :class="type[status].class">
    {{ status }}
  </div>
</template>

<script>
export default {
  name: "StatusIcon",
  props: { status: { type: String, required: true } },
  data: function () {
    return {
      type: {
        W: { class: "win" },
        D: { class: "draw" },
        L: { class: "loss" },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.rounded {
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 0.7rem;
  display: inline-grid;
  place-items: center;
  margin: 0 0.2rem;
  color: white;
  font-size: 0.6rem;
  font-weight: 700;
}

.win {
  background-color: green;
}

.draw {
  background-color: grey;
}

.loss {
  background-color: red;
}
</style>