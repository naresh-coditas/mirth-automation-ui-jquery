angular.module('sbAdminApp')
  .filter('percentage', function() {
    return function(input) {
      if (input == null || input === '') {
        return input;
      }
      return input + '%';
    };
  });