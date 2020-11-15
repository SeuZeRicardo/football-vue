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
        <table id="league-table">
          <thead>
            <tr>
              <td>
                <span>Position</span>
              </td>
              <td>
                <span>Club</span>
              </td>
              <td>
                <span>Points</span>
              </td>
              <td>
                <span>Matches</span>
              </td>
              <td>
                <span>Win</span>
              </td>
              <td>
                <span>Draw</span>
              </td>
              <td>
                <span>Loss</span>
              </td>
              <td>
                <span>Goals For</span>
              </td>
              <td>
                <span>Goals Against</span>
              </td>
              <td>
                <span>Goals difference</span>
              </td>
              <td>
                <span>Last Matches</span>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in teamTables" :key="data.code">
              <td>{{ data.position }}</td>
              <td>{{ data.team.name }}</td>
              <td>{{ data.points }}</td>
              <td>{{ data.playedGames }}</td>
              <td>{{ data.won }}</td>
              <td>{{ data.draw }}</td>
              <td>{{ data.lost }}</td>
              <td>{{ data.goalsFor }}</td>
              <td>{{ data.goalsAgainst }}</td>
              <td>{{ data.goalDifference }}</td>
              <td>{{ data.form }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>


<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
  name: "table",
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
    teamTables: function () {
      const rawItens = this.league.standings[0].table;

      //Run every item in array
      rawItens.forEach((element) => {
        //Regex to remove number and all two words in uppercase
        let filteredName = element.team.name
          .replace(/[0-9]/g, "")
          .replace(/\w*[A-Z]\w*[A-Z]\w*/g, "");
        element.team.name = filteredName;
      });
      return rawItens;
    },
  },
};
</script>

<style lang="scss" scoped>
#league-table {
  td {
    text-transform: uppercase;
  }

  .header {
    font-weight: 700;
  }

  @media (max-width: 600px) {
    .stats-word {
      overflow: hidden;
      white-space: nowrap;
    }
  }
}
</style>