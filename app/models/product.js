import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  purchasePrice: DS.attr('number'),
  sellPrice: DS.attr('number'),
  isPolyponic: DS.attr('boolean')
});
