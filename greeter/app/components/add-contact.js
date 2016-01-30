import Ember from 'ember';

export default Ember.Component.extend({
    actions:{
      addContact(){ 
        var firstName = this.get("firstName");
        var lastName = this.get("lastName");
        var phone = this.get("phone");
        var location = this.get("location");
        alert(firstName + lastName + phone + location)
      }
    }
});
