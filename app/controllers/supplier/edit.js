import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveSupplier(){
      this.model.save().then(()=>{
        alert("Sukses UPDATE Supplier");
      }).catch((error)=>{
        alert("Error UPDATE Supplier: ",  error);
      });
      this.transitionToRoute('supplier');
    }
  }
});
