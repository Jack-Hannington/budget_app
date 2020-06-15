//budget controller
var budgetController = (function() {

    //code

})();

// UI Controllers
var UIController = (function() {
    return {
        // returns all 3 inputs in the user interface
        getinput: function() {
            return {
                type: document.querySelector(".add__type").value, //will be either income and expense 
                description: document.querySelector(".add__description").value,
                value: document.querySelector(".add__value").value
            }
            // the value of add__type is assigned to the type variable
        }
    }
})();


//Global app controller 
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {
        //1. Get the input data
        var input = UICtrl.getinput();
        console.log(input);
        //2. Add the item to the budget controller

        //3. Add the new item to the UI

        //4. Calculate the budget

        //5. Display the budget on the UI

    }

    document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);