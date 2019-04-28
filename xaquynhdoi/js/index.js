angular.
module('demo', ['ng', 'ngMaterial', 'mdCollectionPagination']).
controller('DemoController', class DemoController {
  constructor() {
    /* Generate 1000 random names. */
    this.users = new Array(1000).fill(null).map(() => chance.name());
    this.filteredUsers = this.users;
    this.searchString = '';
  }

  search() {
    let nameRegexp = new RegExp(this.searchString, 'i');
    this.filteredUsers = this.users.filter(user => user.match(nameRegexp));
  }});