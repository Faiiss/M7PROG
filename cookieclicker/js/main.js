class Cookie {
    name = "";
    htmlElement = undefined;
    factor = 1;
    //Dit wordt 1x uitgevoerd wanneer "new" wordt gebruikt
    constructor(newName, newHTMLElement, newScore) {
        this.name = newName;
        this.htmlElement = newHTMLElement;
        this.htmlElement.onclick = this.onCookieClicked;
        this.score = newScore;
    }

    onCookieClicked = () => {
        this.score.onCookieClicked(this.factor);
    }

    onStyleChange() {
        this.htmlElement.classList.add("cookie--chocolate");
    }

    onStyleChangesecond() {
        this.htmlElement.classList.remove("cookie--chocolate");
        this.htmlElement.classList.add("cookie--velvet");
    }
}

class Score {
    score;
    name = "";
    htmlElement = undefined;

    constructor(newScore, newName, newHTMLElement) {
        this.score = newScore;
        this.name = newName;
        this.htmlElement = newHTMLElement;
        this.htmlElement.innerText = newScore;

        // Load saved score from local storage
        const savedScore = localStorage.getItem("score");
        if (savedScore !== null) {
            this.score = parseInt(savedScore);
            this.htmlElement.innerText = this.score;
        }
    }

    onCookieClicked(factorFromCookie) {
        this.score = this.score + factorFromCookie;
        this.htmlElement.innerText = this.score;

        // Save score to local storage
        this.saveScore();
    }

    subtractScore() {
        this.score = this.score - 100;
        this.htmlElement.innerText = this.score;

        // Save score to local storage
        this.saveScore();
    }

    onAutoScoreClicked() {
        setInterval(() => {
            this.score = this.score + 500;
            this.htmlElement.innerText = this.score;

            // Save score to local storage
            this.saveScore();
        }, 1000);
    }

    addPoints() {
        this.score = this.score + 10000;
        this.htmlElement.innerText = this.score;

        // Save score to local storage
        this.saveScore();
    }

    saveScore() {
        localStorage.setItem("score", this.score);
    }

    loadScore() {
        const savedScore = localStorage.getItem("score");
        if (savedScore !== null) {
            this.score = parseInt(savedScore);
            this.htmlElement.innerText = this.score;
        }
    }
}


class Multiplier {
    factor = 100;
    htmlElement = undefined;
    cookie = undefined;
    bought = false;

    constructor(htmlElement, cookie) {
        this.htmlElement = htmlElement;
        this.cookie = cookie;
        this.htmlElement.onclick = this.onMultiplierClicked;
    }

    onMultiplierClicked = () => {
        if (this.bought === false) {
            this.bought = true;
            //remove 100 points from score
            this.cookie.score.subtractScore();
            this.cookie.factor = this.factor;
        }
    }
}

class AutoScore {
    htmlElement = undefined;
    score = undefined;
    forward = false;

    constructor(htmlElement, score) {
        this.htmlElement = htmlElement;
        this.score = score;

        const alreadyClicked = localStorage.getItem('autoScoreAlreadyClicked');
        if (alreadyClicked) {
            this.startAutoScore();
        } else {
            this.htmlElement.onclick = this.onAutoScoreClicked;
        }
    }

    onAutoScoreClicked = () => {
        this.startAutoScore();
        localStorage.setItem('autoScoreAlreadyClicked', true);
    }

    startAutoScore = () => {
        this.htmlElement.onclick = null; // disable button
        this.forward = true;
        this.score.subtractScore();
        this.score.onAutoScoreClicked();
    }
}



class ChocolateCookie {
    htmlElement = undefined;
    bought = false;
    forward = false;
    cookie = undefined;

    constructor(htmlElement, cookie) {
        this.htmlElement = htmlElement;
        this.cookie = cookie;
        this.htmlElement.onclick = this.onChocolateCookieClicked;
    }

    onChocolateCookieClicked = () => {
        if (this.bought === false) {
            this.bought = true;
            this.cookie.onStyleChange();
            this.cookie.score.addPoints();
        }
    }
}

class VelvetCookie {
    htmlElement = undefined;
    bought = false;
    forward = false;
    cookie = undefined;

    constructor(htmlElement, cookie) {
        this.htmlElement = htmlElement;
        this.cookie = cookie;
        this.htmlElement.onclick = this.onVelvetCookieClicked;
    }

    onVelvetCookieClicked = () => {
        if (this.bought === false) {
            this.bought = true;
            this.cookie.onStyleChangesecond();
            this.cookie.score.addPoints();
        }
    }
}

/*setup for score save
const saveButton = document.getElementById("js--save");
saveButton.addEventListener("click", () => {
    localStorage.setItem("score", score.score);
});
const savedScore = localStorage.getItem("score");
if (savedScore !== null) {
    score.score = parseInt(savedScore);
    score.htmlElement.innerText = savedScore;
}*/


/*setup for score and cookie*/
const score = new Score(0, "Default Score", document.getElementById("js--score"));
score.loadScore(); // Load saved score from local storage
const cookie = new Cookie("Default Cookie", document.getElementById("js--cookie"), score);


/*setup for desktop upgrades*/
const multiply = new Multiplier(document.getElementById("js--multiplier"), cookie);
const auto = new AutoScore(document.getElementById("js--autoScore"), score);
const chocolate = new ChocolateCookie(document.getElementById("js--chocolate"), cookie);
const velvet = new VelvetCookie(document.getElementById("js--velvet"), cookie);

/*setup mobile upgrades*/
const multiplierMobile = new Multiplier(document.getElementById("js--multiply--mobile"), cookie);
const autoMobile = new AutoScore(document.getElementById("js--auto--mobile"), score);
const chocoMobile = new ChocolateCookie(document.getElementById("js--chocolate--mobile"), cookie);
const velvetMobile = new VelvetCookie(document.getElementById("js--velvet--mobile"), cookie);