// https://leetcode.com/problems/intersection-of-two-linked-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if(headA === null || headB === null) {
      return null;
  }
  let list1 = headA;
  let list2 = headB;

  if (list1 === null) {
    list1 = headB;
  }
  if (list2 === null) {
    list2 = headA;
  }
  
  while(list1 !== list2) {
      list1 = list1.next;
      list2 = list2.next;
      if (list1 === list2) {
          return list1;
      }
  }
  return list1;
};