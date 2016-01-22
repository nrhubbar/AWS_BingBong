// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

  });
})

.controller('contact-list', function($scope, $ionicPopup){
  $scope.contacts = $http.get(publicDns + '/api/v1/contacts');

  $scope.createContact = function(){
    var newContact = {};

    $ionicPopup.show({
      template : '<form><input type="text" placeholder="Name" ng-model="newContact.name"> <br> <input type="text" placeholder="Phone Number" ng-model="newContact.phoneNumber"> <br> <input type="text" placeholder="Location" ng-model="newContact.location"></form>',
      title : 'New Contact',
      scope : $scope,
      buttons : [
        {text : 'Cancel'},
        {
            text : 'Save',
            type : 'button-positive',
            onTap : function(e){
              $http.post(publicDns + '/api/v1/contacts', newContact);
            }
        }
      ]
    })
    .then(function($scope){
      $scope.contacts = $http.get(publicDns + '/api/v1/contacts');
    });

  }
})
