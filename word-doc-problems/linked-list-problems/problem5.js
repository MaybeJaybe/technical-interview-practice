// https://leetcode.com/problems/palindrome-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let sequence = '';
  let reverse = '';
  while (head) {
      sequence += head.val;
      reverse = head.val + reverse;
      head = head.next;
  };
  return sequence === reverse;
};