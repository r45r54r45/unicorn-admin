angular.module('app', [])
    .controller('mainCtrl', function($scope) {
        $scope.test="dd";


    })
    .controller('noticeCtrl',function($scope,$http){
        $scope.target=['TAD','HASS',"UD","ASD","ISSD","ISED","Undecided HASS","Undecided UD"];
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
        $scope.clear=function(){
            $scope.sendData.target="";
        }
        $scope.uploadImage=function(){
            var form = $('form')[0];
            var formData = new FormData(form);
            $.ajax({
                url: '/notice/image',
                processData: false,
                contentType: false,
                data: formData,
                type: 'POST',
                success: function(result){
                    $scope.$apply(function(){
                        $scope.sendData.image=result.image;
                    });
                    alert('업로드 완료');
                },
                error: function(err){
                    console.log(err);
                }
            });
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

    })
    .controller('noticeReadCtrl',function($http, $scope){
        $http.get('https://yicstuco.appspot.com/admin/notice').success(function(data){
            $scope.list=data;
        });
        $scope.delete=function(id){
            alert('삭제는 아직..');
        };
    })