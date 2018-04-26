//if ('serviceWorker' in navigator) {
//  window.addEventListener('load', function() {
//    navigator.serviceWorker.register('/sw.js', {scope: './'}).then(function(registration) {
//      // Registration was successful
//      }console.log('ServiceWorker registration successful with scope: ', registration.scope);
//    }, function(err) {
//      // registration failed :(
//      console.log('ServiceWorker registration failed: ', err);
//    });
//  });

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./../static/js/sw.js', {scope: './'})
        .then(function(registration) {
      // Registration was successful
      console.log("Registration successful")
      }).catch(function(error){
        console.log(error)
      });
    }