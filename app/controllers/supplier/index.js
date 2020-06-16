import Controller from '@ember/controller';

export default Controller.extend({
  queryParams : ['page', 'perPage', 'sort', {
    filter:{
      type: 'array'
    }
  }],
  page:1,
  perPage:3,
});
