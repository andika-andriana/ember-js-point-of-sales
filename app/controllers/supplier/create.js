import Controller from '@ember/controller';

export default Controller.extend({
  init(){
    this._super(...arguments);
    this.model = this.store.createRecord('supplier');
  },
  actions: {
    saveSupplier(){
      this.model.save().then(()=>{
        alert("Sukses CREATE Supplier");
      }).catch((error)=>{
        alert("Error CREATE Supplier: ",  error);
      });
      this.transitionToRoute('supplier');
    }
  }
});
