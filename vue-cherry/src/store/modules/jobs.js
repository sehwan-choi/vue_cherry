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
    FETCH_JOBS({ commit }) {
        return api.fetchJobsList()
            .then(response => {
                commit('SET_JOBS', response.data);
            }).catch(error => console.log(error));
    },
  }
}