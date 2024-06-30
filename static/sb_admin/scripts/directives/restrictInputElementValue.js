angular.module('sbAdminApp').directive('restrictInput', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            // Get the allowed characters from the directive's attribute
            var regex = new RegExp(attrs.restrictInput);
            
            element.on('input', function(event) {
                // Get the current value of the input
                var value = element.val();
                
                // Filter out any characters that do not match the regex
                var newValue = value.replace(regex, '');
                
                if (newValue !== value) {
                    // Update the input's value with the filtered value
                    element.val(newValue);
                }
            });
        }
    };
});