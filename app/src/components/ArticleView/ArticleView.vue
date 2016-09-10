<style scoped src="./ArticleView.scss"></style>
<template src="./ArticleView.html"></template>
<script>
  export default {
    data() {
      return {
        image_url: null,
      };
    },

    ready() {
      this.image_url = (`http://localhost:3000/${this.$route.query.image_url}`);
    },
  };
</script>
