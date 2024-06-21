angular.module('sbAdminApp').factory('AuthService', function($http, $q, API_CONFIG) {
    var user = null;

    return {
        isLoggedIn: function() {
            var deferred = $q.defer();
			var config = {
				headers: {
					'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken'), // Set the Authorization header with the JWT token
					'Content-Type': 'application/json',
					'X-MIRTH-SERVER-ID': 1
				}
			};
            $http.get(API_CONFIG.BASE_URL+"/user/user-logged-in", config)
                .then(function(response) {
                    if (response.data == "true") {
                        deferred.resolve(true);
                    } else {
                        deferred.resolve(false);
                    }
                }, function(error) {
                    deferred.resolve(false);
                });

            return deferred.promise;
        },
        getUserStatus: function() {
            return user;
        }
    };
});
