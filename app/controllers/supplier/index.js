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
    deleteSupplier(id){
      this.store.findRecord('supplier', id, { backgroundReload: false })
      .then(function(supplier) {
        supplier.deleteRecord();
        supplier.get('isDeleted'); // => true
        supplier.save(); // => DELETE to /supplier/:id
        alert('Supplier berhasil dihapus');
      })
      .catch(function(error) {
        alert(error);
      });
    }
  }
});
