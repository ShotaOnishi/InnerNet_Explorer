<style>
  * {
    margin: 0;
    padding: 0;
  }

  html,
  body { height: 100%; }

  body {
    align-items: center;
    background-position: center;
    display: flex;
    justify-content: center;
    text-align: center;
  }
</style>

<template>
  <div>
    <router-view>
    </router-view>
  </div>
</template>

<script>
  import store from 'src/vuex/store';

  export default {
    store,
  };
</script>
