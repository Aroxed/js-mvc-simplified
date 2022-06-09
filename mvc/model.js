export class Item {
    constructor(title) {
        this.title = title;
        this.id = Math.random().toString();
    }
} 

export class ItemList {
    constructor() {
        this.items = [];
    }

    add(title) {
        const item = new Item(title);
        this.items.push(item);
    }
} 