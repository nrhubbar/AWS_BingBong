import Ember from 'ember';

export default Ember.Component.extend({
  users : [],
  actions: {
    addUser: function () {
      var userName = this.get('newName');
      this.get('users').pushObject(userName);
    },
    saveUsers : function(){
      this.sendAction('action', this.get('bears'));
    }
  }
});
