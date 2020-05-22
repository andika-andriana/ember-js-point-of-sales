import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | supplier/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:supplier/index');
    assert.ok(route);
  });
});
