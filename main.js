const getCharacters = document.querySelector(".getCharacters")
const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2")
const character1 = document.getElementById("character1")
const character2 = document.getElementById("character2")

const butnFunc = (profile)=>{
    const componentBtn = document.querySelectorAll("#componentBtn")
        componentBtn.forEach(button=>{
            button.addEventListener("click", ()=>{
                let dataAttr = button.getAttribute("data-id")
                    if(profile.id==dataAttr){
                        if(button.className=="weight"){
                            console.log("tung som fan")
                        }else if(button.className=="length"){
                            console.log("lång som fan")
                        }else if(button.className=="hairColor"){
                            console.log("vackert hår")
                        }else if(button.className=="gender"){
                            console.log(profile.gender)
                        }
                    }
            })
        })
}


class Character{
    constructor(name,gender,height,mass,haircolor,id){
        this.name = name
        this.gender = gender
        this.height = height
        this.mass = mass
        this.haircolor = haircolor
        this.pictureUrl
        this.id = id
        if(name == "Yoda"){
            this.pictureUrl="./img/yoda.png"
        }else if(name =="Luke Skywalker"){
            this.pictureUrl="./img/lukeSkywalker.png"
        }else if(name =="R2-D2"){
            this.pictureUrl="./img/R2D2.png"
        }else if(name =="Obi-Wan Kenobi"){
            this.pictureUrl="./img/obiWanKenobi.png"
        }else if(name =="Darth Vader"){
            this.pictureUrl="./img/darthVader.png"
        }else if(name =="Wicket Systri Warrick"){
            this.pictureUrl="./img/wicket.png"
        }else if(name =="Boba Fett"){
            this.pictureUrl="./img/bobaFett.png"
        }else if(name =="Ackbar"){
            this.pictureUrl="./img/admiralAckbar.png"
        }else if(name =="Han Solo"){
            this.pictureUrl="./img/HanSolo.png"
        }else if(name =="Chewbacca"){
            this.pictureUrl="./img/Chewbacca.png"
        }else if(name == "Leia Organa"){
            this.pictureUrl="./img/leia.png"
        }
      

    }
}

let character1Component =(user)=>`
<div class="characterCard">
    <div class="info">
    <h1 class="name">${user.name}</h1>
    <img src="${user.pictureUrl}" alt="${user.name}">
        <p class="info"></p>
    </div>
    <div class="buttonContainer">
    <button id="componentBtn" class="weight" data-id="${user.id}">Weight</button>
    <button id="componentBtn" class="length" data-id="${user.id}">Length</button>
    <button id="componentBtn" class="hairColor" data-id="${user.id}">Hair Color</button>
    <button id="componentBtn" class="gender" data-id="${user.id}">Gender</button>
</div>
</div>
`




let fetching = async (chosenOne)=>{
    let response = await fetch(`https://swapi.dev/api/people/${chosenOne}`)
    let data = response.json()
    return data
}

let profile1
let profile2

getCharacters.addEventListener("click",()=>{
    if(character1.value === "null" || character2.value === "null"){
        alert("you need to pick your characters")
    }else{
    fetching(character1.value)
    .then(data=>{
        profile1 = new Character(data.name,data.gender,data.height,data.mass,data.hair_color,character1.value)
        box1.innerHTML = character1Component(profile1)
        butnFunc(profile1)
    })
    
    fetching(character2.value)
    .then(data=>{
        profile2 = new Character(data.name,data.gender,data.height,data.mass,data.hair_color,character2.value)
        box2.innerHTML = character1Component(profile2)
        
        butnFunc(profile2)
    })
    }
})