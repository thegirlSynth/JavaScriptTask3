//I'm trying to fall in love with JS. Tough love. @kingabesh and @jeff, you'll pro'lly never see this, but I think you guys rock. That being said...

let numberArray = [];


let a = "yu";
let b = "gi";
let c = "oh";

function numberReplace(chosenNumber) {

  for (let i = 1; i <= chosenNumber; i++)
  {

    if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0)
    {
      numberArray.push(a, "-", b, "-", c);
    }

    if (i % 2 == 0 && i % 3 == 0)
    {
      numberArray.push(a, "-", b);
    }

    else if (i % 2 == 0 && i % 5 == 0)
    {
      numberArray.push(a, "-", c);
    }


    else if (i % 3 == 0 && i % 5 == 0)
    {
      numberArray.push(b, "-", c);
    }

    else if (i % 2 == 0)
    {
      numberArray.push(a);
    }

    else if (i % 3 == 0)
    {
      numberArray.push(b);
    }

    else
    {
      numberArray.push(i);
    }

  };
}
let randomNumber = Math.floor((Math.random() * 200) + 1);

numberReplace(100);
console.log(numberArray);

numberReplace(randomNumber);
console.log(numberArray);
//console.log (i++);