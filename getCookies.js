var hasCookie = $persistentStore.read('chavy_cookie_acfun');	
var hasToken = $persistentStore.read('chavy_token_acfun');	
var cookieVal = $request.headers['Cookie'];	
var tokenVal = $request.headers['access_token'];	
if(cookieVal&&tokenVal) {	
   if(!hasCookie||!hasToken||(hasCookie!==cookieVal||hasToken!==tokenVal)) {	
      var setCookie = $persistentStore.write('chavy_cookie_acfun', cookieVal);	
      var setToken = $persistentStore.write('chavy_token_acfun', tokenVal);	
         if(setCookie&&setToken) {	
           $notification.post('Result:', 'AcFun', 'Success')	
         }	
    }	
}	
$done();
