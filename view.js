class View {
    #buttonsElement = document.querySelectorAll(".button");
    #calElement = document.querySelector(".cal");
    #resultElement = document.querySelector(".result");

    buttonActive(value, type, event) {
        this.#buttonsElement.forEach((button) => {
            if (button.dataset[type] === value) {
                if (event === "keydown") {
                    button.classList.toggle("active");
                } else {
                    button.classList.remove("active");
                }
            }
        });
    }

    addClickHandler(handler) {
        this.#buttonsElement.forEach((button) => {
            button.addEventListener("click", handler);
        });
    }

    addKeyDownHandler(handler) {
        window.addEventListener("keydown", handler);
    }

    addKeyUpHandler(handler) {
        window.addEventListener("keyup", handler);
    }

    render(cal, result) {
        this.#calElement.textContent = cal;
        this.#resultElement.textContent = result;
    }

    renderInit() {
        this.#calElement.textContent = "";
        this.#resultElement.textContent = "";
    }
}

export default new View();
