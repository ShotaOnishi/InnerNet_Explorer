<style scoped src="./ArticleList.scss"></style>
<template src="./ArticleList.html"></template>
<script>
  import ApiService from '../../api.js';
  import Article from '../Article/Article';

  const apiService = new ApiService();

  export default {
    components: {
      ArticleComponent: Article,
    },

    data() {
      return {
        articles: [],
      };
    },

    ready() {
      this.fetchArticles();
    },

    methods: {
      fetchArticles() {
        apiService.executeIndex().then(result => {
          this.articles = result.data.data;
        });
      },
    },
  };
</script>
