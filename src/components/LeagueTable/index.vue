<template>
  <div class="container">
    <table id="league-table">
      <thead>
        <tr>
          <th>Pos</th>
          <th>Team</th>
          <th>P</th>
          <th>M</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>F</th>
          <th>A</th>
          <th>D</th>
          <th>Form</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in teamTables" :key="data.code">
          <th>{{ data.position }}</th>
          <td>{{ data.team.name }}</td>
          <td>{{ data.points }}</td>
          <td>{{ data.playedGames }}</td>
          <td>{{ data.won }}</td>
          <td>{{ data.draw }}</td>
          <td>{{ data.lost }}</td>
          <td>{{ data.goalsFor }}</td>
          <td>{{ data.goalsAgainst }}</td>
          <td>{{ data.goalDifference }}</td>
          <td>
            <StatusIcon
              v-for="(item, index) in data.form.split(',')"
              :key="index"
              :status="item"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import StatusIcon from "../StatusIcon";

export default {
  name: "LeagueTable",
  props: ["data"],
  components: {
    StatusIcon,
  },
  computed: {
    teamTables: function () {
      const rawItens = this.data.standings[0].table;

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
.container {
  overflow: scroll;
}

thead th {
  position: sticky;
  top: 0;
  background: #000;
  color: #fff;
}

thead th:first-child {
  left: 0;
  z-index: 1;
}

tbody th {
  position: sticky;
  left: 0;
  background: #fff;
}

thead th:nth-child(2) {
  left: 30px;
  z-index: 1;
}

tbody td:nth-child(2) {
  position: sticky;
  left: 30px;
  background: #fff;
  border-right: 1px solid #ccc;
}
</style>