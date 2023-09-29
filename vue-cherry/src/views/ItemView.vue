<template>
  <div>
    <section>
        <user-profile :info="item">
          <router-link :to="`/user/${item.user}`" slot="username">{{ item.user }}</router-link>
          <template slot="time">
            Posted {{ item.time_ago }}
          </template>
        </user-profile>
    </section>
    <section>
        <h2>{{ item.title }}</h2>
    </section>
    <section>
        <div v-html="item.content">
        </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserProfile from '../components/UserProfile.vue';

export default {
  components: { UserProfile },
    computed: {
        ...mapGetters({
            item: 'fetchedItem'
        })
    },
    created() {
        const id = this.$route.query.id;
        this.$store.dispatch('FETCH_ITEM', id)
    }
}
</script>

