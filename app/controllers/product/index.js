import Controller from '@ember/controller';

export default Controller.extend({
  queryParams : ['page', 'perPage', 'sort', {
    filter:{
      type: 'array'
    }
  }],
  page:1,
  perPage:5,
  
  actions : {
    deleteProduct(id){
      this.store.findRecord('product', id, { backgroundReload: false })
      .then(function(product) {
        product.deleteRecord();
        product.get('isDeleted'); // => true
        product.save(); // => DELETE to /product/:id
        alert('Product berhasil dihapus');
      })
      .catch(function(error) {
        alert(error);
      });
    }
  },
});
