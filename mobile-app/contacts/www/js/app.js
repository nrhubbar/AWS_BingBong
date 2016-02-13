angular.module('ionicApp', ['ionic'])

.controller('MyCtrl', function($scope, $ionicPopup, $http) {

  var apiUrl = 'http://52.36.110.206:3001/contacts';

  $http.get(apiUrl).then(function(res){
    $scope.contacts = res.data;
    console.dir(res);
  });

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
              url:'http://52.36.110.206:3001/contacts',
              data : {
                firstname: myForm.firstname.value,
                lastname: myForm.lastname.value,
                number: myForm.number.value
               }
               headers: {
                 'Content-Type': 'application/x-www-form-urlencoded'
               }
             };
             $http(req);
          }
        }]
      })
      .then(function($scope){
        $http.get(apiUrl).then(function(res){
          $scope.contacts = res.data;
          console.dir(res);
        });
      });
    }
});
