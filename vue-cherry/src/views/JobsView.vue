<template>
  <div>
    <p v-for="job in jobs" v-bind:key="job.id">
      <a :href="job.url">{{ job.title }}</a>
      <small>{{ job.time_ago }}, {{ job.domain }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      jobs : 'fetchedJobs'
    })
  },
  created : function() {
    this.$store.dispatch('FETCH_JOBS');
  },
}
</script>

<style>

</style>