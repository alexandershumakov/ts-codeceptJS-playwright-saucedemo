
import * as CodeceptJS from "codeceptjs";
const {I} = inject()

export default class Page {

    private readonly url: string;

    constructor(url) {
        this.url = url;
    }

    waitForOpened() : void {
        I.waitInUrl(this.url);
    }

}

