import bus from '../utils/bus.js'

export default {
    created() {
        bus.$emit('start:spinner');
        this.$store.dispatch('FETCH_LIST', this.$route.name)
            .then(() => {
                console.log('FETCH_LIST COMPLETE', this.$route.name);
                bus.$emit('end:spinner');
            })
            .catch((error) => {
                console.log(error)
        });
  }
}