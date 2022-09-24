export const state = {
    number: "",
    preOperator: null,
    result: 0,
    renderCal: "",
};

const clearNumber = () => {
    state.number = "";
    state.preOperator = null;
    state.result = 0;
    state.renderCal = "";
};

const deleteNumber = () => {
    if (state.number.length !== 0) {
        state.number = state.number.slice(0, -1);
        state.renderCal = state.renderCal.slice(0, -1);
    }
};

const calculate = () => {
    if (!state.preOperator) {
        state.result = +state.number;
    } else {
        switch (state.preOperator) {
            case "+":
                state.result += parseFloat(state.number);

                break;
            case "-":
                state.result -= parseFloat(state.number);

                break;
            case "*":
                state.result *= parseFloat(state.number);

                break;
            case "/":
                state.result /= parseFloat(state.number);
                break;
        }
    }
};

export const addNumber = (number) => {
    if (state.preOperator === "=") {
        clearNumber();
    }
    if ((number === "." && state.number.includes(".")) || number === "00")
        return;
    if (
        state.number.slice(0, 1) === "0" &&
        number !== "." &&
        !state.number.includes(".")
    ) {
        state.number = state.number.slice(1);
        state.renderCal = state.renderCal.slice(0, -1);
    }
    state.number += number;
    state.renderCal += number;
};

export const addOperator = (operator) => {
    if (state.preOperator === "=") {
        clearNumber();
    }
    const setOperator = () => {
        state.preOperator = operator;
        state.renderCal += operator;
    };
    switch (operator) {
        case "clear":
            clearNumber();
            break;
        case "delete":
            deleteNumber();
            break;
        case "=":
            if (state.number.length === 0) {
                state.renderCal = state.renderCal.slice(0, -1);
            } else {
                calculate();
            }
            setOperator();
            state.number = state.result;
            break;
        default:
            if (state.number.length === 0) {
                state.renderCal = state.renderCal.slice(0, -1);
                setOperator();
            } else {
                calculate();
                setOperator();
                state.number = "";
            }
    }
};
