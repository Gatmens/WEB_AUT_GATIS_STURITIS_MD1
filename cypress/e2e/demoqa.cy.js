import { SelectablePage } from "../pageObjects/selectablePage";

describe("DemoQA", () => {
    it('Click and validate buttons', () => {
        SelectablePage.visit();
        SelectablePage.gridTabBtn.click();
        SelectablePage.findBtnByText("Two").click();
        SelectablePage.findBtnByText("Four").click();
        SelectablePage.findBtnByText("Six").click();
        SelectablePage.findBtnByText("Eight").click();
        SelectablePage.findBtnByText("Two").should("have.class", "active");
        SelectablePage.findBtnByText("Four").should("have.class", "active");
        SelectablePage.findBtnByText("Six").should("have.class", "active");
        SelectablePage.findBtnByText("Eight").should("have.class", "active");
        SelectablePage.findBtnByText("One").should("not.have.class", "active");
        SelectablePage.findBtnByText("Three").should("not.have.class", "active");
        SelectablePage.findBtnByText("Five").should("not.have.class", "active");
        SelectablePage.findBtnByText("Seven").should("not.have.class", "active");
        SelectablePage.findBtnByText("Nine").should("not.have.class", "active");
      });
    })