<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner-bar :loading="loadingStatus"></spinner-bar>
  </div>
</template>

<script>
import SpinnerBar from './components/SpinnerBar.vue'
import ToolBar from './components/ToolBar.vue'
import bus from './utils/bus.js'


export default {
  name: 'app',
  components: { 
    ToolBar,
    SpinnerBar,
  },
  data() {
    return {
      loadingStatus: false,
    }
  },
  methods: {
    startSpninner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpninner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpninner);
    bus.$off('end:spinner', this.endSpinner);
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34496e;
  text-decoration: none;
}
a:hover {
  color:#42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}
/* Router Transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
