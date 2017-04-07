import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './landingPage.html';

class TodosListCtrl {
  constructor() {
    this.tasks = [{
      text: 'This is task 1'
    }, {
      text: 'This is task 2'
    }, {
      text: 'This is task 3'
    }];
  }
}

export default angular.module('learn-bitcoin', [
  angularMeteor
])
  .component('landingPage', {
    templateUrl: 'imports/components/landingPage/landingPage.html',
    controller: TodosListCtrl
  });
