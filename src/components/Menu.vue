<template>
  <v-card>
    <v-navigation-drawer app :mini-variant="mini" fixed>
      <template v-slot:prepend>
        <v-list>
          <v-list-item>
            <v-list-item-title>
              <v-img src="@/assets/logo.svg"></v-img>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </template>
      <v-divider></v-divider>
      <v-container class="fill-height py-0">
        <v-row class="fill-height py-0">
          <v-col class="d-flex flex-column justify-space-between py-0">

            <v-list rounded class="menu">

              <v-menu open-on-hover right nudge-right="50" transition="scroll-x-transition">
                <template v-slot:activator="{ on }">
                  <v-list-item v-on="on">
                    <v-list-item-avatar>
                      <router-link class="white--text" to="/">
                        <v-icon>mdi-home-outline</v-icon>
                      </router-link>
                    </v-list-item-avatar>
                  </v-list-item>
                </template>
                <v-card class="custom-tooltip">
                  <v-card-text class="text-center font-weight-bold">Home</v-card-text>
                </v-card>
              </v-menu>

              <v-menu open-on-hover right nudge-right="50" transition="scroll-x-transition">
                <template v-slot:activator="{ on }">
                  <v-list-item v-on="on">
                    <v-list-item-avatar>
                      <router-link class="white--text" to="/live">
                        <v-icon>mdi-play-circle-outline</v-icon>
                      </router-link>
                    </v-list-item-avatar>
                  </v-list-item>
                </template>
                <v-card class="custom-tooltip">
                  <v-card-text class="text-center font-weight-bold">Live</v-card-text>
                </v-card>
              </v-menu>

              <v-menu open-on-hover right nudge-right="50" transition="scroll-x-transition">
                <template v-slot:activator="{ on }">
                  <v-list-item v-on="on">
                    <v-list-item-avatar>
                      <router-link class="white--text" to="/myteams">
                        <v-icon>mdi-soccer</v-icon>
                      </router-link>
                    </v-list-item-avatar>
                  </v-list-item>
                </template>
                <v-card class="custom-tooltip">
                  <v-card-text class="text-center font-weight-bold">My Teams</v-card-text>
                </v-card>
              </v-menu>

            </v-list>

            <v-list rounded class="social-media">

              <v-menu open-on-hover right nudge-right="50" transition="scroll-x-transition">
                <template v-slot:activator="{ on }">
                  <v-list-item v-on="on">
                    <v-list-item-avatar class="twitter">
                      <router-link class="white--text" to="/">
                        <v-icon> mdi-twitter </v-icon>
                      </router-link>
                    </v-list-item-avatar>
                  </v-list-item>
                </template>
                <v-card class="custom-tooltip">
                  <v-card-text class="text-center font-weight-bold">Twitter</v-card-text>
                </v-card>
              </v-menu>

              <v-menu open-on-hover right nudge-right="50" transition="scroll-x-transition">
                <template v-slot:activator="{ on }">
                  <v-list-item v-on="on">
                    <v-list-item-avatar class="github">
                      <router-link class="white--text" to="/live">
                        <v-icon>mdi-github-face</v-icon>
                      </router-link>
                    </v-list-item-avatar>
                  </v-list-item>
                </template>
                <v-card class="custom-tooltip">
                  <v-card-text class="text-center font-weight-bold">Github</v-card-text>
                </v-card>
              </v-menu>

            </v-list>
          </v-col>
        </v-row>

      </v-container>

    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    name: 'Menu',
    data() {
      return {
        mini: true,
      }
    },
  }
</script>

<style lang="scss" scoped>
  /** Mixins have the rules to do transition time, color in HEX format, and RGB color separates by comma */
  @mixin animation-hover ($transition-time, $hex, $red-color, $green-color, $blue-color) {
    transition: $transition-time;

    &:hover {
      border: 1px solid $hex;
      background-color: $hex;
      box-shadow: 0 0 0 3px rgba($red-color, $green-color, $blue-color, .2),
        0 0 0 6px rgba($red-color, $green-color, $blue-color, .4),
        0 0 0 9px rgba($red-color, $green-color, $blue-color, .6);

      .v-icon {
        color: white;
      }
    }
  }

  .v-navigation-drawer::v-deep {
    .v-navigation-drawer__content {
      overflow-y: hidden !important;
    }
  }

  .menu {
    .v-avatar {
      border: 1px solid grey;

      @include animation-hover(.5s, #55BF06, 85, 191, 6);
    }
  }

  .social-media {
    .v-avatar {
      border: 1px solid grey;
    }

    .twitter {
      @include animation-hover(.5s, #1DA1F2, 28, 160, 242);
    }

    .github {
      @include animation-hover(.5s, #333, 51, 51, 51);
    }
  }

  .v-avatar {
    a {
      text-decoration-line: none;

      &:hover {
        text-decoration-line: none;
      }
    }
  }
</style>