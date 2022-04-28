var app = angular.module("myApp", ['ngRoute']);
// phần route
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "home.html",
            controller: "subjectCtrl"
        })
        .when("/login", {
            templateUrl: "views/account/login.html",
            controller: "loginCtrl"

        })
        .when("/resigter", {
            templateUrl: "views/account/resigter.html",
            controller: "resigterCtrl"

        })
        .when("/logout", {
            templateUrl: "home.html",
            controller: "logoutCtrl",
        })
        .when("/scoreManage", {
            templateUrl: "views/scoreManage/scoreManage.html",
            controller: "scoreManageCtrl"
        })
        .when("/result/:id", {
            templateUrl: "views/scoreManage/answerDetail.html",
            controller: "answerDetailCtrl"
        })
        .when("/about", {
            templateUrl: "views/info/about.html",
        })
        .when("/contact", {
            templateUrl: "views/info/contact.html",
        })
        .when("/subjects", {
            templateUrl: "subjects.html",
            controller: "subjectCtrl"
        })
        .when("/quiz/:id/:name", {
            templateUrl: "quiz-app.html",
            controller: "quizsCtrl"
        })
        .when("/catesubject/:id", {
            templateUrl: "subjects.html",
            controller: "subjectsByCateCtrl"
        })


        ;
});

app.controller("subjectsByCateCtrl", function ($scope, $http, $routeParams) {
    $scope.list_subject = [];
    console.log($routeParams.id);
    // nó đọc file subject và đổ vào list_subject
    $http.get('db/subjects.js').then(function (reponse) {

        reponse.data.forEach(element => {
            if (element['IdCate'] == $routeParams.id) {

                $scope.list_subject.push(element);
            }
            //  console.log( $scope.list_subject);
            //  $scope.list_subject =  reponse.data;
        });


    })
});
// danh mục môn học phía siderbar
app.controller("categoriesCtrl", function ($scope, $http) {
    $scope.list_category = [];
    $http.get('db/CategorySubject.js').then(function (response) {
        $scope.list_category = response.data;

    })
});
// check login 

app.controller("AccountCtrl", function ($scope, $rootScope, $http) {
    $scope.checkAccount = function () {
        if (localStorage.getItem('user') == null) {
            return true;
        } else {
            $scope.nameUser = JSON.parse(localStorage.getItem("user"))['fullname'];
            return false;
        }
    }


})



// login
app.controller("loginCtrl", function ($scope, $rootScope, $http) {

    // $scope.list_subject =[] ;
    // // nó đọc file subject và đổ vào list_subject
    // $http.get('db/subjects.js').then(function (reponse) {
    //     $scope.list_subject = reponse.data;
    // })
    $scope.master = {};
    $scope.checkLogin = true;
    $scope.login = function (user) {
        $scope.master = angular.copy(user);
        const login = `http://localhost:3000/listStudent`;

        console.log($scope.master);
        console.log(login);
        if (user != null && user.name != null && user.password != null) {
            fetch(login).then(res => res.json()).then(data => {

                data.forEach(element => {
                    if (element.username == user.name && element.password == user.password) {
                        console.log("DAng nhap thanh cong");
                        console.log(element);
                        localStorage.setItem('user', JSON.stringify(element));
                        localStorage.setItem('login', 0);
                        $rootScope.userData = localStorage.getItem("user");

                        $rootScope.checkLogin = true;

                        window.location.href = "index.html";

                    } else {
                        $scope.messLog = "Đăng nhập thất Bại, Sai mật khẩu hoặc tài khoản!"
                    }

                })
            })
        } else {
            $scope.messLog = "Vui lòng nhập đúng tài khoản và mật khẩu"
        }



    };


});

