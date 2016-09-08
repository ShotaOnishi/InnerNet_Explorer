<style scoped src="./Header.scss"></style>
<template src="./Header.html"></template>
<script>
  import ApiService from '../../api.js';

  const apiService = new ApiService();

  export default {
    data() {
      return {
        searchQuery: '',
      };
    },

    watch: {
      searchQuery() {
        this.executeSearch(this.searchQuery);
      },
    },

    ready() {
      // TODO
    },

    methods: {
      executeSearch(query) {
        console.log(query);

        // dummy for now
        apiService.executeFind(query);
      },
    },
  };
</script>
