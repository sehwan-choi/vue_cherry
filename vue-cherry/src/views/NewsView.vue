<template>
  <div>
    <p v-for="item in news" v-bind:key="item.id">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <small>
        {{ item.time_ago }} by 
        <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      news : 'fetchedNews'
    })
  },
  created() {
    this.$store.dispatch('FETCH_NEWS')
  }
}
</script>

<style>

</style>