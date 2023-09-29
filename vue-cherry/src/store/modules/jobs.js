import api from '../../api/index.js'

export default {
  state: {
    jobs: [],
  },
  getters: {
    fetchedJobs(state) {
        return state.jobs;
    },
  },
  mutations: {
    SET_JOBS(state, jobs) {
        state.jobs = jobs;
    },
  },
  actions: {
    async FETCH_JOBS({ commit }) {
      try {
        var response = await api.fetchJobsList();
        commit('SET_JOBS', response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  }
}