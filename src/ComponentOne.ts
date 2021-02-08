import { customElement, LitElement } from "lit-element";

@customElement("one-component")
export class ComponentOne extends LitElement {
    firstUpdated() {
        console.log("In FF, this.children == 3, in Chrome it == 0 - Why?")
        console.log("Children length " + this.children.length);
        console.log(this.children);
        console.log("Now in FF when we expand we have 4 children - Why?")
    }
}