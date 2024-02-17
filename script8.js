// Define a Array
let names = ["minal","poorva","shradha","sachin","Ram"]
console.log(names[0])

//Array stores the by index?
let q1 = names.length
console.log(names[2])

// How to length of array

let q2 = names.length
console.log(q2)

for(let i = 0; i < 5; i++){
    console.log(i)
}

// program 2

let animal = ["tiger","lion","cat","dog"]
console.log(animal[0])
console.log(animal.length)
for(let i = 0; i < animal.length; i++){
    console.log(animal[i])
}
// program 3

let fruits = ["mango","apple","banana","chikoo"]
console.log(fruits[0])
for(let i = 0; i < fruits.length ; i++){
    //console.log(i)
    console.log(fruits[i])
}

// program 4
// print the element in reverse
// length -1 is always last index
for(let i = fruits.length -1 ; i >= 0 ; i--){
    //console.log(i)
    console.log(fruits[i])
}

// program 5
let animals = ["tiger","lion","cat","monkey","rabbit"]
for(let i=0 ; i < animals.length ; i++){
    // console.log(i)
    //console.log(animals[i])

    if(animals[i] == "monkey"){
        break
    }
    console.log(animals[i])
}

// program 6
let flower = ["rose","lilly","jasmine","sunflower"]
for(let i = 0 ; i < flower.length ; i++){
    //console.log(i)
    //console.log(flower[i])
    if(flower[i] == "jasmine"){
        continue
    }
    console.log(flower[i])
}

// program 7
let country = ["india","srilanka","bangaldesh","nepal"]
console.log(country)

let y = 0
while(y < country.length){
   // console.log(y)
   console.log(country[y])
    y = y+1
}

