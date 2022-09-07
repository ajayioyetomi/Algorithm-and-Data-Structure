//This file contains solutions to different questions from Hackerrank, LeetCode, Codelity etc.

//genArray is for generating random arrays.
let genArray = (length,min,max) =>{
  let arr = [];
  let i = 0;
  for(i = 0;i<length;i++){
      arr.push(Math.floor(Math.random() * max-min+1)+min)
  }
  return arr;
}

let arr = [1, 2, 3, 4, 5];
let obj = { x: 10, y: 20, z: 30 };

//findArrSum is a method that the two element that sum up to a given target.
const findArrSum = (arr, sum) => {
  let hastable = {};
  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    let difference = sum - currentElement;
    if (typeof hastable[difference] != "undefined") {
      return [difference, hastable[difference]];
    } else {
      hastable[currentElement] = difference;
    }
  }
  return -1;
};

//commonElements return of element that occurs multiple time in a given array
function commonElements(kArray) {
  var hashmap = {},
    last,
    answer = [];

  for (var i = 0, kArrayLength = kArray.length; i < kArrayLength; i++) {
    var currentArray = kArray[i];
    last = null;
    for (
      var j = 0, currentArrayLen = currentArray.length;
      j < currentArrayLen;
      j++
    ) {
      var currentElement = currentArray[j];
      if (last != currentElement) {
        if (!hashmap[currentElement]) {
          hashmap[currentElement] = 1;
        } else {
          hashmap[currentElement]++;
        }
      }
      last = currentElement;
    }
  }

  for (var prop in hashmap) {
    if (hashmap[prop] == kArray.length) {
      answer.push(parseInt(prop));
    }
  }
  return answer;
}

const pascalTriangle = (row, col) => {
  if (col == 0) {
    return 1;
  } else if (row == 0) {
    return 0;
  } else {
    return pascalTriangle(row - 1, col) + pascalTriangle(row - 1, col - 1);
  }
};

//decToBin converters Decimal numbers to Binary
const decToBin = (arg) => {
  var str = "";
  const helper = (arg) => {
    if (arg < 2) {
      str += arg;
      return;
    } else {
      decToBin(Math.floor(arg / 2));
      decToBin(arg % 2);
    }
  };
  helper(arg);
  return str;
};

//checkWork helps to chech if a given word is a palindrum
const checkWord = (word) => {
  if (typeof word == "undefined" || word == "") return false;

  const checkHelper = (word, start, last) => {
    if (start >= last) {
      return true;
    } else {
      if (word.charAt(start) == word.charAt(last)) {
        return checkHelper(word, (start += 1), (last -= 1));
      } else {
        return false;
      }
    }
  };

  return checkHelper(word, 0, word.length - 1);
};

//addUp returns the sum all the numbers between 1 and a given number.
const addUp = (n) => {
  if (n == 1) {
    return 1;
  }
  return n + addUp(n - 1);
};

//sumUpArray returns the addition of all the elements in a given array.
const sumUpArray = (arg) => {
  let add = 0;
  const helper = (n) => {
    if (n == arg.length) {
      return 0;
    } else {
      return arg[n] + helper((n += 1));
    }
  };
  return add + helper(0);
};

//aVeryBigSum returns the sum a of the element in a given large array.
function aVeryBigSum(ar) {
  // Write your code here
  let sum = 0;
  const aVeryBigSumHelper = (n, l) => {
    if (n == l) {
      return ar[n];
    } else if (n + 1 == l) {
      return ar[n] + ar[l];
    } else {
      return ar[n] + ar[l] + aVeryBigSumHelper((n += 1), (l -= 1));
    }
  };
  return (sum += aVeryBigSumHelper(0, ar.length - 1));
}


let nums = [2, 7, 11, 15];
let target = 17;

//twoSum returns the array of indices of elements that sum up to a given target
var twoSum = function (nums, target) {
  let newSet = {};
  let output = [];
  let i;
  for (i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    let cha = nums[i];
    if (typeof newSet[difference] != "undefined") {
      output.push(difference);
      output.push(newSet[difference]);
    } else {
      newSet[cha] = difference;
    }
  }

  if (output.length > 1) {
    for (let j = 0; j < output.length; j++) {
      for (let k = 0; k < nums.length; k++) {
        if (output[j] == nums[k]) {
          nums[k] = "";
          output[j] = k;
          break;
        }
      }
    }
  }
  return output;
};

//merge_sort is used to sort array using the merge sort algorithm
function merge_sort(values) {
  if (values.length <= 1) {
    return values;
  }

  const middle_index = Math.floor(values.length / 2);

  const left_values = merge_sort(values.slice(0, middle_index));
  const right_values = merge_sort(values.slice(middle_index));

  let sorted_values = [];

  let left_index = 0;

  let right_index = 0;

  while (left_index < left_values.length && right_index < right_values.length) {
    if (left_values[left_index] < right_values[right_index]) {
      sorted_values.push(left_values[left_index]);
      left_index += 1;
    } else {
      sorted_values.push(right_values[right_index]);
      right_index += 1;
    }
  }

  sorted_values = sorted_values.concat(left_values.slice(left_index));
  sorted_values = sorted_values.concat(right_values.slice(right_index));

  return sorted_values;
}
test_value1 = [0, 1, 2];
test_value2 = [3, 4, 5];


