export default class ApiService {
  constructor() {
    // TODO this should be changed according to the env.
    this.API_URL = 'http://localhost:3000/api/v1';
    this.API_ENDPOINTS = {
      find: '/pages/find',
      index: '/pages',
      show: '/pages',
    };
  }

  executeFind(query) {
    console.log(query);

    // TODO
  }

  executeIndex() {
    // TODO
  }

  execiteShow(id) {
    console.log(id);

    // TODO
  }
}
