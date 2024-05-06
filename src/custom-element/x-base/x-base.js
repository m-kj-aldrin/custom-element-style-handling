import { fetchStyleSheet } from "../../utils/dom.js";

let baseStyleSheet = await fetchStyleSheet(
    "/src/custom-element/x-base/x-base.css"
);

const baseTemplate = document.createElement("template");
baseTemplate.innerHTML = `

`;

export class BaseElement extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });

        this.shadowRoot.adoptedStyleSheets = [baseStyleSheet];

        this.shadowRoot.append(baseTemplate.content.cloneNode(true));
    }

    connectedCallback() {}
    disconnectedCallback() {}
}
