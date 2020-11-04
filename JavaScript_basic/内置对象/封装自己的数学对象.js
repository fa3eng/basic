
let math = {

    PI: 3.1415926,

    max: function () {
        
        let max = -Infinity;

        if (arguments.length <= 0) {
            return max;
        }

        max = arguments[0];

        for (let i = 1; i < arguments.length; i++){

            if (arguments[i] > max) {
                max = arguments[i];  
            } 
                
        }

        return max;

    },

    min: function () {

        let min = arguments[0];

        for (let i = 1; i < arguments.length; i++){

            if (arguments[i] < min) {
                min = arguments[i];  
            } 
                
        }

        return min;        
    },

}



console.log(math.PI);
console.log(math.max(1, 2, 3, 21, 33, 1, 3));
console.log(math.min(1, 2, 3, 21, 33, 1, 3, 0));
console.log(math.max());