//reverse return the reverse of a given string
var reverse = function (x) {
  let str = String(x).split("");
  let len = str.length;
  let res = 0;
  let result = 0;
  let ind;
  let neg = false;
  for (ind = 0; ind < len; ind++) {
    if (ind == 0) {
      if (str[ind] == "-") {
        neg = true;
      } else {
        res += Number(str[ind]) * Math.pow(10, ind);
      }
    } else {
      if (neg) {
        res += Number(str[ind]) * Math.pow(10, ind - 1);
      } else {
        res += Number(str[ind]) * Math.pow(10, ind);
      }
    }
  }
  if (neg) {
    result = -1 * res;
    if (result < -2147483648) {
      result = 0;
    }
  } else {
    result = res;
    if (result > Math.pow(2, 31) - 1) {
      result = 0;
    }
  }
  return result;
};


const solution2 = (arr1, arr2) => {
  console.time()
  function findLargest(arg) {
    let largest = -Infinity;
    let i = 0;
    let ind = 0;
    for (i = 0; i < arg.length; i++) {
      if (largest < arg[i]) {
        largest = arg[i];
        ind = i;
      }
    }
    return ind;
  }

  let sum = 0;
  let i = 0;
  let cars = 0;
  let arrInd = 0;
  for (i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  let difference = sum;
  while (difference > 0) {
    let arrInd = findLargest(arr2);
    difference = difference - arr2[arrInd];
    arr2[arrInd] = 0;
    cars++;
  }
  console.timeEnd();
  return cars;
};
//console.log(solution2([7,4,4,4],[4,5,7,3]))

const solution3 = (A) => {
  function findLargest(arg) {
    let largest = -Infinity;
    let i = 0;
    let ind = 0;

    for (i = 0; i < arg.length; i++) {
      if (largest < arg[i]) {
        largest = arg[i];
        ind = i;
      }
    }
    return ind;
  }
  let sum1 = 0;
  for (i = 0; i < A.length; i++) {
    sum1 += A[i];
  }
  let half = sum1 / 2;
  let filter = 0;
  let difference = Infinity;
  while (difference > half) {
    const ind = findLargest(A);
    A[ind] = A[ind] / 2;
    let sum = 0;
    for (i = 0; i < A.length; i++) {
      sum += A[i];
    }
    difference = sum;
    filter++;
  }
  return filter;
};
//console.log(solution3([3,0,5]))

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let curVal = l1.val + l2.val;
  if (curVal > 9) {
    curVal = curVal % 10;
    carry = 1;
  }
  let Node = new ListNode(curVal);
  let Head = Node;
  l1 = l1.next;
  l2 = l2.next;

  if (l1 != null || l2 != null || carry > 0) {
    while (l1 != null || l2 != null || carry > 0) {
      if (l1 == null) {
        curVal = carry;
      } else {
        curVal = l1.val + carry;
      }
      if (l2 != null) {
        curVal = curVal + l2.val;
      }
      if (curVal > 9) {
        curVal = curVal % 10;
        carry = 1;
      }
      Node.next = new ListNode(curVal);
      curVal = 0;
      if (l1) {
        l1 = l1.next;
      }
      if (l2) {
        l2 = l2.next;
      }
    }
  }
  return Head;
};

var divide = function (dividend, divisor) {
  let res = dividend / divisor;
  let neg = false;
  if (res < 0) {
    res = Math.floor(-1 * res);
    neg = true;
  } else {
    res = Math.floor(res);
  }
  if (neg) {
    res = -1 * res;
  }
  if (res < Math.pow(-2, 31)) {
    res = Math.pow(-2, 31);
  } else if (res > Math.pow(2, 31) - 1) {
    res = Math.pow(2, 31) - 1;
  }
  return res;
};

