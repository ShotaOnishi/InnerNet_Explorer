<style scoped src="./Article.scss"></style>
<template src="./Article.html"></template>
<script>
  export default {
    props: {
      title: String,
      url: String,
      isFavorite: Boolean,

      image: {
        coerce: function coerce(v) {
          return (`http://localhost:3000/${v}`);
        },
      },
    },

    ready() {
      // todo
    },
  };
</script>
