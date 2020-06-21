import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
  posModal: service(),
  pointOfSale: service(),
  store: service(),

  suppliers:  Array(),

  init(){
    this._super(...arguments);
    let suppliers = this.store.findAll('supplier');
    this.set('suppliers', suppliers);
  },

  actions:{
    onChangeCombo(propertyName, item){
      this.set(propertyName, item);
    },
    addRowData(modal_type){
      if(modal_type == 'point-of-sales-detail'){
        let data = this.store.createRecord('point-of-sales-detail');
        this.posModal.show(data);
      }
    },
    editRowData(modal_type, data){
      if(modal_type == 'point-of-sales-detail'){
        this.posModal.editData(data);
      }
    },
    deleteRowData(modal_type, data){
      if(modal_type == 'point-of-sales-detail'){
        this.posModal.removeData(data);
      }
    },
    savePOS(){
      let posDetail = this.pointOfSale.model.get('pointOfSalesDetail');
      let deletedDetail = this.pointOfSale.removedRows;
      this.get('model').save().then((response)=>{
        
        posDetail.forEach(item => {
          item.save();
        });
        
        deletedDetail.forEach(item => {
          if(item.isDeleted !== true){
            item.deleteRecord();
            item.save();
          }
        });
        alert('Hore, Berhasil menyimpan');
        this.transitionToRoute('point-of-sale.detail', response.id);
      }).catch((error)=>{
        console.log("error", error);
        alert('Ups, Gagal menyimpan');
      });
    }
  }
});
