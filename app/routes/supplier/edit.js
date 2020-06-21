import Route from '@ember/routing/route';

export default Route.extend({
  templateName: 'supplier/input',
  model({id}){
    return this.store.peekRecord('supplier', id);
  }
});
