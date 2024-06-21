'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
  .module('sbAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'ui.tree','ngSanitize','toaster','ngAnimate'
  ])
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
    
    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

    $urlRouterProvider.otherwise('/dashboard/home');

    $stateProvider
    .state('login',{
        templateUrl:'static/views/pages/login.html',
        controller:'LoginController',
        url:'/login',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
				'static/sb_admin/scripts/controllers/LoginController.js',
              ]
            })
          }
        }
    })
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'static/views/dashboard/dashboard-header.html',
        controller : 'DashboardHeaderController',
        resolve: {
			 loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
				'static/sb_admin/scripts/controllers/DashboardHeaderController.js'
              ]
            })
          },
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'sbAdminApp',
                    files:[
                    ]
                }),
                $ocLazyLoad.load(
                {
                   name:'toggle-switch',
                   files:["static/sb_admin/bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                          "static/sb_admin/bower_components/angular-toggle-switch/angular-toggle-switch.css"
                      ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngAnimate',
                  files:['static/sb_admin/bower_components/angular-animate/angular-animate.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['static/sb_admin/bower_components/angular-cookies/angular-cookies.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngResource',
                  files:['static/sb_admin/bower_components/angular-resource/angular-resource.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngSanitize',
                  files:['static/sb_admin/bower_components/angular-sanitize/angular-sanitize.js']
                })
            }
        }
    })
      .state('dashboard.home',{
        url:'/home',
        controller: 'DashboardController',
        templateUrl:'static/views/dashboard/dashboard.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
				'static/sb_admin/scripts/controllers/DashboardController.js',
              'static/sb_admin/js/chart.js',
              'static/sb_admin/js/app_chart.js'
              ]
            })
          }
        }
      })
      .state('dashboard.channel',{
        templateUrl:'static/views/pages/channel-list.html',
        controller:'ChannelController',
        url:'/channel',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
				'static/sb_admin/scripts/controllers/ChannelController.js',
              ]
            })
          }
        }
    })
      .state('dashboard.test-case-list',{
        templateUrl:'static/views/pages/test-case-list.html',
        controller:'TestCaseListController',
        url:'/test-case-list',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
				'static/sb_admin/scripts/controllers/TestCaseListController.js',
              ]
            })
          }
        }
    })
    .state('dashboard.test-case-entry',{
        templateUrl:'static/views/pages/test-case-entry.html',
        controller:'TestCaseEntryController',
        url:'/test-case-entry/:channelId/:testCaseId',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
				'static/sb_admin/scripts/controllers/TestCaseEntryController.js',
              ]
            })
          }
        }
    })
    .state('dashboard.test-case-edit-entry',{
        templateUrl:'static/views/pages/test-case-entry.html',
        controller:'TestCaseEntryController',
        url:'/test-case-edit-entry/:channelId/:testCaseId',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
				'static/sb_admin/scripts/controllers/TestCaseEntryController.js',
              ]
            })
          }
        }
    })
    .state('dashboard.test-case-step-list',{
        templateUrl:'static/views/pages/test-case-step-list.html',
        controller:'TestCaseStepListController',
        url:'/test-case-step-list/:testCaseId',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
				'static/sb_admin/scripts/controllers/TestCaseStepListController.js',
              ]
            })
          }
        }
    })
    .state('dashboard.test-case-step-entry',{
        templateUrl:'static/views/pages/test-case-step-entry.html',
        controller:'TestCaseStepEntryController',
        url:'/test-case-step-entry/:testCaseId',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
				'static/sb_admin/scripts/controllers/TestCaseStepEntryController.js',
              ]
            })
          }
        }
    })
    .state('dashboard.action-setup',{
        templateUrl:'static/views/pages/action-setup.html',
        controller:'ActionSetupController',
        url:'/action-setup/:actionId',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
				'static/sb_admin/scripts/controllers/ActionSetupController.js',
              ]
            })
          }
        }
    })
    .state('dashboard.action-list',{
        templateUrl:'static/views/pages/action-list.html',
        controller:'ActionListController',
        url:'/action-list',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
				'static/sb_admin/scripts/controllers/ActionListController.js',
              ]
            })
          }
        }
    })
      .state('dashboard.chart',{
        templateUrl:'static/views/chart.html',
        url:'/chart',
        controller:'ChartCtrl',
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'chart.js',
              files:[
                'static/sb_admin/bower_components/angular-chart.js/dist/angular-chart.min.js',
                'static/sb_admin/bower_components/angular-chart.js/dist/angular-chart.css'
              ]
            }),
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:['static/sb_admin/scripts/controllers/chartContoller.js']
            })
          }
        }
    })
      .state('dashboard.test-cases',{
        templateUrl:'static/views/test-cases.html',
        url:'/test-cases',
        controller:'TestCaseController',
        resolve: {
            loadMyFile:function($ocLazyLoad) {
              return $ocLazyLoad.load({
            	name:'sbAdminApp',
                files:[
                  'static/sb_admin/scripts/services/CommonUtilityService.js',
                ]
              }),
              $ocLazyLoad.load({
            	name:'sbAdminApp',
                files:[
                  'static/sb_admin/scripts/controllers/TestCaseController.js',
                ]
              });
            }
          }
    })
     .state('dashboard.test-run',{
          templateUrl:'static/views/test-run.html',
          url:'/test-run',
          controller:'TestCaseRunController',
          resolve: {
              loadMyFile:function($ocLazyLoad) {
                return $ocLazyLoad.load({
              	name:'sbAdminApp',
                  files:[
                    'static/sb_admin/scripts/services/CommonUtilityService.js',
                  ]
                }),
                $ocLazyLoad.load({
              	name:'sbAdminApp',
                  files:[
                    'static/sb_admin/scripts/controllers/TestCaseRunController.js',
                  ]
                });
              }
            }
      })
       .state('dashboard.test-result',{
          templateUrl:'static/views/test-result.html',
          url:'/test-result',
          controller:'TestResultController',
          resolve: {
              loadMyFile:function($ocLazyLoad) {
                return $ocLazyLoad.load({
              	name:'sbAdminApp',
                  files:[
                    'static/sb_admin/scripts/services/CommonUtilityService.js',
                  ]
                }),
                $ocLazyLoad.load({
              	name:'sbAdminApp',
                  files:[
                    'static/sb_admin/scripts/controllers/TestResultController.js',
                  ]
                });
              }
            }
      })
      .state('dashboard.test-case-result',{
          templateUrl:'static/views/test-case-result.html',
          url:'/test-result/:testRunID',
          controller:'TestCaseResultController',
          resolve: {
              loadMyFile:function($ocLazyLoad) {
                return $ocLazyLoad.load({
              	name:'sbAdminApp',
                  files:[
                    'static/sb_admin/scripts/services/CommonUtilityService.js',
                  ]
                }),
                $ocLazyLoad.load({
              	name:'sbAdminApp',
                  files:[
                    'static/sb_admin/scripts/controllers/TestCaseResultController.js',
                  ]
                });
              }
            }
      })
      .state('dashboard.test-case-steps-result',{
          templateUrl:'static/views/test-case-steps-result.html',
          url:'/test-result/:testRunID/:testcaseRecordID',
          controller:'TestCaseStepResultController',
          resolve: {
              loadMyFile:function($ocLazyLoad) {
                return $ocLazyLoad.load({
              	name:'sbAdminApp',
                  files:[
                    'static/sb_admin/scripts/services/CommonUtilityService.js',
                  ]
                }),
                $ocLazyLoad.load({
              	name:'sbAdminApp',
                  files:[
                    'static/sb_admin/scripts/controllers/TestCaseStepResultController.js',
                  ]
                });
              }
            }
      })
  }]);

    
angular.module('sbAdminApp').run(function($rootScope, $state, AuthService) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        if (true) {
//            AuthService.isLoggedIn().then(function(isLoggedIn) {
//                if (!isLoggedIn) {
//                    event.preventDefault();
//                    $state.go('login');
//                }
//            });
        }
    });
});
