class ButtonCount extends HTMLElement {
    constructor (){
        super();

        this.clickCount = 0;
        this.shadow = this.attachShadow({ mode: "open" });
        const button = document.createElement("button");
        button.innerHTML= "Click Count:" + this.clickCount;
        this.shadow.appendChild(button);
        button.addEventListener("click", this.countClicks.bind(this));

    } 
    countClicks() {
        this.clickCount += 1;
        this.shadow.children[0].innerHTML = "Click Count:" + this.clickCount;
    };
}
customElements.define("button-count",ButtonCount);

