<style scoped src="./Main.scss"></style>
<template src="./Main.html"></template>
<script>
  import store from '../../vuex/store';
  import Navigation from '../Navigation/Navigation';
  import Header from '../Header/Header';

  export default {
    store,

    components: {
      Header,
      Navigation,
    },
  };
</script>
