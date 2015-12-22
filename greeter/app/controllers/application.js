import Ember from 'ember';

export default Ember.Controller.extend({
  users : ['nick','test','test2'],
  actions: {
    addUser: function(){
      let userName = this.get('newName');
      this.get('users').pushObject(userName);
    }
  }
});
