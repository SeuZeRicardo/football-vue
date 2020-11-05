<template>
  <transition name="slide-fade">
    <div class="tooltip" v-show="show">
      {{ text }}
    </div>
  </transition>
</template>

<script>
export default {
  name: "Tooltip",
  props: {
    text: { type: String, required: true },
    show: { type: Boolean, required: true },
  },
};
</script>

<style lang="scss" scoped>
.tooltip {
  display: block;
  position: absolute;
  left: 90px;
  top: 0;
  z-index: 2;
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: #d8d8d8 0px 0px 14px;
  width: 100%;
  text-align: center;
}

.slide-fade-enter-active {
  transition: all 0.5s ease-in;
  opacity: 1;
}

.slide-fade-leave-active {
  transition: all 0.5s ease-out;
  opacity: 0;
}
</style>