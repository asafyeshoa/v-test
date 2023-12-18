import { mount } from "@vue/test-utils";
import Home from "./Home.vue";

// some adjustments needed
describe("Home", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Home);
    });


    it("calculate spread", () => {
        // arrange

        // act

        // ...
        const pnlExpected = 100;
        const spreadExpected = 100;
        const { pnl, spread } = pnlLogic.calculatePnl(100, 100);
    });


    
    
});
