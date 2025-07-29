/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
}
describe('Table Row Insertion', () => {
    it('should insert a new row with correct cell values', () => {
        cy.visit('your_base_url'); // Replace with your actual base URL

        // Click the button to insert a new row
        cy.get('input[type="button"]').click();

        // Optional: Wait for a short period to ensure the DOM updates
        cy.wait(100); // This line is optional, only use if necessary

        // Assert that the first cell of the new row has the correct text
        cy.get('#sampleTable tr:first-child td:first-child')
          .should('have.text', 'New Cell1');

        // Assert that the second cell of the new row has the correct text
        cy.get('#sampleTable tr:first-child td:last-child')
          .should('have.text', 'New Cell2');
    });
});
