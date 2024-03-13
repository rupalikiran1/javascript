let buttonOne = document.querySelector('#one')
let inputText = document.querySelector('input')
let ilList = document.querySelector('ul')

buttonOne.addEventListener('click',function(){
    let text = inputText.value
    let newLi = document.createElement('li') //<li></li>
    newLi.textContent = text // <li>papaya</li>

    CreateButton("Remove",'remove',newLi)
    CreateButton("Up",'up',newLi)
    CreateButton("Down",'down',newLi)

    //CreateButton(newLi)
      ulList.appendChild(newLi)
    inputText.value = ''
})
{/* <button class = "remove">Remove</button>
    <button class = "up">Up</button>
     <button class = "down">Down</button>*/
}


function CreateButton(textContent,className,li){
    let newButton = document.createElement('button')
    newButton.textContent = textContent
    newButton.classList.add(className)
    li.appendChild(newButton)
}

//or 
//function CreateButton(li){
    // let r = document.CreateElement('button')//<button></button>
    // r.textContent = "Remove" //<button>Remove</button>
    // r.classList.add('remove') //<button class = "remove">Remove</button>
    // li.appendChild(r)

    // let u = document.CreateElement('button')//<button></button>
    // u.textContent = "Up" //<button>Up</button>
    // u.classList.add('up') //<button class = "up">Up</button>
    // li.appendChild(u)

   // let d = document.CreateElement('button')//<button></button>
     //d.textContent = "Down" //<button>Down</button>
    // d.classList.add('down') //<button class = "down">Down</button>
  //   li.appendChild(d)


//}