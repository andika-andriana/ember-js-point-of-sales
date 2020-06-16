import DS from 'ember-data';
const { Model } = DS;
import { computed } from '@ember/object';

export default Model.extend({
  transactionDate: DS.attr('date'),
  supplier: DS.belongsTo('supplier'),
  remarks: DS.attr('string'),
  pointOfSalesDetail: DS.hasMany(),
  
  totalPrice: computed('pointOfSalesDetail', function(){
    let total = 0;
    this.get('pointOfSalesDetail').forEach(function(item){
      total = total + item.subtotal
    });
    return total;
  }),
});
