<template>
  <div id="table">
    <section class="step">
      <h1>Which League do you wanna see ?</h1>
      <div>
        <select v-model="selectedLeagueId">
          <option :value="null" disabled selected>Select a League</option>
          <option
            v-for="competitionLeague in competitionList"
            :key="competitionLeague.id"
            :value="competitionLeague.id"
          >
            {{ competitionLeague.name }} - {{ competitionLeague.area.name }}
          </option>
        </select>
      </div>
    </section>

    <section class="step" v-if="league">
      <div>
        <h2>{{ league.competition.name }}</h2>
        <h3>{{ league.season.startDate }} - {{ league.season.endDate }}</h3>
        <LeagueTable :data="league" />
      </div>
    </section>
  </div>
</template>


<script>
import { mapState } from "vuex";
import axios from "axios";

import LeagueTable from "../components/LeagueTable/index";

export default {
  name: "table",
  components: { LeagueTable },
  data() {
    return {
      selectedLeagueId: null,
      league: false,
      step: 0,
    };
  },
  mounted() {
    /** Call the function which make API call and commit the mutation */
    this.$store.dispatch("loadCompetitionList");
  },
  watch: {
    selectedLeagueId: function () {
      this.fetchLeagueData(this.selectedLeagueId);
    },
  },
  methods: {
    fetchLeagueData(id) {
      axios({
        headers: {
          "X-Auth-Token": "e9c6e436a05442488ce54e147180c5c7",
        },
        method: "get",
        url: `https://api.football-data.org/v2/competitions/${id}/standings`,
      })
        .then((response) => {
          this.league = response.data;
        })
        .catch((response) => (this.league = response));
    },
  },
  computed: {
    /** Displaying state data using Vuex */
    ...mapState(["competitionList"]),
  },
};
</script>