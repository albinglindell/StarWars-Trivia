const getCharacters = document.querySelector(".getCharacters")
const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2")
const infoContainer1 = document.querySelector(".infoContainer1")
const infoContainer2 = document.querySelector(".infoContainer2")
const character1 = document.getElementById("character1")
const character2 = document.getElementById("character2")

infoContainer1.classList.add("hidden")
infoContainer2.classList.add("hidden")

let buttonCheck =(profile,otherGuy,dataAttr,button)=>{
    if(profile.id==dataAttr){
        if(button.className=="weight"){
            profile.weight(otherGuy)
        }else if(button.className=="length"){
            profile.length(otherGuy)
        }else if(button.className=="hairColor"){
            profile.hairColor(otherGuy)
        }else if(button.className=="gender"){
            profile.checkGender(otherGuy)
        }
    }
}


const butnFunc = (profile)=>{
    const componentBtn = document.querySelectorAll("#componentBtn")
        componentBtn.forEach(button=>{
            button.addEventListener("click", ()=>{
                let dataAttr = button.getAttribute("data-id")
                if(profile ===profile1){
                    buttonCheck(profile1,profile2,dataAttr,button)
                }else{
                   buttonCheck(profile2,profile1,dataAttr,button)
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
            this.pictureUrl="./img/Leia.png"
        }
    }
    weight(user){

        let weightDiff =  Math.floor(this.mass) - Math.floor(user.mass)
        if(Number(this.mass) > Number(user.mass)){
            if(this == profile1){
                infoContainer1.classList.remove("hidden")
                infoContainer1.innerHTML= `<h2>Damn! I weigh ${this.mass}kg! and ${user.name} weigh ${user.mass}kg! thats ${weightDiff}kg less than me!</h2>`
            }else if(this == profile2){
                console.log(this.mass,user.mass)
                infoContainer2.classList.remove("hidden")
                infoContainer2.innerHTML= `<h2>Damn! I weigh ${this.mass}kg! and ${user.name} weigh ${user.mass}kg! thats ${weightDiff}kg less than me!</h2>`
            }
        }else if(Number(this.mass) <Number(user.mass)){
            if(this ==profile1){
             infoContainer1.classList.remove("hidden")

                infoContainer1.innerHTML= `<h2>Shiiiii I only weigh ${this.mass}kg! I feel so small next to ${user.name}s ${user.mass}kilos!</h2>`
            }else{
             infoContainer2.classList.remove("hidden")

             infoContainer2.innerHTML= `<h2>Shiiiii I only weigh ${this.mass}kg! I feel so small next to ${user.name}s ${user.mass}kilos!</h2>`
            }
        }else{
            if(this ==profile1){
                infoContainer1.innerHTML= `<h2>We both weigh ${this.mass}kg!</h2>`
            }else{
                infoContainer2.innerHTML= `<h2>We both weigh ${this.mass}kg!</h2>`
            }

        }
    }

    length(user){
        let lengthDiff =  Math.floor(this.height) - Math.floor(user.height)
        if(Number(this.height) > Number(user.height)){
            if(this == profile1){
             infoContainer1.classList.remove("hidden")
                infoContainer1.innerHTML= `<h2>Damn! I am ${this.height}cm, and ${user.name}  is ${user.height}cm! Thats ${lengthDiff} cm less than me!</h2>`
            }else if(this == profile2){
             infoContainer2.classList.remove("hidden")

             infoContainer2.innerHTML= `<h2>Damn! I am ${this.height}cm, and ${user.name}  is ${user.height}cm! Thats ${lengthDiff} cm less than me!</h2>`
            }
        }else if(Number(this.height) < Number(user.height)){
            if(this ==profile1){
             infoContainer1.classList.remove("hidden")

                infoContainer1.innerHTML= `<h2>I am only ${this.height}cm! I hope I grow past ${user.name} and become longer than ${user.height}cm!</h2>`
            }else{
             infoContainer2.classList.remove("hidden")

                infoContainer2.innerHTML= `<h2>I am only ${this.height}cm! I hope I will grow past ${user.name} and become longer than ${user.height}cm!</h2>`
            }
        }else{
            if(this ==profile1){
                infoContainer1.innerHTML= `<h2>We have the exact same length</h2>`
            }else{
                infoContainer2.innerHTML= `<h2>
                We have the exact same length</h2>`
            }

        }
    }

    hairColor(user){
        if(this==profile1){
            if(this.haircolor==="none" || this.haircolor === "n/a"){
                infoContainer1.classList.remove("hidden")
                infoContainer1.innerHTML=`<h2>I am so sad that i dont have any hair :( i wish i had beautiful ${user.haircolor} as ${user.name}</h2>`
            }else if(this.haircolor== user.haircolor){
                infoContainer1.classList.remove("hidden")
                infoContainer1.innerHTML=`<h2>Both me and ${user.name} have the same beautiful haircolor!</h2>`
            }else{
                infoContainer1.classList.remove("hidden")
            infoContainer1.innerHTML=`<h2>Dayum I look good in my ${this.haircolor} hair! I feel sorry for ${user.name} with that ugly ${user.haircolor} hair!</h2>`
            }
        }else{
            if(this.haircolor==="none" || this.haircolor === "n/a"){
                infoContainer2.classList.remove("hidden")
                infoContainer2.innerHTML=`<h2>I am so sad that i dont have any hair :( i wish i had beautiful ${user.haircolor} as ${user.name}</h2>`
            }else if(this.haircolor== user.haircolor){
                infoContainer2.classList.remove("hidden")
                infoContainer2.innerHTML=`<h2>Both me and ${user.name} have the same beautiful haircolor!</h2>`
            }else{
                infoContainer2.classList.remove("hidden")
            infoContainer2.innerHTML=`<h2>Dayum I look good in my ${this.haircolor} hair! I feel sorry for ${user.name} with that ugly ${user.haircolor} hair!</h2>`
            
        }
           
        }
    }
    checkGender(user){
        if(this == profile1){
            if(this.gender==user.gender){
                infoContainer1.classList.remove("hidden")
                infoContainer1.innerHTML=`<h2>Cool! me and ${user.name} is both ${this.gender}</h2>`
            }else{
                infoContainer1.classList.remove("hidden")
                infoContainer1.innerHTML=`<h2>Noob! you are a ${user.gender}! Not a blessed ${this.gender} as me!</h2>`
            }
        }else{
            if(this.gender==user.gender){
            infoContainer2.classList.remove("hidden")
            infoContainer2.innerHTML=`<h2>Cool! me and ${user.name} is both ${this.gender}</h2>`
        }else{
                infoContainer2.classList.remove("hidden")
                infoContainer2.innerHTML=`<h2>Noob! you are a ${user.gender}! Not a blessed ${this.gender} as me!</h2>`
            }
        }
        
    }

}

let character1Component =(user)=>`
<div class="characterCard">
    <div class="info">
    <h1 class="name">${user.name}</h1>
    <img src="${user.pictureUrl}" alt="${user.name}">
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
        infoContainer1.classList.add("hidden")
        infoContainer2.classList.add("hidden")
    fetching(character1.value)
    .then(data=>{
        profile1 = new Character(data.name,data.gender,data.height,data.mass,data.hair_color,character1.value)
        box1.innerHTML = character1Component(profile1)
        console.log(profile1)
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