var fullJustify = function (words, maxWidth) {
  let wordStart = 0;
  let len = words.length;
  let maxCnt = 0;
  let iterationCnt = 0;
  let result = [];
  let wordCounter;
  let wordEnd;

  while (wordStart <= len - 1) {
    wordCounter = 0;
    wordEnd = wordStart;
    for (let i = wordEnd; i < len; i++) {
      if (maxCnt + words[i].length + 1 > maxWidth) {
        break;
      } else {
        if (wordCounter == 0) {
          maxCnt += words[i].length;
        } else {
          maxCnt += words[i].length + 1;
        }
      }
      wordEnd++;
      wordCounter++;
    }
    if (wordCounter == 0) {
      wordEnd++;
    }
    maxCnt = 0;
    let subStr = "";
    let j = wordStart;
    for (j = wordStart; j < wordEnd; j++) {
      subStr += words[j];
      //console.log(subStr)
    }
    if (typeof subStr == "undefined" || subStr == "") {
      //console.log(subStr)
      break;
    }
    result[iterationCnt] = arrangeStr(subStr, wordEnd, wordCounter);
    wordStart = wordEnd;
    iterationCnt++;
  }

  function arrangeStr(str, stop, wCounter) {
    let res = "";
    let totalSpace = maxWidth - str.length;
    let spaceNumber = 1;
    let fromLoop = false;
    if (totalSpace == 0) {
      spaceNumber = 0;
      return words[wordStart];
    }
    if (wCounter > 1) {
      spaceNumber = wCounter - 1;
      if (stop == len) {
        spaceNumber = wCounter;
      }
    }
    let begin = wordStart;
    let firstCnt = 0;
    if (stop != len) {
      while (spaceNumber > 1) {
        if (firstCnt == 0) {
          firstCnt++;
          res += words[begin];
        } else {
          let spaceUsed = Math.ceil(totalSpace / spaceNumber);
          let space = spaceUsed;
          while (spaceUsed > 0) {
            res += " ";
            spaceUsed--;
          }
          res += words[begin];
          totalSpace = totalSpace - space;
          spaceNumber--;
        }
        begin++;
        fromLoop = true;
      }
      if (spaceNumber == 1) {
        if (fromLoop) {
          let spaceUsed = totalSpace;
          while (spaceUsed > 0) {
            res += " ";
            spaceUsed--;
          }
          res += words[begin];
          spaceNumber = 0;
        } else {
          let wordCnt = wCounter;
          let start = 0;
          if (wordCnt > 1) {
            while (wordCnt >= 1) {
              if (start == 0) {
                res += words[begin];
                begin++;
                start++;
              } else {
                let space = Math.ceil(totalSpace / wordCnt - 1);
                if (wordCnt == 1) {
                  space = totalSpace;
                }
                let cSpace = space;

                while (space > 0) {
                  space--;
                  res += " ";
                }
                res += words[begin];
                totalSpace = totalSpace - (words[begin].length + cSpace);
                begin++;
              }
              wordCnt--;
            }
          } else {
            let space = totalSpace;
            res += words[begin];
            while (space > 0) {
              res += " ";
              space--;
            }
          }
        }
      }
    } else if (stop == len) {
      totalSpace = maxWidth;
      while (totalSpace > 0) {
        if (firstCnt == 0) {
          firstCnt++;
          if (wCounter > 1) {
            res += words[begin] + " ";
            totalSpace = totalSpace - (words[begin].length + 1);
            wCounter--;
          } else {
            let space = maxWidth - words[begin].length;
            res += words[begin];
            while (space > 0) {
              res += " ";
              space--;
            }
            totalSpace = space;
          }
        } else {
          if (wCounter > 1) {
            res += words[begin] + " ";
            totalSpace = totalSpace - (words[begin].length + 1);
            wCounter--;
          } else {
            res += words[begin];
            let space = totalSpace - words[begin].length;
            while (space > 0) {
              space--;
              res += " ";
            }
            totalSpace = space;
          }
        }
        begin++;
      }
    }
    return res;
  }
  return result;
};
//let words = ["Listen","to","many,","speak","to","a","few."];
let words = ["a", "b", "c", "d", "e"];
let maxWidth = 6;
//console.log(fullJustify(words,1))

var reverseKGroup1 = function (head, k) {
  let begin = head;
  let isReachEnd = false;
  let resultCnt = 0;
  let resultHead = begin;
  let firstcnt = 0;
  let totalCnt = 0;
  let nextNode;

  while (begin != null) {
    isReachEnd = false;
    let max = 1;
    let headNode1 = begin;
    totalCnt++;

    while (max < k) {
      if (headNode1.next != null) {
        headNode1 = headNode1.next;
        max++;
        if (max == k) {
          isReachEnd = true;
          break;
        }
      } else {
        return headNode1;
        isReachEnd = false;
        break;
      }
    }

    if (isReachEnd) {
      let start = begin;
      let next = headNode1.next;

      if (next) {
        while (next) {
          let temp = start.next;
          start.next = next;
          if (firstcnt == 0) {
            nextNode = next;
            //nextNode = start;
            firstcnt++;
          }
          max--;
          if (max == 0) {
            if (resultCnt == 0) {
              resultCnt++;
              resultHead = start;
            }
            break;
          }
          next = start;
          start = temp;
        }
      } else {
        next = null;
        start = begin;
        while (start) {
          let temp = start.next;
          start.next = next;
          if (firstcnt == 0) {
            nextNode = next;
            firstcnt++;
          }
          next = start;
          if (!temp) {
            break;
          }
          start = temp;
        }
        if (resultCnt == 0) {
          resultCnt++;
          resultHead = start;
        }
      }
    } else {
      break;
    }
    begin = nextNode;
  }
  return resultHead;
};

var reverseKGroup2 = function (head, k) {
  let initNode = head;
  let tailNode;
  let counter = 1;
  if (initNode.next) {
    while (initNode.next) {
      if (initNode.next) {
        initNode = initNode.next;
        counter++;
        if (counter == k) {
          break;
        }
      }
    }
    if (counter == k && initNode.next) {
      tailNode = initNode;
      initNode.next = reverseKGroup(tailNode.next, k);
    } else if (counter == k && !initNode.next) {
      let prev = null;
      let begin = head;
      while (begin) {
        let temp = begin.next;
        begin.next = prev;
        prev = begin;
        if (!temp) {
          break;
        }
        begin = temp;
      }
      return begin;
    } else {
      return head;
    }
  } else {
    return head;
  }

  let prev = tailNode.next;
  let begin = head;
  let newCounter = k;
  while (begin) {
    let temp = begin.next;
    begin.next = prev;
    prev = begin;
    newCounter--;
    if (newCounter == 0) {
      break;
    }
    begin = temp;
  }

  return begin;
};

