import { Application } from "spectron";

import { TestUtils } from "./utils";

describe("Basic test suite", () => {

    let utils: TestUtils;
    let app: Application;

    beforeEach(async () => {
        // set app instance
        utils = new TestUtils();
        app = await utils.setUp();
    });

    before(async () => {

        // you can use it for preconditions aka login here if needed

    });

    afterEach(async () => {
        // close browser
        await utils.tearDown();
    });

    it("it should add",  async() => {

    });

    it("it should subtract", async () => {

    });

    it("it should multiply", async () => {


    });

    it("it should divide", async () => {


    });

});