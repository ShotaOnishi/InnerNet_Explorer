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
      searchQuery: (() => {
        this.executeSearch(this.searchQuery);
      }),
    },

    ready() {
      // TODO
    },

    methods: {
      executeSearch(query) {
        apiService.executeFind(query).then(result => {
          // TODO
        });
      },
    },
  };
</script>