var mergeKGroup = function (lists) {
  let listLen = lists.length;
  if (listLen < 1) {
    return null;
  }
  let counter = 0;
  let count = 0;
  if (count == listLen) {
    return null;
  }
  let isDone = false;
  let countNull = 0;
  let startArr = 0;
  let startHead;
  let pickedHead;
  let where = null;
  let seenHead = false;
  let foundHead = false;
  let newHead;
  while (count < listLen) {
    let tempHead = lists[count];
    if (tempHead) {
      startArr = count;
      seenHead = true;
      break;
    }
    count++;
    if (count == listLen) {
      isDone = true;
      break;
    }
  }
  if (isDone) {
    return null;
  } else {
    startHead = lists[startArr];
    pickedHead = startHead;
    for (counter = startArr; counter < listLen; counter++) {
      if (!lists[counter]) {
        continue;
      }
      if (startHead.val > lists[counter].val) {
        pickedHead = lists[counter];
        where = counter;
      }
    }

    if (where) {
      newHead = pickedHead.next;
      pickedHead.next = null;
      lists[where] = newHead;
      pickedHead.next = mergeKLists(lists);
    }
    // else{
    //     return null;
    // }
  }

  return pickedHead;
};

var mergeKLists = function (lists) {
  let totalArr = lists.length;
  if (totalArr < 1) {
    return null;
  }
  let cnt = 0;
  let headFound = false;
  let isDone = false;
  let freshHead;
  let index;

  while (cnt < totalArr) {
    let temp = lists[cnt];
    if (temp) {
      headFound = true;
      break;
    }
    cnt++;
    if (cnt == totalArr) {
      isDone = true;
      break;
    }
  }
  if (isDone) {
    return null;
  } else {
    let count;
    freshHead = lists[cnt];
    for (count = cnt; count < totalArr; count++) {
      if (!lists[count]) {
        continue;
      }
      if (freshHead.val > lists[count].val) {
        freshHead = lists[count];
        index = count;
      }
    }
    if (index && freshHead) {
      let temp = freshHead.next;
      freshHead.next = null;
      lists[index] = temp;
    } else if (!index && freshHead) {
      let temp = freshHead.next;
      freshHead.next = null;
      lists[cnt] = temp;
    }

    freshHead.next = mergeKLists(lists);
  }
  return freshHead;
};

function miniMaxSum(arr) {
  // Write your code here
  let i;
  let len = arr.length;
  let min = 0;
  for (i = 0; i < len - 1; i++) {
    min = min + arr[i];
  }
  let j;
  let max = 0;
  for (j = len - 1; j > 0; j--) {
    max = max + arr[j];
  }
  return min + " " + max;
}

//console.log(miniMaxSum(arr))

var removeNthFromEnd = function (head, n) {
  let cnt = 0;
  const checkNode = (node) => {
    if (!node.next) {
      cnt++;
      return null;
    } else {
      let check = checkNode(node.next);
      cnt++;
      if (cnt == n + 1) {
        node.next = check;
        return node;
      } else if (cnt == n) {
        return node.next;
      } else {
        return node;
      }
    }
  };

  let newNode = checkNode(head);
  return newNode;
};

var multiply = function (num1, num2) {
  const getNumber = (str) => {
    let len = str.length;
    let sum = 0;
    for (let i = len - 1, j = 0; i > -1; i--, j++) {
      let num;
      if (str.charAt(i) == "1") {
        num = 1;
      } else if (str.charAt(i) == "2") {
        num = 2;
      } else if (str.charAt(i) == "3") {
        num = 3;
      } else if (str.charAt(i) == "4") {
        num = 4;
      } else if (str.charAt(i) == "5") {
        num = 5;
      } else if (str.charAt(i) == "6") {
        num = 6;
      } else if (str.charAt(i) == "7") {
        num = 7;
      } else if (str.charAt(i) == "8") {
        num = 8;
      } else if (str.charAt(i) == "9") {
        num = 9;
      } else if (str.charAt(i) == "0") {
        num = 0;
      }
      sum = sum + num * Math.pow(10, j);
    }
    return sum;
  };
  let total = getNumber(num1) * getNumber(num2);
  return total.toString();
};

