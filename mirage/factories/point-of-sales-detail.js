import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  product(){
    return faker.lorem.word();
  },
  qty(){
    return faker.finance.amount();
  },
  price(){
    return faker.finance.amount() * 100;
  }
});
