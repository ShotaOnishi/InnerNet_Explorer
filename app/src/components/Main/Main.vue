<style scoped src="./Main.scss"></style>
<template src="./Main.html"></template>
<script>
  import store from '../../vuex/store';
  import Navigation from '../Navigation/Navigation';
  import Header from '../Header/Header';
  import './venders.scss';

  export default {
    store,

    components: {
      HeaderComponent: Header,
      NavigationComponent: Navigation,
    },
  };
</script>
