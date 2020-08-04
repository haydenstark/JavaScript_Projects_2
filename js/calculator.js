const Calculator = {                //creates object to keep track of values
    Display_Value: '0',             //displays 0 on screen
    First_Operand: null,            //holds first operand for any expressions, set to null for now
    Wait_Second_Operand: false,     //this checks whether or not the second operand has been input
    operator: null,                 //this will hold the operator, we set it to null for now
};

function Input_Digit(digit) {                                           //modifies values each time button is clicked
    const { Display_Value, Wait_Second_Operand } = Calculator;          
    if (Wait_Second_Operand === true) {                                 //checking to see if Wait_Second_Operand is true and set Display_Value to the key that was clicked
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {                                                            //this overwrites Display_Value if the current value is 0 otherwise it adds onto it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

function Input_Decimal(dot) {                               //handles decimal points
    if (Calculator.Wait_Second_Operand === true) return;    //ensure that accidental clicking of the decimal point doesnt cause bugs in the operation
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;                    //this is saying if the Display_Value does not contain a decimal point we want to add a decimal point
    }
}

function Handle_Operator(Next_Operator) {                   //handles operators
    const { First_Operand, Display_Value, operator } = Calculator       //when an operator key is pressed, we convert the current number displayed on the screen to a number and then store the result in Calculator.First_Operand if it doesn't already exist
    const Value_of_Input = parseFloat(Display_Value);       //checks if an opertor already exists and if Wait_Second_Operand is true, then updates the operator and exits from the function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {                                  //checks if an operator already exists
        const Value_Now = First_Operand || 0;               //if operator exists, property lookup is performed for the operator in the Perform_Calculation object and the function that matches the operator is executed
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);      //this adds a fixed amount of numbers after the decimal
        result = Number(result).toFixed(9)                  //this will remove any trailing 0's
        result = (result * 1).toString()
        Calculator.Display_Value = (result);
        Calculator.First_Operand = result;
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

function Update_Display () {                //updates screen with contents of Dispaly_Value
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();                                               //monitors button clicks
    const keys = document.querySelector('.calculator-keys');
    keys.addEventListener('click', (event) => {                 //target variable is an object that represents the element that was clicked
        const { target } = event;                               //if the element that was clicked on is not a button, exit the function
        if (!target.matches('button')) {
            return;
        }
        if (target.classList.contains('operator')) {
            Handle_Operator(target.value);
            Update_Display();
            return;
        }
        if (target.classList.contains('decimal')) {
            Input_Decimal(target.value);
            Update_Display();
            return;
        }
        if (target.classList.contains('all-clear')) {           //ensures AC clears the numbers from the calculator
            Calculator_Reset();
            Update_Display();
            return;
        }
        Input_Digit(target.value);
        Update_Display();
    })