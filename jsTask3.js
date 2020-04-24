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
      let newValue = a.concat("-", b, "-", c);
      numberArray.push(newValue);
    }

    else if (i % 2 == 0 && i % 3 == 0 && i % 5 !== 0)
    {
      let newValue = a.concat("-", b);
      numberArray.push(newValue);
    }

    else if (i % 2 == 0 && i % 5 == 0 && i % 3 !== 0)
    {
      let newValue = a.concat("-", c);
      numberArray.push(newValue);
    }


    else if (i % 3 == 0 && i % 5 == 0 && i % 2 !== 0)
    {
      let newValue = b.concat("-", c);
      numberArray.push(newValue);
    }

    else if (i % 2 == 0 && i % 3 !== 0 && i % 5 !== 0)
    {
      numberArray.push(a);
    }

    else if (i % 3 == 0 && i % 2 !== 0 && i % 5 !== 0)
    {
      numberArray.push(b);
    }

    else if (i % 5 == 0 && i % 3 == 0 && i % 2 !== 0)
    {
      numberArray.push(c);
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

numberReplace (randomNumber);
console.log (numberArray);
