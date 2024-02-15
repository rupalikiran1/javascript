//for loop

// intialization 
// while(condition){
    // statement
    // increment / decrement
    //}

// program 1
  let i1 = 1
  while(i1 <= 3){
       console.log("hello") // "hello" // "hello" //"hello"
        i1 = i1 + 1 // 2 //3 //4
  }

  // program 2
  // print 1 to 3
  let i2 = 1
  while(i2 <= 3){
        console.log(i2)
        i2 = i2 + 1
  }

  // program 3
  // print 1 to 5
  let i3 = 1
  while(i3 <= 5){
    console.log(i3) //1 //2 //3 //4 //5
    i3 = i3 + 1 // 2 //3 //4 //5 //6
  }

  // program 4
  // print 5 to 1

  let i4 = 5
  while(i4 >= 1){
       console.log(i4) //5 //4 //3 //2 //1
       i4 = i4 - 1 //4 //3 //2 //1 //0
       // i4--
       //i4 = i4
  }

  // program 5
  // print table of 2

  let i5 = 2
  while(i5 <= 20){
       console.log(i5)
       i5 = i5 + 2
  }

  // program 6
  // print table of 5 in reverse

  let i6 = 50
  while(i6 >= 5){
       console.log(i6)
       i6 = i6 - 5
  }

  // program 7
  // print table of 3

  let i7 = 30
  while(i7 >= 3){
       console.log(i7)
       i7 = i7 - 3
  }

  // while with break statement

  let i8 = 1
  while(i8 <= 5){
      if(i8 == 3){
         break
      }
      console.log(i8)//1 //2
      i8 = i8 + 1 //2 //3
  }


  let i9 = 1
  while(i9 <= 5){
       console.log(i9) //1 //2 //3
       if(i9 == 3){
        break
       }
       i9 = i9 + 1 //2 //3
  }

  // continue with for loop

  let i10 = 1
  while(i10 <= 5){
    if(i10 == 3){
        i10 ++ ; //4
        continue
    }
    console.log(i10)//1 //2 //4 //5
    i10 = i10 + 1 //2 //3 //5 //6
  }
  
