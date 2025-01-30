

The Cache is Global, and lives under the require.cache
console.log(requiire.cache);

node uses the require built-in module, and it's cache object
to inplement our commonjs module functionality

you can't edit a require module e.g if you try to reasign
rwquest.send to another function tha logs say
request.send = function(){
    console.log('custom send function');
}

if you run this in the request.js it returns the custom function
but if you run it in https.js it return the original function that is
in our require cache