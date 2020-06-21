import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | point-of-sale/index', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:point-of-sale/index');
    assert.ok(controller);
  });
});
