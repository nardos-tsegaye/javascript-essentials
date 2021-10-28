var counter = (function() {

    //private stuff
    let count = 0;

    function print(message) {
        console.log(message + '---' + count);
    }
    //returning object
    return {

        get : function() { return count; },

        set : function(value) { count = value; },

        value : count,
        increment : function () {
            count += 1;
            print('After increment');
        },
        reset : function () {
            print('Before reset');
            count = 0;
            print('After reset');
        }
    }
})()

counter.increment();
counter.increment();
counter.increment();

console.log(counter.get());

counter.reset();