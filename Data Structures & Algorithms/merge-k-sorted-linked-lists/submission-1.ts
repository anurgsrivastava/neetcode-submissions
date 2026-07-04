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
        while(lists.length > 1) {
            let result = [];
            for (let i = 0; i < lists.length; i += 2) {
                let l1 = lists[i];
                let l2 = i + 1 < lists.length ? lists[i + 1] : null;
                result.push(this.mergeTwoList(l1, l2));
            }
            lists = result;
        }
        return lists.length ? lists[0] : null;
    }
}
