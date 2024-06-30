angular.module('sbAdminApp')
  .filter('testRunTypeFormatter', function() {
    return function(input) {
		var result = '';
      switch (input) {
        case 'TEST_CASE':
			result = 'Test Case';
			break;
		case 'TEST_SUITE':
			result = 'Test Suite';
			break;
		case 'CHANNEL':
			result = 'Channel';
			break;	
      }
      return result;
    };
  })
  .filter('statusFormatter', function() {
    return function(input) {
		var result = '';
      switch (input) {
        case 'ERROR':
			result = 'Error';
			break;
		case 'IN_PROGRESS':
			result = 'In progress';
			break;
		case 'PASSED':
			result = 'Passed';
			break;	
		case 'FAILED':
			result = 'Failed';
			break;	
      }
      return result;
    };
  })