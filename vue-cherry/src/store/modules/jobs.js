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
        api.fetchJobsList()
            .then(({ data }) => {
                commit('SET_JOBS', data);
            }).catch(error => console.log(error));
    },
  }
}