// logout (Đăng xuất)
app.controller("logoutCtrl", function ($scope, $rootScope, $http) {

    let text = "Bạn có muốn Đăng Xuất";
    if (confirm(text) == true) {
        localStorage.removeItem('user');
        localStorage.removeItem('login');
        console.log($rootScope.checkLogin);
        $rootScope.checkLogin = false;
    } else {
        text = "You canceled!";
    }

})
// Create Account
app.controller("resigterCtrl", function ($scope, $rootScope, $http) {
    $scope.master = {};
    $scope.checkLogin = true;
    $scope.create = function (user) {
      
        const login = `http://localhost:3000/listStudent`;
    
        console.log(login);
        if (user != null && user.name != null && user.password != null) {
            console.log(user);
            // body: JSON.stringify(objmark),
            var dataLogin = {
                "username": user.name,
                "password": user.password,
                "fullname": user.fullname,
                "email": user.email,
                "phone": user.phone
                };
            var req = {
                method: 'POST',
                url: login,
                headers: {
                  'Content-Type': 'application/json' 
                },
                data:dataLogin
               }
               
               $http(req).then(function(){
                   alert("Đăng ký thành công");
                   localStorage.setItem('user', JSON.stringify(dataLogin));
                   localStorage.setItem('login', 0);
                    $rootScope.userData = localStorage.getItem("user");
           
                    $rootScope.checkLogin = true;
           
                    window.location.href = "index.html";
           
               }, function(){
                   alert("Đăng ký thất bại");
                   $rootScope.checkLogin = false;
               });
        //     fetch(login).then(res => res.json()).then(data => {

        //         data.forEach(element => {
        //             if (element.username == user.name && element.password == user.password) {
        //                 console.log("DAng nhap thanh cong");
        //                 console.log(element);
        //                 localStorage.setItem('user', JSON.stringify(element));
        //                 localStorage.setItem('login', 0);
        //                 $rootScope.userData = localStorage.getItem("user");

        //                 $rootScope.checkLogin = true;

        //                 window.location.href = "index.html";

        //             } else {
        //                 $scope.messLog = "Đăng nhập thất Bại, Sai mật khẩu hoặc tài khoản!"
        //             }

        //         })
        //     })
        } else {
            $scope.messLog = "Vui lòng không để trống các trường"
        }



    };


});


// đọc các môn học khác nhau
app.controller("subjectCtrl", function ($scope, $http) {

    $scope.list_subject = [];

    // nó đọc file subject và đổ vào list_subject
    $http.get('db/subjects.js').then(function (reponse) {
        $scope.list_subject = reponse.data;


    })
});

// đọc ra môn học đó
app.controller("quizsCtrl", function ($scope, $rootScope, $http, $routeParams, quizFactory, saveTest) {

    if (localStorage.getItem('user') == null) {
        alert("bạn chưa đăng nhập ");
        window.location.href = 'index.html#!/login';
    } else {
        // nó đọc file subject và đổ vào subject
        return $http.get('db/quizs/' + $routeParams.id + '.js').then(function (reponse) {
            quizFactory.questions = reponse.data;

        })

    }

});

// lưu trữ điểm số từng môn học của riêng user
app.factory('saveTest', function ($rootScope, $http, $routeParams) {
    return {
        saveCoreOfUser: function (score, subjectName, contentAnswer) {
            url = "http://localhost:3000/marks/";
            let dataUser = JSON.parse(localStorage.getItem('user'));

            let objmark = {
                "subjectName": subjectName,
                "user_id": dataUser.id,
                "mark": score,
                "date": new Date().toISOString().slice(0, 10),
                "contentAnswer": contentAnswer
            }
            options = {
                method: "POST",
                body: JSON.stringify(objmark),
                headers: { "Content-Type": 'application/json' }
            }
            fetch(url, options).then(res => res.json()).then(d => {})

        }
    }


})

