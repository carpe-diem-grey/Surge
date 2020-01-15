//var hasCookie = $persistentStore.read('chavy_cookie_acfun');	
//var hasToken = $persistentStore.read('chavy_token_acfun');	
var cookieVal = $request.headers['Cookie'];	
var tokenVal = $request.headers['access_token'];	
console.log(cookieVal+'---'+tokenVal);
