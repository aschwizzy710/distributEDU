import angular from 'angular';
import angularMeteor from 'angular-meteor';
import landingPage from '../imports/components/landingPage/landingPage';

angular.module('learn-bitcoin', [
  angularMeteor,
  todosList.name
]);


Router.route('/', function () {
  this.render('landingPage');
});

Router.route('/intro', function () {
  this.render('intro');
});
