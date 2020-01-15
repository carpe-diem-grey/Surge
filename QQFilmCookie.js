var hasCookie = $persistentStore.read('chavy_cookie_videoqq');	
var cookieVal = $request.headers['Cookie'];	
if(cookieVal) {	
   if(!hasCookie||(hasCookie!==cookieVal)) {	
      var setCookie = $persistentStore.write('chavy_cookie_videoqq', cookieVal);	
         if(setCookie) {	
           $notification.post('Result:', 'QQFilm', 'Success')	
         }	
    }	
}	
$done();
