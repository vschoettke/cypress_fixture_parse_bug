describe("cypress should load json fixture with unicode specifier correctly", () => {
    it("should decode correctly", () => {
        cy.server();
        cy.fixture("test_error.json", "utf-8").then((data) => {
            const realData = require("../fixtures/test_error.json");
            expect(data.name).to.equal(realData.name);
        });
    });
});
