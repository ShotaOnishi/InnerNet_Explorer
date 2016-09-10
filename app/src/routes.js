import Vue from 'vue';

export default {
  '/': {
    component: Vue.component('article-list', require('./components/ArticleList/ArticleList')),
    name: 'article-list',
  },

  '/article': {
    component: Vue.component('article-view', require('./components/ArticleView/ArticleView')),
    name: 'article-view',
  },
};
