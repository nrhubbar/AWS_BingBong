angular.module('ionicApp', ['ionic'])

.controller('MyCtrl', function($scope, $ionicPopup, $http) {

  var url = 'http://52.11.192.16:3000/contacts';

  $scope.contacts = $http.get(url);
  $scope.contacts[0] = ({firstname:"test", lastname:"testTest", number:"123"});

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

            var req = {
              method : 'POST',
              url:'http://52.11.192.16:3000/contacts',
              body: {
                firstname: myForm.firstname.value,
                lastname: myForm.lastname.value,
                number: myForm.number.value
              }
            };
            $http(req);
          }
        }]
      })
      .then(function($scope){
        $scope.contacts = $http.get(url);
      });
    }
});
