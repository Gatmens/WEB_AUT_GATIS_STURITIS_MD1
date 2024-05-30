import { basePage } from "../pageObjects/base.page.js";

export class SelectablePage extends basePage {
    static get url() {
        return "/selectable";
    }

    static get gridButton() {
        return cy.get("#demo-tab-grid");
    }

    static findButtonByText(text) {
        return cy.get("#gridContainer").contains(text);
    }
}