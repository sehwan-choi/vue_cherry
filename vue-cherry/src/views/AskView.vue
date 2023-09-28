<template>
  <div>
    <p v-for="item in ask" v-bind:key="item.id">
      <router-link v-bind:to="item.url">{{ item.title }}</router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
// import { mapState } from 'vuex';
import { mapGetters} from 'vuex';

export default {
  computed: {
    // #2
    ...mapGetters({
      ask : 'fetchedAsk'
    })
    // #1
    // ...mapState(['ask'])
    // ...mapState({
    //   ask: state => state.ask
    // })
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }

}
</script>

<style>

</style>