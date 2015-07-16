// var nodemailer = require('nodemailer');
var app = angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
var time;




app.controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<5; i++) {
    $scope.addSlide();
  }
});


app.controller('DatepickerDemoCtrl', function ($scope,$log) 
{
    $scope.items = getStates();
    $scope.firstName='';
    $scope.lastName='';
    $scope.emailAddress='';
    $scope.address='';
    $scope.suiteApt='';
    $scope.city='';
    $scope.state='';
    $scope.zipCode='';
    $scope.pickUpTime=time;
  
    

  $scope.today = function() {

     $scope.dt = new Date();

  };
  //$scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate =  new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 2);
  $scope.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i=0;i<$scope.events.length;i++){
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);
           settingPickUpdate = $scope.pickUpDate;
        if (dayToCheck === currentDay) {
          settingPickUpdate = $scope.pickUpDate;
          return $scope.events[i].status;
        }
      }
    }

    return '';  
  };


   $scope.submitPickUp = function(firstName,lastName, emailAddress,address,suiteApt,city,state,zipCode,form)
   {
      var hours =  (time.getHours() - 12) == 0 ? 12 : time.getHours()-12;
      var mintues = time.getMinutes().toString().length == 1? "0"+time.getMinutes():time.getMinutes();
      timeToPickup = hours +":" +  mintues + " PM";
      settingPickUpdate = formatDate(settingPickUpdate);
      var email ={
          "loc": form,
          "firstName": firstName,
          "lastName": lastName,
          "emailAddress": emailAddress,
          "address": address,
          "suiteApt": suiteApt,
          "city": city,
          "state": state,
          "zipCode": zipCode,
          "pickUpDate": settingPickUpdate,
          "pickUpTime": timeToPickup
            }
      
      setPickUpDateValues(firstName,lastName,emailAddress,address,suiteApt,city, state,zipCode,settingPickUpdate,timeToPickup,email);

    }
});
app.controller('TimepickerDemoCtrl', function ($scope, $log) {
  $scope.mytime = new Date();

  $scope.hstep = 1;
  $scope.mstep = 15;

  $scope.options = {
    hstep: [1],
    mstep: [5]
  };

  $scope.ismeridian = true;
  $scope.toggleMode = function() {
    $scope.ismeridian = ! $scope.ismeridian;
  };

  $scope.update = function() {
    var d = new Date();
    d.setHours( 14 );
    d.setMinutes( 0 );
    $scope.mytime = d;
  };

  $scope.changed = function () {
    $log.log('Time changed to: ' + $scope.mytime);
    time = $scope.mytime

 };

  $scope.clear = function() {
    $scope.mytime = null;
  };
});