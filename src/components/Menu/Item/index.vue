<template>
  <li>
    <router-link :to="url">
      <div
        class="menu-item"
        :style="cssProps"
        v-on:mouseover="showTooltip = true"
        v-on:mouseleave="showTooltip = false"
      >
        <FontAwesomeIcon class="menu-icon" :icon="chooseIcon" size="lg" />
      </div>
    </router-link>
    <Tooltip :text="text" :show="showTooltip" />
  </li>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faTable,
  faFutbol,
  faGlobeAmericas,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import Tooltip from "../../Tooltip/index.vue";

export default {
  name: "Menu",
  components: {
    FontAwesomeIcon,
    Tooltip,
  },
  props: {
    text: { type: String, required: true },
    url: { type: String, default: "/" },
    type: { type: String, default: "default" },
    icon: { type: String, required: true },
  },
  data: function () {
    return {
      theme: {
        default: { main: "#55bf06", red: 85, green: 191, blue: 6 },
        twitter: { main: "#1da1f2", red: 28, green: 160, blue: 242 },
        github: { main: "#333", red: 51, green: 51, blue: 51 },
      },
      showTooltip: false,
    };
  },
  computed: {
    cssProps() {
      return {
        "--color": this.theme[this.type].main,
        "--red-color": this.theme[this.type].red,
        "--green-color": this.theme[this.type].green,
        "--blue-color": this.theme[this.type].blue,
      };
    },
    chooseIcon() {
      const iconsList = {
        worldLeague: faGlobeAmericas,
        table: faTable,
        soccer: faFutbol,
        twitter: faTwitter,
        github: faGithub,
      };
      return iconsList[this.icon];
    },
  },
};
</script>

<style lang="scss">
@mixin animation-hover($hex, $red-color, $green-color, $blue-color) {
  transition: 0.5s;

  &:hover {
    border: 1px solid $hex;
    background-color: $hex;
    box-shadow: 0 0 0 3px rgba($red-color, $green-color, $blue-color, 0.2),
      0 0 0 6px rgba($red-color, $green-color, $blue-color, 0.4),
      0 0 0 9px rgba($red-color, $green-color, $blue-color, 0.6);

    .menu-icon {
      color: white;
    }
  }
}

li {
  list-style-type: none;
  margin: 1rem 0;
  position: relative;
}

.menu-item {
  border: 1px solid grey;
  color: grey;
  margin: 0 auto;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @include animation-hover(
    var(--color),
    var(--red-color),
    var(--green-color),
    var(--blue-color)
  );

  a {
    text-decoration-line: none;
  }

  .menu-icon {
    color: grey;
  }
}
</style>