//console.log(multiply("123345678","987654321"))

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  let arrayLine = ``;
  let sentence = [];

  const pad = (line, charLimit) => {
    let words = line.split(" ");
    let minLine = words.reduce((p, c, cI, arr) => {
      return p + c;
    });
    const spaces = charLimit - minLine.length;

    if (line.indexOf(" ") === -1) {
      line = line.padEnd(charLimit, " ");
      return line;
    }

    for (let index = 0, i = 0; i < spaces; i++, index++) {
      if (index == words.length - 1) {
        index = 0;
      }
      words[index] = `${words[index]} `;
    }
    line = words.reduce((p, c, cI, arr) => {
      return p + c;
    });

    return line;
  };

  const newLine = (array, arrayLine, charLimit, pGraph, i = 0) => {
    // console.log(pGraph);
    if (array[i]) {
      let nextWord = `${array[i + 1]}`;
      arrayLine = array[i];
      if (arrayLine.length + nextWord.length + 1 > charLimit) {
        pGraph.push(pad(arrayLine, charLimit));
        arrayLine = "";
        if (array.indexOf(array[i]) < array.length - 1) {
          newLine(array, arrayLine, charLimit, pGraph, i + 1);
        } else if (array.indexOf(nextWord) == array.length - 1) {
          arrayLine += `${nextWord}`;
          pGraph.push(pad(arrayLine, charLimit));
        }
      } else if (arrayLine.length + nextWord.length + 1 == charLimit) {
        arrayLine += ` ${nextWord}`;
        pGraph.push(arrayLine);
        arrayLine = "";
        if (array.indexOf(array[i]) < array.length - 1) {
          newLine(array, arrayLine, charLimit, pGraph, i + 2);
        } else if (array.indexOf(nextWord) == array.length - 1) {
          arrayLine += `${nextWord}`;
          pGraph.push(pad(arrayLine, charLimit));
        }
      } else if (arrayLine.length + nextWord.length + 1 < charLimit) {
        do {
          arrayLine += ` ${nextWord}`;
          i++;
          nextWord = array[i + 1];
        } while (
          nextWord &&
          arrayLine.length + nextWord.length + 1 <= charLimit
        );
        pGraph.push(pad(arrayLine, charLimit));
        arrayLine = "";
        if (array.indexOf(nextWord) < array.length - 1) {
          newLine(array, arrayLine, charLimit, pGraph, array.indexOf(nextWord));
        } else if (array.indexOf(nextWord) == array.length - 1) {
          arrayLine += `${nextWord}`;
          pGraph.push(pad(arrayLine, charLimit));
        }
      }
    }
  };
  newLine(words, arrayLine, maxWidth, sentence);

  let lastLine = sentence[sentence.length - 1].split(" ");
  let nLine = lastLine.filter((e) => {
    return e ? `${e} ` : e;
  });
  for (let index = 0; index < nLine.length - 1; index++) {
    if (index == words.length - 1) {
      break;
    }
    nLine[index] = `${nLine[index]} `;
  }

  nLine = nLine.reduce((c, p, i, arr) => {
    console.log(c + p);
    return c + p;
  });

  nLine = nLine.padEnd(maxWidth, " ");
  sentence[sentence.length - 1] = nLine;

  // console.log(nLine);
  return sentence;
};

let words2 = ["What", "must", "be", "acknowledgment", "shall", "be"];
let maxWidth2 = 16;
// console.log(fullJustify(words2, maxWidth2));

//console.log('.' + "     shall      be   ".trim() + '.')

const invert = (input) => {
  let array = '';

  if (input == null) return "";
  if (input.length == 1) return input;
  if (input == "") return input;

  for (let i = input.length - 1, index = 0; i >= 0; i--, index++) {
    array += input[i];
  }
  return array;
};

//console.log(invert('abcdfu'));
const parl = "saippuakivikauppias";

const parlAlter = (arg) =>{
    let pLenght = arg.length;
    let i ;
    let j ;
    let lowest = 'z';
    for(i = 0,j=pLenght-1;i< pLenght;i++,j--){
       if(pLenght%2 == 0){
         if(i>j){
           break;
         }
       }
       if(arg[i] !== arg[j]){
          return "IMPOSSIBLE,0";
       }

    }
    for(i = 0,j=pLenght-1;i< pLenght;i++){
       if(pLenght%2 == 0){
         if(i>j){
           break;
         }
       }
       if(arg[i] < lowest){
         lowest = arg[i];
       }
       if(i == j){
         break;
       }
    }
    let newString = arg;
    for(i = 0;i<pLenght;i++){
      if(newString[i] > lowest){
         if(i == 0){
  
            let second = newString.slice(i+1)
            newString = lowest+second;
            break;
  
         }
         else{
           let first = newString.slice(0,i);
           let second = newString.slice(i+1);
           newString = first+lowest+second;
           break;
         }        
      }
    }
   
    for(i = 0,j=pLenght-1;i< pLenght;i++,j--){
      if(pLenght%2 == 0){
        if(i>j){
          return  newString
        }
      }
      if(newString[i] === newString[j]){
         if(i == j){
           return "IMPOSSIBLE,1";
         }
      }
      else{
        return newString;
      }

   }
   
}
// console.log(parlAlter(parl));

const parl2 = "A man, a plan, a canal. Panama";

const checkString=(arg) =>{
  let newString = arg.match(/[a-zA-Z0-9]/g);
  console.log(newString)
 
  const checkForPalidrom = (word) => {
    if (typeof word == "undefined" || word == "") return false;
  
    const checkHelper = (word, start, last) => {
      if (start >= last) {
        return true;
      } else {
        if (word[start] == word[last]) {
          return checkHelper(word, (start += 1), (last -= 1));
        } else {
          return false;
        }
      }
    };
  
    return checkHelper(word, 0, word.length - 1);
  };
  if(newString.length > 0){
      return checkForPalidrom(newString)
  }
  else{
    return false;
  }

}

