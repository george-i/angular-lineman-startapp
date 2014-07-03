angular.module('app').config ($stateProvider) ->
  $stateProvider.state 'home',
    url: '/'
    templateUrl: 'home.html'


  $stateProvider.state 'about',
    url: '/meet-the-project'
    templateUrl: 'meet-the-project.html'

  $stateProvider.state 'join',
    url: '/get-involved'
    templateUrl: 'join.html'

  $stateProvider.state 'story',
    url: '/the-modern-alchemist'
    templateUrl: 'story.html'

  $stateProvider.state 'news',
    url: '/news'
    templateUrl: 'news.html'

  $stateProvider.state 'contact',
    url: '/contact'
    templateUrl: 'contact.html'

