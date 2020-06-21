export default function(server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);
  server.createList('product', 10);
  server.createList('supplier', 10);
  server.createList('pointOfSale', 5).forEach(pointOfSale => {
    server.createList('pointOfSalesDetail', 3, {pointOfSale})
  });
}
