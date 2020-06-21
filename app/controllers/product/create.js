import Controller from '@ember/controller';

export default Controller.extend({
  init(){
    this._super(...arguments);
    this.model = this.store.createRecord('product');
  },
  actions: {
    saveProduct(){
      this.model.save().then(()=>{
        alert("Sukses CREATE Product");
      }).catch((error)=>{
        alert("Error CREATE Product: ",  error);
      });
      this.transitionToRoute('product');
    }
  }
});
