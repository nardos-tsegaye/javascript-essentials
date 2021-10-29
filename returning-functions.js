function two(){
    return function(){
        console.log('hello');
    }
}
let Two = two();
Two();