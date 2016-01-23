angular.module('ionicApp', ['ionic'])

.controller('MyCtrl', function($scope, $ionicPopup) {

 $scope.contacts =[{firstName:"Nick",lastName:"Hubbard",location:"Indy"}];//$http.get(publicDns + '/api/v1/contacts');

  $scope.createContact = function() {
    var newContact = {};
    console.log("Hey");

    var myPopup = $ionicPopup.show({
      template : '<form name="myForm"><input type="text" placeholder="First Name" ng-model="newContact.firstName" name="firstName"> <br> <input type="text" placeholder="Last Name" ng-model="newContact.lastName" name="lastName"> <br> <input type="text" placeholder="Location" ng-model="newContact.location" name="location"></form>',
      title : 'New Contact',
      scope : $scope,
      buttons : [
        {text : 'Cancel'},
        {
            text : 'Save',
            type : 'button-positive',
            onTap : function(e){
              //$http.post(publicDns + '/api/v1/contacts', newContact);
              console.log(myForm.firstName.value);
              $scope.contacts.push({firstName:myForm.firstName.value,lastName:myForm.lastName.value, location:myForm.location.value});
            }
        }
      ]
    })
    /*.then(function($scope){
      //$scope.contacts = $http.get(publicDns + '/api/v1/contacts');
    });
    */

  }
});
