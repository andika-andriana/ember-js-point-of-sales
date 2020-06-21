import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
  templateName: 'point-of-sale/input',
  pointOfSale: service(),

  model(){
    var data = this.store.createRecord('point-of-sale');
    this.pointOfSale.setModel(data);
    return this.pointOfSale.model;
  }
});
