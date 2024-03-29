/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
     let current = head;
     while (current !== null) {
        if(current.visited) return current;
        current.visited = true;
        current = current.next;
    }
    return null;
};