//console.log(checkString(parl2))
var intToRoman = function(num) {
  let result = "";
  if(num >= 1000){
      let multi = Math.floor(num/1000);
      while(multi > 0){
          result += "M";
          multi--;
          num = num - 1000;
      }  
      
  }
  function Calc(numb){
      if(numb >= 900){
          result += "CM";
          num = num-900;
      }
      else if(numb < 900 && numb >= 500){
          result += "D";
          num = num - 500;
      }
      else if(numb < 500 && numb  >= 400 ){
          result += "CD";
          num = num - 400;

      }
      else if(numb < 400 && numb  >= 100 ){
          let multi = Math.floor(numb/100);
          while(multi > 0){
              result += "C";
              multi--;
              num = num - 100;
          }  
      }
      else if(numb < 100 && numb >= 90){
          result+= "XC";
          num = num - 90;
      }
      else if(numb < 90 && num >= 50){
          result += "L";
          num = num - 50;
      }
      else if(numb< 50 && numb >= 40){
          result += "XL";
          num = num -40;
      }
      else if(numb < 40 && num >= 10){
          let multi = Math.floor(numb/10)
          while(multi > 0){    
              result+= "X";
              num = num - 10;
              multi--;
          }
      }
      else if(numb == 9 ){
          result += "IX";
          num = num - 9;
      }
      else if(numb < 9 && num >= 5){
          result += "V";
          num = num - 5;
      }
      else if(numb == 4){
          result += "IV";
          num = num - 4;
      }
      else if(numb < 4){
          let multi = numb;
          while(multi > 0){
              result += "I";
              num = num -1;
              multi--
          }
      }
  }
  while(num > 0){
      Calc(num);
  }
  return result;
};
let int = 50000;
//console.log(intToRoman(int))


function rot13(str) {
  const alphbet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let newString = ''
  
  for(let i = 0;i<str.length;i++){
    let index = str.charAt(i).search(/[a-z,A-Z]/);
    console.log(index)
      if(index === 0){
        let charPos = alphbet.search(`${str[i]}`)
         let newIndex = charPos+13;
         if(newIndex > 25){
           newIndex = newIndex-26;
         }
         const newChar = alphbet.charAt(newIndex);
         newString += newChar;
      }
      else{
        newString += str.charAt(i)
      }
      
  }
  return newString;
}

//console.log(rot13("SERR YBIR?"));

let dummyText = '1(5555555555)';

const valTel = (tel) => {
    let newString = '';
    let result = '';
    if (tel[0] == '-') {
        return false;
    }

    for (let i = 0; i < tel.length; i++) {
        const element = tel[i];
        if (element == '('
            || element == ')'
            || element == ' ') {
            newString += element;
            continue;
        }
        let code = tel.charCodeAt(i);
        if ((code > 47 && code < 58)) {
            newString += element;
        }
    }

    for (let i = 0; i < newString.length; i++) {
        const element = newString[i];
        if (element == '(') {
            if ((newString[i + 4] != ')')) {
                return false;
            }
        }
        if (element == ')') {
            if ((newString[i - 4] != '(')) {
                return false;
            }
        }
        let code = newString.charCodeAt(i);
        if ((code > 47 && code < 58)) {
            result += element;
        } else {
            result += ' ';
        }
    }

    let actual = [...result].filter(el => el != ' ');

    let filtered = result.split(' ');
    filtered = filtered.filter(el => el != '');

    console.log(filtered);

    if (actual.length > 10) {
        if (Number(filtered[0]) != 1) {
            return false;
        }
    }

    if (actual.length < 10) {
        return false;
    }

    if (actual.length == 10) {
        if (!Number(filtered[0].length > 2)) {
            return false;
        }
        return true;
    }

    return true;
};

// console.log(valTel(dummyText));

const checkCashRegister = (price, cash, cid) => {
  var difference = cash - price;
  const change = difference;
  var report = {
      status: '',
      change: []
  };

  let currencies = [
      ["ONE HUNDRED", 100],
      ["TWENTY", 20],
      ["TEN", 10],
      ["FIVE", 5],
      ["ONE", 1],
      ["QUARTER", 0.25],
      ["DIME", 0.1],
      ["NICKEL", 0.05],
      ["PENNY", 0.01]
  ];

  cid.reverse();

  var cidSum = 0;
  for (let i = 0; i < cid.length; i++) {
      cidSum += cid[i][1];
  }

  var result = [...currencies];

  for (let i = 0; i < currencies.length; i++) {
      let returnMoney = 0;
      let bill = cid[i][1] / currencies[i][1];
      bill.toFixed(2);
      while (difference.toFixed(2) >= currencies[i][1] && bill >= 1) {
          difference -= currencies[i][1];
          returnMoney += currencies[i][1];
          bill--;

      }
      if (returnMoney > 0) {
          if (returnMoney - Math.floor(returnMoney) !== 0) {
              result[i][1] = returnMoney.toFixed(2);
              result[i][1] = parseFloat(result[i][1]);
          } else {
              result[i][1] = returnMoney;
          }

      } else {
          result[i][1] = returnMoney;
      }
  }

  let sumResult = 0;

  for (let i = 0; i < cid.length; i++) {
      sumResult += result[i][1];
  }
  sumResult = sumResult.toFixed(2);

  if (cidSum < change || sumResult < change) {
      report.status = 'INSUFFICIENT_FUNDS';
  } else if (cidSum == change) {
      report.status = 'CLOSED';
      report.change = cid.reverse();
  } else {
      let resultFiltered = [];
      for (let a = 0; a < result.length; a++) {
          if (result[a][1] !== 0) {
              resultFiltered.push(result[a]);
          }
      }
      report.status = 'OPEN';
      report.change = resultFiltered;
  }
  return report;
};

