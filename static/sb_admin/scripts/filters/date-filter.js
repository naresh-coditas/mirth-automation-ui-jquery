angular.module('sbAdminApp')
  .filter('localDate', function() {
    return function(input) {
      if (!input) {
        return input;
      }
      
      // Convert the input to a Date object
      var date = new Date(input);
      
      // Check if the date is valid
      if (isNaN(date.getTime())) {
        return input;
      }

      // Options for formatting the date
      var options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      };

      // Format the date to local timezone
      return date.toLocaleString('en-US', options);
    };
  })