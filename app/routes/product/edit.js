import Route from '@ember/routing/route';

export default Route.extend({
  templateName: 'product/input',
  model({id}){
    return this.store.peekRecord('product', id);
  }
});
