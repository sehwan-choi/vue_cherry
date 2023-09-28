<template>
  <div>
    <p>name : {{ userInfo.id }}</p>
    <p>karma : {{ userInfo.karma }}</p>
    <p>crearted : {{ userInfo.created }}</p>
    <p>about : <span v-html="userInfo.about"/></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            userInfo: 'fetchedUser'
        })
    },
    created() {
        const username = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', username);
    }
}
</script>

<style>

</style>