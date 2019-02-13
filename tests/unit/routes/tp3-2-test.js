import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tp3_2', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tp3-2');
    assert.ok(route);
  });
});
