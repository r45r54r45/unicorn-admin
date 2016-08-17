angular.module('app', [])
    .controller('mainCtrl', function($scope) {
        $scope.test="dd";


    })
    .controller('noticeCtrl',function($scope,$http){
        $scope.target=['tad','hass'];
        $scope.sendData={};
        $scope.targetArray=[];
        $scope.targetSelect=function(target){
            if($scope.targetArray.indexOf(target)==-1){
                $scope.targetArray.push(target);
            }else{
                $scope.targetArray.splice($scope.targetArray.indexOf(target),1);
            }
            $scope.sendData.target=$scope.targetArray.toString();
        }
        $scope.targetSelectAll=function(){
            $scope.sendData.target=$scope.target.toString();
        }
        $scope.uploadStatus=true;
        $scope.upload=function(){
            // https://yicstuco.appspot.com
            $scope.uploadStatus=false;
            $http.post("https://yicstuco.appspot.com/admin/notice",$scope.sendData).success(function(data){
                $scope.uploadStatus=true;
                $scope.resultAlert="총 "+data.data.recipients+" 명에게 푸시가 갔습니다.";
                $scope.sendData={};
            });
        }

    });