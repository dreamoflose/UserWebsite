import QUnit from 'steal-qunit';
import { ViewModel } from './messages';

// ViewModel unit tests
QUnit.module('user-website/messages');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the chat-messages component');
});
