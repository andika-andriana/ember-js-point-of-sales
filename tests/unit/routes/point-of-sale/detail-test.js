import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | point-of-sale/detail', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:point-of-sale/detail');
    assert.ok(route);
  });
});
