import { fetchStyleSheet } from "../../utils/dom.js";
import { BaseElement } from "../x-base/x-base.js";

const xButtonStyle = await fetchStyleSheet(
    "/src/custom-element/x-button/x-button.css"
);

const xButtonTemplate = document.createElement("template");
xButtonTemplate.innerHTML = `
cool
`;

export class XButtonElement extends BaseElement {
    constructor() {
        super();

        this.shadowRoot.adoptedStyleSheets.push(xButtonStyle)

        console.log(this.shadowRoot.adoptedStyleSheets);

        this.shadowRoot.append(xButtonTemplate.content.cloneNode(true));
    }

    connectedCallback() {}
    disconnectedCallback() {}
}
