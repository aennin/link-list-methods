export class Node {
    constructor(value = null) {
        this.value = value;
        this.nextNode = null;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Add a new node to the end of the list
    append(value) {
        const newNode = new Node(value)

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }

        this.size++;
        return this;
    }

    // Add a new node to the beginning of the list
    prepend(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }

        this.size++
        return this;
    }

    // Get the total number of nodes 
    getSize() {
        return this.size;
    }

    // Get first node
    getHead() {
        return this.head;
    }

    // Get the last node
    getTail() {
        return this.tail;
    }

    // Get node at specific index
    at(index) {
        if(index < 0 || index >= this.size) return null;

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.nextNode;
        }

        return current;
    }

    // Remove the last node
    pop() {
        if (!this.head) return null;

        let current = this.head;
        let previous = null;

        while (current.nextNode) {
            previous = current;
            current = current.nextNode;
        }
        if(previous) {
            previous.nextNode = null;
            this.tail = previous;
        } else {
            this.head = null;
            this.tail = null;
        }

        this.size--;
        return current;
    }

    // Check if value exists in a list
    contains(value) {
        let current = this.head;

        while (current) {
            if (current.value === value) return true;
            current = current.nextNode;
        }

        return false;
    }

    // Find index of value
    find(value) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.value === value) return index;
            current = current.nextNode;
            index++;
        }

        return null;
    }

    // Convert list to string representation
    toString() {
        let result = '';
        let current = this.head;

        while (current) {
            result += `( ${current.value} ) ->`;
            current = current.nextNode;
        }

        result += 'null';
        return result;
    }

    // Insert at specific index
    insertAt(value, index) {
        if (index < 0 || index > this.size) return false;

        if (index === 0) {
            this.prepend(value);
            return true;
        }

        if (index === this.size) {
            this.append(value);
            return true;
        }

        const newNode = new Node(value);
        let current = this.head;
        let previous = null;

        for (let i = 0; i < index; i++) {
            previous = current;
            current = current.nextNode;
        }

        previous.nextNode = newNode;
        newNode.nextNode = current;
        this.size++

        return true;
    }

    // Remove at specific index
    removeAt(index) {
        if (index < 0 || index >= this.size) return null;

        if (index === 0) {
            const removed = this.head;
            this.head = this.head.nextNode;
            if (!this.head) this.tail = null;
            this.size--;
            return removed;
        }

        let current = this.head;
        let previous = null;

        for (let i = 0; i < index; i++) {
            previous = current;
            current = current.nextNode;
        }

        previous.nextNode = current.nextNode;

        if (index === this.size - 1) {
            this.tail = previous;
        }

        this.size--;
        return current;
    }
}

