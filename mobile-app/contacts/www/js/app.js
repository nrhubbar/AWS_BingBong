angular.module('ionicApp', ['ionic'])

.controller('MyCtrl', function($scope, $ionicPopup) {

  $scope.contacts = $http.get('52.11.192.16/contacts');
  $scope.contacts.push({firstName:"test", lastName:"testTest", number:"123"});

  $scope.createContact = function() {
    var newContact = {};
    console.log("Hey");

    var myPopup = $ionicPopup.show({
        template: '<form name="myForm"><input type="text" placeholder="First Name" ng-model="newContact.firstname" name="firstname"> <br> <input type="text" placeholder="Last Name" ng-model="newContact.lastname" name="lastname"> <br> <input type="text" placeholder="Number" ng-model="newContact.number" name="number"></form>',
        title: 'New Contact',
        scope: $scope,
        buttons: [{
          text: 'Cancel'
        }, {
          text: 'Save',
          type: 'button-positive',
          onTap: function(e) {
            console.log(myForm.firstname.value);

            var contact = {
              firstname: myForm.firstname.value,
              lastname: myForm.lastname.value,
              number: myForm.number.value
            });
            $http.post('52.11.192.16/contacts', contact);
          }
        }]
      })
      .then(function($scope){
        $scope.contacts = $http.get('52.11.192.16/contacts');
      });
    }
});
