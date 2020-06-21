import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
  templateName: 'point-of-sale/input',
  pointOfSale: service(),

  model({id}){
    var data = this.store.peekRecord('pointOfSale', id);
    this.pointOfSale.setModel(data);
    return this.pointOfSale.model;
  }
});
