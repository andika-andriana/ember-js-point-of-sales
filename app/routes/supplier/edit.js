import Route from '@ember/routing/route';

export default Route.extend({
  templateName: 'supplier/create',
  model({id}){
    return this.store.peekRecord('supplier', id);
  }
});
