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
      // noop
    },

    methods: {
      executeSearch(query) {
        apiService.executeFind(query).then(result => {
          console.log('検索結果');
          console.log(result);
        });
      },
    },
  };
</script>
