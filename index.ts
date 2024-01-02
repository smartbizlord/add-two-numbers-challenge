function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let remainder: number = 0;
    let headNode: ListNode | null = new ListNode();
    let currentNode: ListNode | null = headNode;
    
    while(l1 !== null || l2 !== null || remainder !== 0) {
        const left: number = l1 ? l1.val : 0;
        const right: number = l2 ? l2.val : 0;

        const total: number = left + right + remainder;
        remainder = Math.floor(total / 10);
        const value: number = total % 10;

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

class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }