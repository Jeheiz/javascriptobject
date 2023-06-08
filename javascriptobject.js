var person = {
    name: "John",
    lastname: "Doe",
    age: 35,
    gender: "male",
    lucky_numbers: [7, 11, 13, 17],
    significant_other: person2
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]
};

function addAllFamilyLuckyNumbers(anArray) {
  let sumOfAllLuckyNumbers = 0;

  for (var i = 0; i < anArray.length; i++) {
    var person = anArray[i];
    var luckyNumbers = person.lucky_numbers;

    for (var j = 0; j < luckyNumbers.length; j++) {
      sumOfAllLuckyNumbers += luckyNumbers[j];
    }
  }

  return sumOfAllLuckyNumbers;
}


family.members[0].lucky_numbers[3] = 33;


var jimmyDoe = {
  name: "Jimmy",
  lastname: "Doe",
  age: 13,
  gender: "male",
  lucky_numbers: [1, 2, 3, 4],
  significant_other: null
};

family.members.push(jimmyDoe);


console.log(addAllFamilyLuckyNumbers(family.members));