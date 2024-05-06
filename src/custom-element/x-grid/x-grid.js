import { fetchStyleSheet } from "../../utils/dom.js";
import { BaseElement } from "../x-base/x-base.js";

const xGridStyleSheet = await fetchStyleSheet(
    "/src/custom-element/x-grid/x-grid.css"
);

const xGridTemplate = document.createElement("template");
xGridTemplate.innerHTML = `
<slot></slot>
`;

export class XGridElement extends BaseElement {
    constructor() {
        super();

        this.shadowRoot.adoptedStyleSheets.push(xGridStyleSheet);

        this.shadowRoot.append(xGridTemplate.content.cloneNode(true));
    }

    connectedCallback() {}
    disconnectedCallback() {}
}
