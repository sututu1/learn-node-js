/*删除链表中的节点
  请编写一个函数，使其可以删除某个链表中给定的（非末尾）
  节点，你将只被给定要求被删除的节点。
  现有一个链表-- head=[4,5,1,9],它可以表示为4->5->1->9
   示例1:
   输入：head = [4,5,1,0],node =5
   输出：[4,1,9]
   解释：给定你链表中值为5的第二个节点，那么在调用了你的函数之后，
   该链表应变为4->1->9.
   示例2:
   输入： head = [4,5,1,9],node = 1
   输出：[4,5,9]
   解释： 给定你链表中值为1的第一个节点，那么在调用了你的函数之后，
   该链表应变为4->5->9.*/
  var deleteNode = function (node) {
    node.val = node.next.val;
    node.next = node.next.next;
  }

  /*反转一个单链表
  示例：
  输入：1->2->3->4->5->Null
  输出：5->4->3->2->1->Null
  进阶：你可以迭代或递归地反转链表，你能否用两种解决这道题？ */
var reverselist = function(head){
    let p1 = head;
    let p2 = null;
    while(p1){
        const tmp = p1.next;
        p1.next = p2;
        p2 = p1;
        p1 = tmp;
    }
    return p2;
};