for (var i = 1; i <= 100; i++) {
  var value = '';
  if (i % 3 == 0) {value += 'Fizz';}
  if (i % 5 == 0) {value += 'Buzz';}
  if (value == '') {value = i;}

  console.log(value);
}