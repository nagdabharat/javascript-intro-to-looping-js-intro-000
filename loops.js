
//var array[]
function forLoop(array) {
  //var array = [];
  for (let i = 0; i < 25; i+=1) {
    if (i==1) {
      array.push(`I am 1 strange loop.`);
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return(array)
}

function whileLoop(arg) {
  while(arg>0)  {
    console.log(arg);
    arg--;
  }
  return('done');
}



function doWhileLoop(num) {
  function decrementing() {
    return num;
    num = num - 1;
  }
  do {
      console.log("I run once regardless.");
  } while (decrementing() > 0);
}
