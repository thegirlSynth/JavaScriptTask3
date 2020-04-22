//I'm trying to fall in love with JS. Tough love. @kingabesh and @jeff, you'll pro'lly never see this, but I think you guys rock. That being said...

let parameterNumber = "10";

let a = "yu";
let b = "gi";
let c = "oh";


for (var i = 1; i <= parameterNumber; i++)
{

  if (i % 2 == 0 && i % 3 == 0)
  {
    console.log(a, "-", b);
  }

  else if (i % 2 == 0 && i % 5 == 0)
  {
    console.log(a, "-", c);
  }


  else if (i % 3 == 0 && i % 5 == 0)
  {
    console.log(b, "-", c);
  }

  else if (i % 2 == 0)
  {
    console.log(a);
  }

  else if (i % 3 == 0)
  {
    console.log(b);
  }

  else
  {
    console.log(i);
  }

};


//console.log (i++);
