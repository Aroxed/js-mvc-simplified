export class ViewItem {
    constructor(item) {
        this.item = item;
    }

    toHtml() {
        return `<p id=${this.item.id}>${this.item.title}</p>`;
    }
}

export class ViewList {
    constructor(itemList) {
        this.itemList = itemList;
    }

    toHtml() {
        let result = "";
        for (let item of this.itemList.items) {
            const viewItem = new ViewItem(item);
            result = result + viewItem.toHtml();
        }
        return result;
    }

    addFormHtml() {
        return "<label for='addInput'/><input id='addInput'/><button id='applyAdding'>Submit</button>";
    }

}