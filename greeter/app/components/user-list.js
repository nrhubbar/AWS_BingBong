import Ember from 'ember';

export default Ember.Component.extend({
  users : ['nick','test','test2'],
  actions: {
    addUser: function () {
      var userName = this.get('newName');
      this.get('users').pushObject(userName);
    }
  }
});
