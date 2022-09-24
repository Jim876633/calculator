import view from "./view.js";
import * as model from "./model.js";

const controlClickValue = (e) => {
    if (e.target.dataset.number) {
        model.addNumber(e.target.dataset.number);
    }
    if (e.target.dataset.operator) {
        model.addOperator(e.target.dataset.operator);
    }
    view.render(model.state.renderCal, model.state.number);
};

const controlKeydown = (e) => {
    const value = e.key;
    if (+value || value === "." || +value === 0) {
        view.buttonActive(value, "number", e.type);
        if (e.type === "keyup") return;
        model.addNumber(value);
    }
    if (value === "+" || value === "-" || value === "*" || value === "/") {
        view.buttonActive(value, "operator", e.type);
        if (e.type === "keyup") return;
        model.addOperator(value);
    }
    if (value === "Enter") {
        view.buttonActive("=", "operator", e.type);
        if (e.type === "keyup") return;
        model.addOperator("=");
    }
    if (value === "Backspace") {
        view.buttonActive("delete", "operator", e.type);
        if (e.type === "keyup") return;
        model.addOperator("delete");
    }
    if (value === "Delete") {
        view.buttonActive("clear", "operator", e.type);
        if (e.type === "keyup") return;
        model.addOperator("clear");
    }
    view.render(model.state.renderCal, model.state.number);
};

const init = function () {
    view.addClickHandler(controlClickValue);
    view.addKeyDownHandler(controlKeydown);
    view.addKeyUpHandler(controlKeydown);
};

init();
