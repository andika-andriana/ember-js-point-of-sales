import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveData(){
      this.model.save().then(()=>{
        alert("Sukses UPDATE Product");
      }).catch((error)=>{
        alert("Error UPDATE Product: ",  error);
      });
      this.transitionToRoute('product');
    }
  }
});
