class _Node {
    //Next serves as pointer to to next node
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    //head indicates beginning of the list. null represents that list is empty
    constructor() {
        this.head = null;
    }
    //insertion: can be at beginning of list (insertFirst), end of list (insertLast), or anywhere in between (insert, insertAt)
    //insert @ beginning of list: create new node item, point head to new node; O(1) because inserting 1 node
    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }
    /*insert @ end of list has 5 steps; O(n) because iterating through entire list
    1. create new node 
    2. check if list empty (yes = insert as only item)
    3. start @ beginning & move to end of list
    4. set end node's next pointer to new node
    5. new node's next pointer is null*/
    insertLast(item) {
        //step 2
        if(this.head === null) {
            this.insertFirst(item)
        } else {
            //step 3
            let tempNode = this.head;
            while (tempNode.next !==null) {
                tempNode = tempNode.next
            }
            //step 1 & 4 & 5
            tempNode.next = new _Node(item, null);
        }
    }
    //Retrieval: compare value store in node with value of search. Move through the entire list
    find(item) {
        //start at the head
        let currNode = this.head;
        //If list is empty
        if(!this.head) {
            return null
        }
        //Check for item
        while (currNode.value !== item) {
            //Return null if end of list & item not found
            if(currNode.next === null) {
                return null;
            } else {
                //otherwise, keep looking
                currNode = currNode.next;
            }
        }
        return currNode;
    }
    //Removal: 3 cases to consider. Deleting from beginning (O(1)), end or middle (O(n))
    remove(item) {
        //If the list is empty
        if(!this.head) {
            return null
        }
        //if the node to be removed is the head, make next node head
        if(this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        //Start at the head
        let currNode =  this.head;
        //keep track of previous
        let previousNode = this.head;
        while((currNode !== null) && (currNode.value !== item)) {
            //save previous node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if(currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}