// phần quiz , đọc ra các phần chi tiết hơn của môn hodjc đó
app.directive('quizfpoly', function (quizFactory, $routeParams, $interval, saveTest) {
    return {
        restrict: 'AE',
        scope: {},
        templateUrl: 'template-quiz.html',
        link: function (scope, elem, attrs) {
            var time;
            scope.start = function () {
                quizFactory.getQuestions().then(function () {
                    scope.subjectName = $routeParams.name;
                    scope.id = 0;
                    scope.quizOver = false;// chưa hoàn thành
                    scope.inProgess = true;
                    scope.arrayDataAnswer = []; // mảng chứa câu hỏi và câu trả lời đúng
                    scope.getQuestion();

                    scope.StartTime(10, 59);

                })

            };


            scope.StartTime = function ($min, $sec) {
                scope.min = $min;
                scope.sec = $sec;

                time = $interval(function () {

                    scope.sec -= 1;
                    if (scope.min == 0 && scope.sec == 0) {
                        alert('Hết Thời Gian');
                        scope.quizOver = true;
                        scope.reset();

                    } else if (scope.sec == 0) {
                        scope.min -= 1;
                        scope.sec = 59;

                    }

                }, 1000);
            }
            scope.cancel = function () {
                $interval.cancel(time);
            };

            scope.reset = function () {
                scope.inProgess = false;
                scope.score = 0;
                scope.cancel();
            }
            scope.getQuestion = function () {
                var quiz = quizFactory.getQuestion(scope.id)
                // console.log(quiz);

                if (quiz) {
                    scope.question = quiz.Text;
                    scope.options = quiz.Answers;
                    //  [
                    //     { "Id": 104118, "Text": "3" },
                    //     { "Id": 104119, "Text": "4" },
                    //     { "Id": 104120, "Text": "1" },
                    //     { "Id": 104121, "Text": "2" }
                    // ];
                    scope.answer = quiz.AnswerId;
                    // biến answerMode có logic là khi chưa nhấn checkAnsser thì không đc next
                    scope.answerMode = true;
                    let DapAn = '';
                    quiz.Answers.forEach(element => {
                        if (element.Id == quiz.AnswerId) {
                            //    console.log(element.Text)
                            DapAn = element.Text;
                        }
                    }
                    );

                    let data = {
                        "Text": quiz.Text,
                        "Answer": DapAn
                    }
                    scope.arrayDataAnswer.push(data); // push câu hỏi và đáp án đúng của từng câu hỏi

                } else {
                    saveTest.saveCoreOfUser(scope.score, $routeParams.name, scope.arrayDataAnswer);
                    scope.quizOver = true; // hết câu hỏi
                     scope.reset();
                }


            }
            scope.checkAnswer = function () {

                //    nếu không được chọn thì nó return null
                if (!$('input[name= answer]:checked').length) { return; }
                var ans = $('input[name= answer]:checked').val();

                if (ans == scope.answer) {
                    // alert("đáp án đúng rồi");
                    scope.score++;
                    scope.correctAns = true;
                } else {
                    // alert("đáp án sai");
                    scope.correctAns = false;
                }
                scope.answerMode = false;

            }
            scope.nextQuestion = function () {
                scope.id++;
                scope.getQuestion();
            }


            scope.reset(); // ở đây gọi mặt định là flase 

        }
    }
})

app.factory('quizFactory', function ($http, $routeParams) {
    // $http.get('db/quizs/'+$routeParams.id+'.js').then(function (res) {

    //     questions = res.data

    // })

    return {
        getQuestions: function () {
            return $http.get('db/quizs/' + $routeParams.id + '.js').then(function (res) {
                questions = res.data
            })
        },
        getQuestion: function (id) {
            var randomItem = questions[Math.floor(Math.random() * questions.length)];
            var count = questions.length;
            //  alert( count); ở đây phải tuỳ biến lại ,không thể code để lấy 10 câu hỏi đầu tiên đc 
            if (count > 10) {
                count = 10;
            }
            if (id < count) {
                return randomItem;
            } else {
                // alert('Đã Hết')
                return false;
            }

        }
    }
})

// ScoreManage
app.controller("scoreManageCtrl", function ($scope, $rootScope, $http) {
    console.log('quản lý bài thi');
   
    let user_id = JSON.parse(localStorage.getItem('user'))['id'];
    $scope.list_test = [];
    $http.get('http://localhost:3000/marks').then(function (reponse) {

        reponse.data.forEach(element => {
            // if (element['IdCate'] == $routeParams.id) 
            // {}
            if (user_id == element.user_id) 
            {
                $scope.list_test.push(element);
            }
        })
    })
    console.log($scope.list_test);
})
//  chi tiết câu hỏi và đáp án đúng => kết quả
app.controller("answerDetailCtrl",function($scope,$http,$routeParams){
    console.log($routeParams.id);
    $scope.list_answer = [];
    $http.get('http://localhost:3000/marks/'+$routeParams.id).then(function (reponse) {

        reponse.data.contentAnswer.forEach(element => {
                 $scope.list_answer.push(element);
        })
    })
    console.log($scope.list_answer);
})
