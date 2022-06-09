import { ItemList } from "./model.js";
import { ViewList } from "./view.js";

export class Controller {
    constructor() {
        this.itemList = new ItemList();
        this.viewList = new ViewList(this.itemList);
        document.querySelector('#addButton').addEventListener('click', ()=>this.add() );
    }

    add() {
        const appDiv = document.querySelector('#app');
        console.log( this.viewList.addFormHtml())
        appDiv.innerHTML = this.viewList.addFormHtml();
        document.querySelector('#applyAdding').addEventListener('click', ()=>this.submitAdd() );
    }

    submitAdd() {
        const inputValue = document.querySelector('#addInput').value;
        this.itemList.add(inputValue);
        this.showItems();
    }

    showItems() {
        const appDiv = document.querySelector('#app');
        appDiv.innerHTML = this.viewList.toHtml();
    }
}