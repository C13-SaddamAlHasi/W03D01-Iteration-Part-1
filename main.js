// PulseCheck
//Q1
/* for (const i = 0; i < 10; i++) {
  console.log(i);
}  ( let instead of const) */
   /* for (let i = 0; i < 10; i--) {
  console.log(i);
}* =====> i++ / */
/* Q2
let x = 0
while ( x<=5) { console.log(x)
    x++
}
    Q3
let x2 = 10
while ( x2<=20) { console.log(x2)
    x2++
}*/
//Q4
console.clear()
let x3 = 0
const galaxies = ["Andromeda", "Milky Way", "Magellanic Clouds"];
while (x3 < galaxies.length) { console.log(galaxies[x3],x3)
    x3++
}
console.clear()
const randomString = "bwaxaawqaacasghwera";

for (let i = 0; i < randomString.length; i++) {
  if (randomString[i]!== "a") {
    console.log(randomString[i])  
  }
}
