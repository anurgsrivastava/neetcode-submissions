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

    mergeTwoList(l1: ListNode, l2: ListNode) {
        const dummy = new ListNode(0);
        let tail = dummy;
        while (l1 !== null && l2 !== null) {
            if (l1.val <= l2.val) {
                tail.next = l1;
                l1 = l1.next;
            } else {
                tail.next = l2;
                l2 = l2.next;
            }

            tail = tail.next;
        }

        tail.next = l1 !== null ? l1 : l2;

        return dummy.next;
    }

    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists: ListNode[]): ListNode {
        if(!lists.length) {
            return null;
        }
        let result = null;
        for (const list of lists) {
            result = this.mergeTwoList(result, list);
        }
        return result;
    }
}
