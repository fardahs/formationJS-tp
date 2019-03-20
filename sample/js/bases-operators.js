var x = 2;
var y = 'Formation';
console.log('x:', x, 'y:', y);
console.log('Egalité faible:', x==y);
console.log('Egalité forte:', x===y);

x=2;
y='2';
console.log('x:', x, 'y:', y);
console.log('Egalité faible:', x==y);
console.log('Egalité forte:', x===y);

x=undefined;
y=null;
console.log('x:', x, 'y:', y);
console.log('Egalité faible:', x==y);
console.log('Egalité forte:', x===y);