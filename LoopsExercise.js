
let numbers = [3, 14, 2, 7, 6, 3, 7]

// 1 - Display the length of the array
    const arrLength = numbers.length
    console.log(arrLength);

// 2 - Display the 3rd element in the array
    console.log(numbers[2])

// 3 - Calculate the sum of the first and the last element (just 2 numbers)
    function sum1(numbers) {
      return numbers[0] + numbers[6]
    }
    console.log(sum1)

// 4 - Display all the numbers
    function printNumbers(numbers) {
        for (let index = 0; index <= numbers.length - 1; index++) {
            console.log(numbers[index])
        }
    }
// 5 - Display just the numbers at even positions: 14, 7, 3
    f
    for (let index = 0; index <= numbers.legth - 1; index++) {
        if (index% 2 === 0) {
            console.log(index)
        }
    }
// 6 - Calculate the sum of all numbers
    console.log(numbers.reduce());

    function getSum(numbers) {
        total = 0;
        for (let index = 0; index <= numbers.length; index++) {
          total = total + index
        }
    return total
 }

    console.log(getSum(numbers));

// 7 - Calculate the sum of the numbers at odd positions: 3, 2, 6, 7

    function sumOdds(numbers) {
        let total = 0;
          for (let index = 0; index <= numbers.length - 1; index++) {
              if (!isEven(numbers[index])) {
                  total = total + numbers[index];    
              }
        }
        return total
    }
      console.log(sumOdds(numbers))
  
  function isEven(number) {
    return number % 2 === 0
  }

// 8 - Calculate the average of the numbers (total sum divided by number)


// 9 - Find the maximum number (hint: you'll need an `if` too)


// 10 - Find the minimum number


// More difficult:


// 11 - Display the number at the index indicated by the number at index 5 (what?? read again, hehe)


// 12 - Find numbers whose index is the same as the number itself (what!!?? haha, read again!)


// 13 - Swap the number at position 0 with the last number of the array.
//      When I say "swap" I mean you have to change the positions of those
//      numbers: move each one of them to the position of the other.
//      Note: with `numbers[0] = XXX;` you change the first value in the array.


// 14 - Swap the number at position 0 with the smallest value in the array


// 15 - Given some start index swap the number at that index with the smallest
//      number from that index. For example, if `start` is 3, find the smallest
//      number from that index, ignoring lower indexes like 0, 1, 2.
//      Just look from index 3 and above. Then swap the numbers.int start = 3;


// OK, you reached here! Even MORE difficult:


// 16 - Find the repeated numbers (hint: you'll need a loop inside another)


// 17 - Sort the array using the "selection sort algorithm":
//      Start at index 0 and do what you did in exercise 15.
//      Then move to index 1 and do the same.
//      Then move to index 2 and do the same.
//      When you get to the end of the array (to the last index) you're done!
//      So, in other words, what you have to do is to repeat the process you
//      did in ex 15 for every index in the array.
//      https://commons.wikimedia.org/wiki/File:Selection-Sort-Animation.gif