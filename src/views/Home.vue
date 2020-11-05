<template>
  <div id="home">
    <Loading v-if="isFetching" />
    <div class="grid-layout-cards">
      <Card
        v-for="competition in competitionList"
        :key="competition.id"
        :data="competition"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Card from "@/components/Card";
import Loading from "@/components/Loading";

export default {
  name: "home",
  components: {
    Card,
    Loading,
  },
  mounted() {
    this.$store.dispatch("loadCompetitionList");
  },
  computed: mapState(["competitionList", "isFetching"]),
};
</script>

<style lang="scss" scoped>
.grid-layout-cards {
  display: grid;
  grid-gap: 1rem;

  @media (min-width: 480px) and (max-width: 779px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 780px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>