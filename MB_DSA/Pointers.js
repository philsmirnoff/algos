Leetcode 680. Valid Palindrome II

// Path: MB_DSA/Recursion.js

var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    while(left < right){
        if(s[left] !== s[right]){
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
        }
        left++;
        right--;
    }
    return true;
}

function isPalindrome(s, left, right){
    while(left < right){
        if(s[left] !== s[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

time: O(n)
space: O(1)


Follow Up Two Pointer Problems: These are the leetcode problem numbers
821
125
26
345
349 (not a typical two pointer problem but a good one to do)
680
234 (only if you’re familiar with linked lists)
15 (challenging but really common in interviews)
5 (pretty tough) (edited)
