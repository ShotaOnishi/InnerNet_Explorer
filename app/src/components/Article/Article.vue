<style scoped src="./Article.scss"></style>
<template src="./Article.html"></template>
<script>
  export default {
    props: {
      title: String,
      url: String,
      image: String,
      isFavorite: Boolean,
    },
  };
</script>