const binaryTree =(arg)=>{
    let sum = 0;
    function helperFunction(newArg){
      if(newArg){
         if(newArg.left){
            sum+= newArg.left.value;
            helperFunction(newArg.left)
         }
         if(newArg.Right){
          helperFunction(newArg.Right)
       }
      }
      
      return sum;
    }
    return helperFunction(arg);
}

const arraytes = [0,2,-4,-4,6,9,3,2];

const sortArr = (arg) =>{
  let i;
  let cnt = 1;
  let obj= {};
  for(i = 0;i<arg.length;i++){
     if(arg[i] >= 1){
       obj[arg[i]] = arg[i];
     }
  }
  if(obj[cnt]){
      while(obj[cnt]){
        cnt++;
      }
      return cnt;
  }
  else{
    return 1;
  }

}
//console.log(sortArr(arraytes))
const carsNum = (P, S)=>{
  console.time()
  const len = P.length;

  let obj = {}
  let sum1 = 0; let sum2 = 0;

  for(let i = 0; i < len; i++){
      if(obj[S[i]]){
          obj[S[i]]++;
      }
      else{
          obj[S[i]] = 1;
      }
      sum1 += P[i]; //sum2 += S[i];
  }

  let sorted = [];
  for(let x in obj){
      while(obj[x] >= 1){
          obj[x]--;
          sorted.push(Number(x))
      }
  }

  let cnt = 0;
  while(sum1 > 0){
      let largest = sorted.pop();
      sum1 -= largest;
      cnt++;
  }
  console.timeEnd()
  return cnt;
}
//console.log(carsNum([7,4,4,4],[4,5,7,3]))

const solution =(T)=>{
  let perfect = [];
  let index = 0;
  let helperFun = (arg,ind)=>{
     if(!arg){
       return;
     }
     if(arg){
      if(arg.l && arg.r ){
        if(perfect[ind]){
          perfect[ind]+=3;
        }
        else{
          perfect[ind]=3;
        }
        helperFun(arg.l,ind);
        helperFun(arg.r,ind);
      }
      else if(arg.l && !arg.r){
         helperFun(arg.l,ind++)
      }
      else if(arg.r && !arg.l){
       helperFun(arg.l,ind++)
     }
     else{
       if(perfect[ind]){
         perfect[ind]++;
       }
       else{
         perfect[ind]=1;
       }
     }
     }
  };

  helperFun(T,index);
  return Math.max(...perfect);  

} 

const A = [2,8,4,3,2];
const x = 7,
y = 11, z = 3;

const solutionD = (A,x,y,z) =>{
  const dispenser = [x,y,z];
  let lastCar = 0;
  let waiting = [0,0,0];
  let foundDis = false;
  let occupied = [1,1,1];
  let reminder = [0,0,0];
  let count = 0;
  let i = 0;
  for(i;i<3;i++){
    if(A[lastCar] >= dispenser[i]){
      foundDis = true;
      occupied[i] = 0;
      waiting[i] +=  A[lastCar];
      break;
    }
  }
  if(!foundDis){
    return -1;
  }
  let len = A.length;
  lastCar++;
  let test;
  count++;
  for(i = lastCar;i<len;i++){      
      foundDis = false;
      let car = A[i];
      let j = 0;
      for(j;j<3;j++){
        if(occupied[j] == 0){
          continue;
        }
        if(car >= dispenser[j]){
          count++;
          if(count == 3){
            count= 0;
          }
          foundDis = true;
          occupied[j] = 0;
          waiting[j] +=  A[lastCar];
          break;
        }
      }
      if(!foundDis){
          let car = A[i];
          let j = 0;
          for(j;j<3;j++){
            reminder[j] = dispenser[j]-waiting[j];
            car <= reminder[j];
            test = true;
            break;
          }
          if(!test){
            break;
          }
          
      }
      else{

      }
      
  }
  if(!test){
    return -1;
  }
}

const newWords = ['she','was','the','queen','she','was'];
const orderOfWords = (words) =>{
  words = words.sort()
  const obj = {};
  let i;
  let len = words.length;
  for(i = 0;i<len;i++){
     if(obj[words[i]]){
       obj[words[i]]++
     }
     else{
       obj[words[i]] = 1;
     }
  }
  let result = []
  for(const eWord in obj){
      result.push(obj[eWord]);
  }
  
  return result;
}

//console.log(orderOfWords(newWords));

const wordArr= ['Hello','World','To','You','Today'];
const numberArr = [[10,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]];

