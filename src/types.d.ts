import { XButtonElement } from "./custom-element/x-button/x-button";
import { XGridElement } from "./custom-element/x-grid/x-grid";

declare global {
    interface HTMLElementTagNameMap {
        "x-button": XButtonElement;
        "x-grid": XGridElement;
    }
}
