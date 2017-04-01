import fixture from 'can-fixture';
import Message from '../message';

const store = fixture.store([{
  id: 0,
  description: 'First item'
}, {
  id: 1,
  description: 'Second item'
}], Message.connection.algebra);

fixture('http://chat.donejs.com/api/messages/{id}', store);

export default store;
