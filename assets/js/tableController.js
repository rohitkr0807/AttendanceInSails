let app = angular.module('ngclickApp',[]);

let myDate = new Date() ;
let date = myDate.getFullYear() + "/" + (myDate.getMonth()+1) + "/" + myDate.getDate();
let hours = myDate.getHours();
let ampm = hours >= 12 ? 'PM' : 'AM' ;
//hours = hours % 12;
//hours = hours ? hours : 12;

let minutes = myDate.getMinutes();
//minutes = minutes < 10 ? '0' + minutes : minutes;

let myTime = hours + ":" + minutes + ":" + myDate.getSeconds() + " " + ampm;

app.controller('ngclickCtrl' , function ($scope,$http)
{
  $scope.checkIn = function(){
    let varReqBody = {
      checkIn : myTime,
      checkOut : myTime,
      userId : 101,
      date : date,
    };

      var req = {
        method: 'POST',
        url: '/timeinput',
        headers: {
          'Content-Type': undefined
        },
        data: varReqBody
      };

      $http(req).then(function(response){
        console.log("response: ", response.data)
         $scope.res = response.data;
        });

      };

      // $scope.getDBdata = function() {
      //     $http({
      //       method : 'GET',
      //       url : '/timeinput',
      //       data : 'parameters'
      //     }).then(function success(response){
      //           console.log(response.data)
      //
      //     });
      // };


      // $scope.IsDisabled = true;
      // $scope.EnableDisable = function(){
      //      $scope.IsDisabled = $scope.currentDate == new Date();
      // }

    $scope.checkOut = function(){
      let varReqBody = {
        checkOut : myTime,
        userId : 101,
        date : date,
      };

        var req = {
          method: 'PUT',
          url: '/timeinput',
          headers: {
            'Content-Type': undefined
          },
          data: varReqBody
        };

        $http(req).then(function(response){
          //console.log("response: ", response.data)
          $scope.res=response.data;
        });
      }
});
