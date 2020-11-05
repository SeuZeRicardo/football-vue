/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    competitionList: [],
    currentCompetition: null,
    todaysMatches: null,
    isFetching: false,
    apiStatus: null, 
  },
  /** Actions -> It´s to commit mutations
   * [commit] serve to change state data
   */
  actions: {
    /** Get all competition List Avaliable */
    loadCompetitionList: function () {
      this.commit('SET_FETCHING_STATUS', true);
      return axios({
          headers: {
            'X-Auth-Token': 'e9c6e436a05442488ce54e147180c5c7'
          },
          method: 'get',
          url: 'https://api.football-data.org/v2/competitions',
        })
        .then(response => {
          const { status, data: { competitions }} = response;
          const competitionList = competitions.filter(item => (
            item.plan == 'TIER_ONE'));
          this.commit('SET_API_STATUS', status);
          this.commit('SET_COMPETITION_LIST', competitionList);
        })
        .catch(error => {
          console.error(error)
        })
        .finally(() => this.commit('SET_FETCHING_STATUS', false))
    },
    /** On Click Save the current League that user click */
    setCurrentCompetition: payload => {
      this.commit('SET_COMPETITION_LIST', payload);
    },
    /** When a user select a specific league return the data of this specific league */
    loadSelectedCompetition: code => {
      axios({
          headers: {
            'X-Auth-Token': 'e9c6e436a05442488ce54e147180c5c7'
          },
          method: 'get',
          url: `https://api.football-data.org/v2/competitions/${code}/standings`,
        })
        .then(response => this.competitionCode = response.data)
        .catch(response => (this.competitionCode = response.data))
    },
    loadTodaysMatchs: function () {
      axios({
          headers: {
            'X-Auth-Token': 'e9c6e436a05442488ce54e147180c5c7'
          },
          method: 'get',
          url: 'https://api.football-data.org/v2/matches',
        })
        .then(response => (this.todaysMatches = response.data.matches))
        .then(todaysMatches => {
          this.commit('SET_TODAY_MATCHES_LIST', todaysMatches);
        })
        .catch(response => (this.todaysMatches = response))
    },
  },
  /** Mutations -> It´s to manipulate state */
  mutations: {
    SET_FETCHING_STATUS(state, status) {
      state.isFetching = status;
    },
    SET_API_STATUS(state, status) {
      state.apiStatus = status;
    },
    SET_COMPETITION_LIST(state, data) {
      state.competitionList = data;
    },
    SET_CURRENT_COMPETITION(state, data) {
      state.currentCompetition = data;
    },
    SET_TODAY_MATCHES_LIST(state, data) {
      state.todaysMatches = data;
    },
  },
  /** Getters -> It´s to watch the state */
  getters: {
    currentCompetition: state => state.currentCompetition
  },
})