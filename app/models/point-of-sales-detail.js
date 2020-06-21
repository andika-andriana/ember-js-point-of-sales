import DS from 'ember-data';
const { Model } = DS;
import { computed } from '@ember/object';

export default Model.extend({
  product: DS.attr('string'),
  qty: DS.attr('number'), 
  price: DS.attr('number'),
  pointOfSale: DS.belongsTo(),
  
  subtotal: computed('qty', 'price', function(){
    return this.get('qty') * this.get('price');
  })
});
