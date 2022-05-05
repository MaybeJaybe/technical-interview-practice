/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  // if (!list1 || !list2) {
  //     return list1 || list2
  // }
  let mergedList = new ListNode();
  let list3 = mergedList;
  
  if (list1.val < list2.val) {
      list3.val = list1.val;
      list1 = list1.next;
  } else {
      list3.val = list2.val;
      list2 = list2.next;
  }
  
  while (list1 && list2) {
      if (list1.val < list2.val) {
          list3.next = list1;
          list1 = list1.next;
      } else {
          list3.next = list2;
          list2 = list2.next;
      }
      list3 = list3.next;
  }
  if (!list1) {
      list3.next = list2;
  }
  if (!list2) {
      list3.next = list1;
  }
  return mergedList;
};