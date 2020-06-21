import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  transactionDate(){
    return faker.date.past();
  },
  remarks(){
    return faker.lorem.sentence();
  },
  afterCreate(pointOfSale, server){
    pointOfSale.update({
      supplier: server.create('supplier')
    });
  }
});
