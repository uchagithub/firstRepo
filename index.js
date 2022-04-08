var numbersArray = [60, 50, 62, 58, 54, 54];
let array2 =numbersArray;
function compareNumbers(num1, num2) {
    if (num1 > num2) {
    return 1;
    } else if (num1 === num2) {
    return 0;
    } else {
    return -1;
    }
    }
    let modifiednumbersArray=numbersArray.sort(compareNumbers);
    console.log(modifiednumbersArray);
    console.log(numbersArray);
    function compareNumbers1(num1, num2) {
        return num2 * num1;
        }
        console.log(compareNumbers1);
        array2.sort(compareNumbers1);
        console.log(array2);