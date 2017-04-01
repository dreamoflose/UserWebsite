import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'user-website/models/test';

import 'user-website/messages/messages-test';

F.attach(QUnit);

QUnit.module('user-website functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('user-website main page shows up', function() {
  F('title').text('user-website', 'Title is set');
});
