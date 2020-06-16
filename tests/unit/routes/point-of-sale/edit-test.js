import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | point-of-sale/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:point-of-sale/edit');
    assert.ok(route);
  });
});