const maxMean = (word,numbers) =>{
    let len = word[0].length;
    let numberLen = numbers.length;
    let newArr = [],i;
    for(i= 0;i<len;i++){
        let sum = 0;
        for(let j = 0;j<numberLen;j++){
          sum+= numbers[j][i];
        }
        newArr[i] = sum;
    }

    const findMaxIndex = (arr)=>{
        let index = 0;
        let max = -Infinity;
        let len =arr.length;
        let i;
        for(i = 0;i<len;i++){
          if(arr[i] > max){
            index = i;
            max = arr[i]; 
          }
        }
        return index;
    }

    let finalArr = [];
    for(i = 0;i<3;i++){
      let index = findMaxIndex(newArr);
      newArr[index] = 0;
      finalArr.push(wordArr[index]);
    }
    return finalArr;
    
}

//console.log(maxMean(wordArr,numberArr));

function breakPalindrome(palindromeStr) {
  // Write your code here
  let lowest = 'z';
  
  let pLength = palindromeStr.length;
  for(let i= 0,j = pLength;i<pLength;i++,j--){
      if(palindromeStr[i] < lowest){
          lowest = palindromeStr[i]
      }
      if(palindromeStr[j] < lowest){
          lowest = palindromeStr[j];
      }
      if(pLength%2 == 0){
          if(i+1 == j-1){
              break;
          }
      }
      else{
          if(i == j){
              if(palindromeStr[i] < lowest){
                  lowest = palindromeStr[i]
              }
          }
      }
  }
  return lowest + palindromeStr.slice(1);

}

let string = '{{{[{}][()]([])({}){()}{[]}{}}}}}}}}}}}}}}}}}}}}}';

const matching = (s) => {
    let stack = [];
    let counter = 0;
    let obj = {
        '[': ']',
        '{': '}',
        '(': ')'
    }

    stack.push(s[0]); let index = 0;
    let len = s.length;
    for (let x = 1; x < len; x++){ 
        if (index + 1 > (len-x)) {
            return false;
        }
        if (obj[stack[index]] == s[x]) {
            stack.pop();
            index--;
        }
        else {
            stack.push(s[x]);
            index++;
        }
        counter++;
    }
    //console.log(counter, s.length);
    if (stack.length == 0) {
        return true;
    }    
    return false;
};


// console.time('matching');
// console.log(matching(string));
// console.timeEnd('matching');

function validEmail(e) {
  var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
  return String(e).search(filter) != -1;
}

//Find First and Last Position of Element in Sorted Array
const newArr = [1,1,2,3,4,4,4,6,7,7];
var searchRange = function(nums, target) {
  let startPos = 0;
  
  const helperFunction = (nums)=>{
      
      if(nums.length <= 0){
          return [-1,-1];
      }
      if(nums.length === 1 && target !== nums[0]){
          return [-1,-1];
      }
      if(nums.length === 1 && target === nums[0]){
          return [startPos,startPos];
      }
      let mid = Math.ceil(nums.length/2);
      if(target === nums[mid]){
          if(nums[mid+1] !== target && nums[mid-1] !== target ){
              return [startPos+mid,startPos+mid];
          }
          else{
              let min = mid;
              while(nums[min-1] === target){
                  min--;
                  if(nums[min] !== target){
                      break;
                  } 
              } 
              let max = mid;
              while(nums[max+1] === target){
                  max++;
                  if(nums[max] !== target){
                      break;
                  }
              }
              return[startPos+min,startPos+max];
          }            
      }
      else if(target > nums[mid]){
          startPos+= mid+1
          const newArr = nums.slice(mid+1,nums.length)
          return helperFunction(newArr);
      }
      else{
          const newArr = nums.slice(0,mid);
          return helperFunction(newArr);
      }
  }
  
  return helperFunction(nums);
  
};

//console.log(searchRange(newArr,9));


function sockMerchant(n, ar) {
  // Write your code here
  let obj = {};
  let i;
  let len = ar.length;
  for(i = 0;i<len;i++){
      if(obj[ar[i]]){
          obj[ar[i]]++;
      }
      else{
          obj[ar[i]] = 1;
      }
  }
  let result = 0;
  console.log(ar);
  for(const key in obj){
      if(obj[key]%2 === 0){
          result = result+(obj[key]/2);
      }
  }
  
  return result;
}

//let result = sockMerchant(20,genArray(200,0,50))


let testArr=[
  {
    id:3,
    fName:'fatai',
    lName:'james'
  },
  {
    id:2,
    fName:'bola',
    lName:'adeola'
  },
  {
    id:5,
    fName:'sola',
    lName:'adebakin'
  },
  {
    id:1,
    fName:'ajewole',
    lName:'bukola'
  },
  {
    id:4,
    fName:'olawole',
    lName:'yusuf'
  }]

  const reSortArr = (arr,key) =>{
     let newArr = [];
     let i;let len=arr.length;
     for(i = 0;i<len ;i++){
       newArr[i] = arr[i][key];
     }
     newArr.sort();
     if(!isNaN(Number(newArr[0]))){
      newArr.sort((a,b) => a-b);
     }
     let finalArr = [];
     for(i = 0;i<len;i++){
        let ind = 0;
        finalArr[i] = arr.filter((element,num) => {
            if(element[key] === newArr[i] ){
              ind = num;
            }
            return element[key] === newArr[i]
        })[0];
        arr[ind] = {fName : -1}
     }
     return finalArr
  }

  console.log(reSortArr(testArr,'id'))
 

