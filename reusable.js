
const Transformer = require("node-html-transformers")

/**
 * Create and register a reusable web component.
 *
 * @param {string} componentName - The name for the custom element.
 * @param {object} options - Object containing HTML file details {htmlFilePath, encoding, content}.
 * @param {string} options.htmlFilePath - The path to the HTML file.
 * @param {string} options.encoding - The encoding of the HTML file.
 * @param {string} options.content - The content of the HTML file.
 * @param {boolean} [isShadow=false] - Indicates whether to use shadow DOM.
 * @param {boolean} [isBody=true] - Indicates whether to append to the document body.
 * @returns {class} - The created reusable class.
 */
const reuse = (
  componentName,
  { htmlFilePath, encoding, content },
  isShadow = false,
  isBody = true
) => {
  /**
   * Reusable web component class.
   *
   * @class
   * @extends HTMLElement
   */
  class Reusable extends HTMLElement {
    /**
     * Constructor for the Reusable class.
     */
    constructor() {
      super();
      const componentTemplate = document.createElement("template");
      componentTemplate.innerHTML = htmlString;
      const shadowRoot = this.attachShadow({ mode: "open" });

      if (isShadow) {
        isBody = false;
        shadowRoot.appendChild(componentTemplate.content);
      } else if (isBody) {
        isShadow = false;
        document.body.appendChild(componentTemplate.content);
      }
    }

    /**
     * Callback triggered when the element is inserted into the DOM.
     */
    connectedCallback() {
      // Additional setup or logic on connectedCallback if needed.
    }
  }

  // Creating HTML string based on provided HTML file details
  const htmlString = new Transformer(htmlFilePath, encoding, content).toString();

  // Registering the custom element
  customElements.define(componentName, Reusable);

  // Returning the created class for potential reuse
  return Reusable;
};

// Exporting the reuse function as the default export
module.exports = reuse
