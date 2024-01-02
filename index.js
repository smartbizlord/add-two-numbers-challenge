function addTwoNumbers(l1, l2) {
    let remainder = 0;
    let headNode = new ListNode();
    let currentNode = headNode;
    
    while(l1 !== null || l2 !== null || remainder !== 0) {
        const left = l1 ? l1.val : 0;
        const right = l2 ? l2.val : 0;

        const total = left + right + remainder;
        remainder = Math.floor(total / 10);
        const value = total % 10;

        currentNode.next = new ListNode(value);
        currentNode = currentNode.next;

        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }

    return headNode.next
};

class ListNoder {
     constructor(val?, next?) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }