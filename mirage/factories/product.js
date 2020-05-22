import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i){
    return `Barang ke-${i}`
  },
  description(i){
    return `Keterangan Barang ke-${i}`
  },
  sellPrice(){
    let min = 500000;
    let max = 1500000;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  purchasePrice(){
    let min = 500000;
    let max = 1500000;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  isPolyponic(){
    return true;
  }
});
