

const {I} = inject()

export default class Page {

    private readonly url: string;

    constructor(url) {
        this.url = url;
    }

    open() : void {
        I.amOnPage(this.url);
    }

    waitForOpened() : void {
        I.waitInUrl(this.url);
    }

}

