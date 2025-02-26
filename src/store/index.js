import { createStore } from "vuex";
import { BASE_API_URL } from "@/utils/constants";
// NOTE: since the store is small, it is not split up into separate files
export default createStore({
  state: {
    teams: [],
    searchQuery: "",
    followedTeams: JSON.parse(sessionStorage.getItem("followedTeams")) || [],
  },
  mutations: {
    SET_TEAMS(state, teams) {
      state.teams = teams;
    },
    SET_SEARCH_QUERY(state, query) {
      state.searchQuery = query;
    },
    TOGGLE_FOLLOW_TEAM(state, team) {
      const index = state.followedTeams.findIndex((t) => t.id === team.id);
      if (index !== -1) {
        state.followedTeams.splice(index, 1);
      } else {
        state.followedTeams.push(team);
      }
      sessionStorage.setItem(
        "followedTeams",
        JSON.stringify(state.followedTeams)
      );
    },
  },
  actions: {
    fetchTeams({ commit }) {
      // NOTE: if more requests are needed, an abstract method for makeRequest should be added
      fetch(BASE_API_URL)
        .then((response) => response.json())
        .then((data) => commit("SET_TEAMS", data.football_teams));
    },
    updateSearchQuery({ commit }, query) {
      commit("SET_SEARCH_QUERY", query);
    },
    toggleFollowTeam({ commit }, team) {
      commit("TOGGLE_FOLLOW_TEAM", team);
    },
  },
  getters: {
    filteredTeams: (state) => {
      if (state.searchQuery.length < 3) return [];
      const query = state.searchQuery.toLowerCase();
      return state.teams.filter(
        (team) =>
          team.name.toLowerCase().includes(query) ||
          team.stadium.toLowerCase().includes(query) ||
          team.leagues.some((league) => league.toLowerCase().includes(query))
      );
    },
    isTeamFollowed: (state) => (teamId) =>
      state.followedTeams.some((team) => team.id === teamId),
  },
});
