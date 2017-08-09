angular.module('myApp',[]).controller('student',function($scope){
  $scope.students = [];

  $scope.levels=[
    {text:'Bottom Half of Minimal' ,val:1},
    {text:'Top Half of Minimal' ,val:1.5},
    {text:'Bottom Half of Basic' ,val:2},
    {text:'Top Half of Basic' ,val:2.5},
    {text:'Bottom of Pass' ,val:3},
    {text:'Top Half of Pass' ,val:3.5},
    {text:'Proficient' ,val:4},
    {text:'Advanced' ,val:5},
  ];

  $scope.$watch(function(){return $scope.yearOne;},function(newVal){
    if($scope.yearOne !== undefined && $scope.yearOne !== null && $scope.yearTwo !== undefined && $scope.yearTwo !== null ){
      console.log('test');
      console.log(calculateGrowth(Number(newVal),Number($scope.yearTwo)));
      $scope.calculatedGrowth = calculateGrowth(Number(newVal),Number($scope.yearTwo));

    }
  });

  $scope.$watch(function(){return $scope.yearTwo;},function(newVal){
    if($scope.yearOne !== undefined && $scope.yearOne !== null && $scope.yearTwo !== undefined && $scope.yearTwo !== null ){
      console.log('test');
      console.log(calculateGrowth(Number($scope.yearOne),Number(newVal)));

    $scope.calculatedGrowth = calculateGrowth(Number($scope.yearOne),Number(newVal));
    }
  });

  function calculateGrowth(firstYear, secondYear){
    var growth = 0;
    console.log('firstYear',firstYear);
    console.log('secondYear',secondYear);
    if(firstYear == 1){
      if(secondYear==1){
        growth=0;
      }else if(secondYear>=1.5 && secondYear<=2.5){
        growth=1;
      }else if(secondYear>=3&&secondYear<=4){
        growth=1.2
      }else if(secondYear==5){
        growth=1.25
      }
    }else if(firstYear == 1.5){
      if(secondYear<2){
        growth=0;
      }else if(secondYear>=2 && secondYear<=2.5){
        growth=1;
      }else if(secondYear>=3&&secondYear<=4){
        growth=1.2
      }else if(secondYear==5){
        growth=1.25
      }
    }else if(firstYear == 2){
      if(secondYear<2.5){
        growth=0;
      }else if(secondYear>=2.5 && secondYear<=3.5){
        growth=1;
      }else if(secondYear==4){
        growth=1.2
      }else if(secondYear==5){
        growth=1.25
      }
    }else if(firstYear == 2.5){
      if(secondYear<3){
        growth=0;
      }else if(secondYear>=3 && secondYear<=3.5){
        growth=1;
      }else if(secondYear==4){
        growth=1.2
      }else if(secondYear==5){
        growth=1.25
      }
    }else if(firstYear == 3){
      if(secondYear<3.5){
        growth=0;
      }else if(secondYear>=3.5 && secondYear<=4){
        growth=1;
      }else if(secondYear==5){
        growth=1.25
      }
    }else if(firstYear == 3.5){
      if(secondYear<4){
        growth=0;
      }else if(secondYear==4){
        growth=1;
      }else if(secondYear==5){
        growth=1.25
      }
    }else if(firstYear == 4){
      if(secondYear<4){
        growth=0;
      }else if(secondYear==4){
        growth=1;
      }else if(secondYear==5){
        growth=1.25
      }
    }else if(firstYear == 5){
      if(secondYear<5){
        growth=0;
      }else{
        growth=1;
      }
    }
    return growth;
  }

});
