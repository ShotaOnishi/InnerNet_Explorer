import Vue from 'vue';

export default {
  '/': {
    component: Vue.component('main-component', require('./components/Main/Main')),
    name: 'main-component',
  },
};
