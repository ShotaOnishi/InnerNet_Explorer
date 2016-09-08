import Vue from 'vue';
import Resource from 'vue-resource';

Vue.use(Resource);

export default class ApiService {
  constructor() {
    const resource = function resource(url) {
      return Vue.resource(url, null, null, { emulateJSON: true });
    };

    // TODO this should be changed according to the env.
    const API_URL = 'http://localhost:3000/api/v1';
    this.APIs = {
      index: resource(`${API_URL}/pages`),
      show: resource(`${API_URL}/pages/:id`),
      find: resource(`${API_URL}/pages/find`),
    };
  }

  executeFind(query) {
    return this.APIs.find.get({}, { q: query });
  }

  executeIndex() {
    return this.APIs.index.get();
  }

  execiteShow(id) {
    return this.APIs.show.get({ id });
  }
}
