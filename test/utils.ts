import * as electron from "electron";
import { Application } from "spectron";

export class TestUtils {
    public app: Application;

    public setUp() {
        // start application
        this.app = new Application({
            // path to electron app
            args: ["./dist/main.js"],
            path: "" + electron,
            startTimeout: 30000,
            waitTimeout: 30000,
        });
        return this.app.start();
    }

    public tearDown() {
        // close browser
        if (this.app && this.app.isRunning()) {
            return this.app.stop()
        }
    }
}