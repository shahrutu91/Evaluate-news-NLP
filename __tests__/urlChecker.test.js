import { checkForUrl } from "../src/client/js/urlChecker";

describe("Check URL", () => {
    const demoURL = "https://www.nytimes.com/section/us"; 
    test("Valid URL", () => {
        expect(checkForUrl(demoURL)).toBeTruthy();
    });
});