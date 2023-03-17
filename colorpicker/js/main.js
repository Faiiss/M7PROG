class ColorCard {
    id;
    color;
    addToList;
    htmlElement;
    circle;
    text;

    constructor(newId, newColor, addToList) {
        /* setting properties */
        this.id = newId;
        this.color = newColor;
        this.addToList = addToList;

        /* create the HTML element to render */
        this.htmlElement = document.createElement("li");
        this.htmlElement.classList = "colors__color";

        this.circle = document.createElement("figure");
        this.circle.classList = "colors__circle";
        this.circle.style.background = this.color;

        this.text = document.createElement("p");
        this.text.innerText = "Copied";
        this.text.classList = "colors__text";

        /* handle click events on the element */
        this.htmlElement.onclick = this.onHTMLElementClicked;

        /* finally render the element */
        this.render();
    }

    onHTMLElementClicked = () => {
        /* add a selected class to the circle and copy the color to the clipboard */
        this.circle.classList.add("colors__circle--selected")
        document.title = this.color;
        window.navigator.clipboard.writeText(this.color);
    }

    render() {
        /* append the element to the list and add the circle and text to the element */
        this.addToList.appendChild(this.htmlElement);
        this.htmlElement.appendChild(this.circle);
        this.htmlElement.appendChild(this.text);
    }
}


class ColorList {
    id;
    htmlElement;

    constructor(newId) {
        this.id = newId;
        this.htmlElement = document.createElement("ul");
        this.htmlElement.id = this.id;
        this.htmlElement.classList.add("colors");

        /* finally render the element */
        this.render();
    }

    render() {
        /* append the list to the body of the HTML document */
        document.querySelector("body").appendChild(this.htmlElement);
    }
}

class HSLGenerator {
    randomHue;
    randomSaturation;
    randomLightness;
    hsl;

    constructor() {
        /* generate a new HSL color */
        this.generateHSL();
    }

    generateHue = function () {
        /* generate a random hue value between 1 and 360 */
        this.randomHue = Math.floor(Math.random() * (360 - 1) + 1);
    }

    generateSaturation = function () {
        /* generate a random saturation value between 11% and 79% */
        this.randomSaturation = Math.floor(Math.random() * (79 - 11) + 11) + "%";
    }

    generateLightness = function () {
        /* generate a random lightness value between 11% and 100% */
        this.randomLightness = Math.floor(Math.random() * (100 - 11) + 11) + "%";
    }

    generateHSL = function () {
        /* generate new values for hue, saturation, and lightness, and create an HSL string */
        this.generateHue();
        this.generateSaturation();
        this.generateLightness();
        this.hsl = `hsl(${this.randomHue}, ${this.randomSaturation}, ${this.randomLightness})`
    }

}

class App {
    id;
    colorList;
    HSLGenerator;

    constructor(newId) {
        this.id = newId;
        /* create a new color list and HSL generator */
        this.colorList = new ColorList(this.id);
        this.hslGenerator = new HSLGenerator();
        /* generate 100 new color cards */
        this.generateColorCards();
    }

    // Define a method for generating color cards for the app.
    generateColorCards = function () {
        // Loop 100 times to generate 100 cards
        for (let i = 1; i <= 100; i++) {
            // Generate a new HSL value for the card
            this.hslGenerator.generateHSL();
            // Create a new color card with the current HSL value and add it to the color list
            new ColorCard(i, this.hslGenerator.hsl, document.getElementById(this.colorList.id));
        }
    }
}

// Create three instances of the App class with different IDs
const app = new App("js-app");
const app2 = new App("js-app--2");
const app3 = new App("js-app--3");