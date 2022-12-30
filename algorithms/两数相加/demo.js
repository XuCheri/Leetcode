/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var first = [3,4,2];
var second = [4,6,5];

var l1 = new ListNode();
var l2 = new ListNode();

var head = new ListNode();
var head2 = new ListNode(0,l2);

l1.val = first[0];
l2.val = second[0];

var i =0;
while(first[i]!=undefined) {
    i++;
    const number = first[i];
    var a = new ListNode(number, head.next);
    head.next = a;
}

var j = 0;
while(second[j]!=undefined){
    j++;
    const number = second[j];
    var b = new ListNode(number, head2.next);
    head2.next = b;
}

var a = head.next;
// while(a.next!=null){
//     a  = a.next;
//     console.log(a.val);
// }

var b = head2.next;
// while(b.next!=null){
//     b = b.next;
//     console.log(b.val);
// }

var addTwoNumbers = function(l1, l2) {
    var sum1, sum2;
    while(l1.next != null){
        var a = 1;
        sum1 = sum1 + (l1.val * a);
        a *= 10;
    }
    console.log(sum1);
};
addTwoNumbers(head.next, l2);