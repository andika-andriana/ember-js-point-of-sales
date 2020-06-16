export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */

  // namespace
  this.namespace = '/api';

  // hardcode products-data
  /*
    let products = [
      {
        type:"products",
        id:"1",
        attributes:{
          name: "Siemens",
          description: "Handphone Polyponic",
          "purchase-price": 1500000,
          "sell-price": 1700000,
          "is-polyponic": true
        }
      },{
        type:"products",  
        id:"2",
        attributes:{
          name: "Nokia",
          description: "Handphone Tahan Banting",
          "purchase-price": 1000000,
          "sell-price": 1200000,
          "is-polyponic": false
        }
      },{
        type:"products",  
        id:"3",
        attributes:{
          name: "Sony Ericsson",
          description: "Handphone Lipat",
          "purchase-price": 1000000,
          "sell-price": 1100000,
          "is-polyponic": false
        }
      }
    ];

    this.get('/products', function(){
      return {data: products};
    });

    this.get('/products/:id', function(request){
      return { data: products.find((p)=>request.param.id == p.id)};
    });
  */

  // hardcode suppliers-data
  /*
    let suppliers = [
      {
        type:"suppliers",
        id:"1",
        attributes:{
          name: "Andi Jaya",
          address: "Jl. Mangga Dua"
        }
      },{
        type:"suppliers",
        id:"2",
        attributes:{
          name: "Dika Sukses",
          address: "Jl. Pasar Senin"
        }
      },{
        type:"suppliers",
        id:"3",
        attributes:{
          name: "Andika Maju Jaya",
          address: "Jl. Kelapa Gading"
        }
      }
    ];

    this.get('/suppliers', function(){
      return {data: suppliers};
    });

    this.get('/suppliers/:id', function(request){
      return { data: suppliers.find((p)=>request.param.id == p.id)};
    });
  */

  // static-API product-data
  this.get('/products', 'product');
  this.post('/products', 'product');
  this.put('/products/:id', 'product');
  this.patch('/products/:id', 'product');
  this.del('/products/:id', 'product');

  // static-API supplier-data
  this.get('/suppliers', 'supplier');
  this.post('/suppliers', 'supplier');
  this.put('/suppliers/:id', 'supplier');
  this.patch('/suppliers/:id', 'supplier');
  this.del('/suppliers/:id', 'supplier');
}
