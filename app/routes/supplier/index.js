import Route from '@ember/routing/route';

export default Route.extend({
  queryParams:{
    page:{
      refreshModel:true
    }, 
    size:{
      refreshModel:true
    },
    filter:{
      refreshModel:true
    },
    sort:{
      refreshModel:true
    },
  },
  model(params){
    
    return this.store.query('supplier', {
      page:{
        number: params.page,
        size: params.perPage,
      },
      filter: params.filter,
      sort: params.sort
    });

    // return this.store.findAll('supplier');
  }
});

