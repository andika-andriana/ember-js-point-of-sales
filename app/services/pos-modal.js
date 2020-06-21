import Service from '@ember/service';
import {inject as service} from '@ember/service';

export default Service.extend({
  pointOfSale: service(),
  store: service(),

  currentModel: null,
  oldModel:null,

  isShowModal:false, 

  init(){
    this._super(...arguments);
  },

  hide(){
    this.set('isShowModal', false);
  },

  show(model){
    if(model == undefined)model = null;
    this.set('currentModel', model);
    this.set('isShowModal', true);
  },

  editData(newData){
    if(newData == undefined)newData = null;
    this.set('currentModel', newData);

    let attributes = this.get('currentModel');
    attributes = attributes.toJSON();
    let newObj = new Object();
    Object.getOwnPropertyNames(attributes).forEach(key=>{
      newObj[key] = attributes[key];
    });

    let oldData = this.store.createRecord('point-of-sales-detail', newObj);
    this.set('oldModel', oldData);
    this.set('isShowModal', true);
  },

  addNewData(){
    return this.store.createRecord('point-of-sales-detail');
  },

  addRow(data){
    this.pointOfSale.addRow(data, 'pointOfSalesDetail');
  },

  removeData(data){
    this.pointOfSale.removeRow(data, 'pointOfSalesDetail');
  }
});
