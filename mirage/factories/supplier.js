import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i){
  return `Supplier Ke-${i}`
  },
  address(i){
    return `Jalan Raya Ke-${i}`
  }
});
