let i = 1

let change = (i) => {
   if (i <= 0) {
      return i = i + 5
   }
   else (
      console.log(`I имеет значени ${i}`)
   )
}

if (i >= 1) {
   setInterval(() => {
      i = i + 1
      console.log(i++)
   }, 1)
} else {
   console.log('Значение меньше 1');
   console.log('Выполняется функция');
   console.log(change(i));
}


