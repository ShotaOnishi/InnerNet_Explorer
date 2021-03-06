import Vue from 'vue';
import Electron from 'vue-electron';
import Router from 'vue-router';

import 'jquery';
import 'bootstrap';
import 'admin-lte';

import './venders.scss';

import MainComponent from './components/Main/Main';
import routes from './routes';

Vue.use(Electron);
Vue.use(Router);
Vue.config.debug = true;

const router = new Router();

router.map(routes);
router.beforeEach(() => {
  window.scrollTo(0, 0);
});
router.redirect({
  '*': '/',
});

router.start(MainComponent, 'app');
