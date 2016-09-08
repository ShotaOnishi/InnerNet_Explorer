<style scoped src="./Main.scss"></style>
<template src="./Main.html"></template>
<script>
  import store from '../../vuex/store';
  import Navigation from '../Navigation/Navigation';

  export default {
    store,

    components: {
      Navigation,
    },
  };
</script>
