//TRY/CATCH


hello.toUpperCase(); //doesn't exist, will cause error.

try { //code that may generate an error
    hello.toUpperCase();
} catch { //will run if there is an error.
    console.log('ERROR!')
}



//example

function yell(message) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log(e);
        console.log("Please ensure you enter a string.");
    }
}