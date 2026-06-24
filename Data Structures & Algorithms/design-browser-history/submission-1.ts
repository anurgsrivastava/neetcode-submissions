class BrowserPage {
    url: string;
    prev: BrowserPage | null;;
    next: BrowserPage | null;;

    constructor(url: string, prev = null, next = null) {
        this.url = url;
        this.prev = prev;
        this.next = next;
    }
}

class BrowserHistory {
    homePage: BrowserPage | null;;
    currentPage: BrowserPage | null;;
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.homePage = new BrowserPage(homepage);
        this.currentPage = this.homePage;
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        let urlPage = new BrowserPage(url);
        urlPage.prev = this.currentPage;
        this.currentPage.next = urlPage;
        this.currentPage = urlPage;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        for (let i = 0; i < steps; i++) {
            if(!this.currentPage.prev) {
                return this.currentPage.url;
            }
            this.currentPage = this.currentPage.prev;
        }
        return this.currentPage.url;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        for (let i = 0; i < steps; i++) {
            if(this.currentPage.next === null) {
                return this.currentPage.url;
            }
            this.currentPage = this.currentPage.next;
        }
        return this.currentPage.url;
    }
}
