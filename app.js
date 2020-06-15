//budget controller
var budgetController = (function() {

    //function constructor
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };


    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };
    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            // Create new ID
            ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            // Crate ideal based on inc or ex type
            if (type === "exp") {
                newItem = new Expense(ID, des, val);
            } else if (type === "inc") {
                newItem = new Income(ID, des, val);
            }
            //push it into new element
            data.allItems[type].push(newItem);

        }
    };
})();



// UI Controllervar UIController = (function() {

// storing all input strings into a single object
var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
};

return {
    // returns all 3 inputs in the user interface
    getinput: function() {
        return {
            type: document.querySelector(DOMstrings.inputType).value, //will be either income and expense 
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: document.querySelector(DOMstrings.inputValue).value
        };

    },
    getDOMStrings: function() {
        return DOMstrings;
    }
};
})();


//Global app controller 
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeers = function() {
        var DOM = UICtrl.getDOMStrings();

        document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

        document.addEventListener("keypress", function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };



    var ctrlAddItem = function() {
        //1. Get the input data
        var input = UICtrl.getinput();

        //2. Add the item to the budget controller

        //3. Add the new item to the UI

        //4. Calculate the budget

        //5. Display the budget on the UI

    };

    return {
        init: function() {
            console.log("Application has started");
            setupEventListeers();
        }
    };

})(budgetController, UIController);

controller.init();