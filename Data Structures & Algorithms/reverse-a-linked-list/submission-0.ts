/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        if(!head || !head.next) {
            return head;
        }
        let current = head, prev = null;
        while(current) {
            let stored = current.next;
            current.next = prev;
            prev = current;
            current = stored; 
        }
        return prev;
    }
}
