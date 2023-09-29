
// const span = document.querySelector("span")

// let item = parseInt(localStorage.getItem("counter"));

// span.innerText = `${item}`

// if (!item) {
//     localStorage.setItem("counter", 1)
// }else {
//     localStorage.setItem("counter", item + 1);
// }

// span.innerText = localStorage.getItem("counter");


// for (const i in document) {
//     console.log(document[i]);
// }



// projet chess

// let divContainer = document.createElement('div');
// divContainer.classList.add("container_chess")
// document.body.appendChild(divContainer)

// for (let i = 0; i < 8; i++) {
//     for (let j = 0; j < 8; j++) {
//         let cell = document.createElement('div')
//         divContainer.appendChild(cell)
//         if ((i + j)%2 === 0) {
//             cell.classList.add('casse_blanch')
//         }else {
//             cell.classList.add('casse_noir')
//         }
//     }
    
// }


// const lance = document.getElementById("lance");
// const stopee = document.getElementById("stop");
// const effacer = document.getElementById("effacer");
// const memoriser = document.getElementById("memoriser");
// const rappel = document.getElementById("rappel");
// const conterSec = document.getElementById("sec");
// const conterMiliSec = document.getElementById("miliSec");

// conterMiliSec.innerText = "00";
// conterSec.innerText = "00";

// let timer;
// let miliSec = 0;
// let sec = 1;

// lance.addEventListener("click", () => {
//     timer = setInterval(() => {
//     conterMiliSec.innerText = miliSec++;
//       if (miliSec === 99) {
//         miliSec = 0;
//         conterSec.innerText = sec++;
//       }
//     }, 10);
// });


// stopee.addEventListener("click", () => {
//     clearInterval(timer)
// })

// effacer.addEventListener("click", () => {
//     conterMiliSec.innerText = "00";
//     conterSec.innerText = "00";
//     sec = 1;
//     miliSec = 0;
// })

// memoriser.addEventListener("click", () => {
//     localStorage.setItem("sec", sec -1);
//     localStorage.setItem("miliSec", miliSec - 1)
//     sec = localStorage.getItem("sec")
//     miliSec = localStorage.getItem("miliSec")
// })

// rappel.addEventListener("click", () => {
//     conterMiliSec.innerText = localStorage.getItem("miliSec");
//     conterSec.innerText = localStorage.getItem("sec");
// })




// const contenu1 = document.getElementById("contenu1");
// const contenu2 = document.getElementById("contenu2");
// const contenu3 = document.getElementById("contenu3");
// const contenu = document.getElementById("contenu");

// contenu1.addEventListener("click", () => {
//     contenu1.style.backgroundColor = "blue";
//     contenu2.style.backgroundColor = "violet";
//     contenu3.style.backgroundColor = "violet";
//     contenu.innerText = "1";
// });

// contenu2.addEventListener("click", () => {
//     contenu2.style.backgroundColor = "blue";
//     contenu3.style.backgroundColor = "violet";
//     contenu1.style.backgroundColor = "violet";
//     contenu.innerText = "2";
// });

// contenu3.addEventListener("click", () => {
//     contenu3.style.backgroundColor = "blue";
//     contenu2.style.backgroundColor = "violet";
//     contenu1.style.backgroundColor = "violet";
//     contenu.innerText = "3";
// });


// const contenu = document.querySelectorAll(".nav_div");
// const divGrand = document.getElementById("contenu");


// for (const el of contenu) {
//     el.addEventListener("click", () => {
//         el.classList.add("blue")
//         el.classList.remove("blue")
//         divGrand.innerText = el.value;
//     })
// }


// const username = document.getElementById("username");
// const pass = document.getElementById("pass");
// const checkbox = document.getElementById("checkbox");
// const radio = document.querySelectorAll(".radio");
// const bieres = document.getElementById("bieres");
// const story = document.getElementById("story");
// const envoyer = document.getElementById("Envoyer");




// envoyer.addEventListener("click", () => {
//     let vale;
//     let bieresCoche = ``;
//     for(const r of radio) {
//         if(r.checked) {
//             vale = r.value
//         }
//     }

//     for(const biere of bieres) {
//         if(biere.selected) {
//             bieresCoche += `${biere.value} `
//         }
//     }
//    alert(`user name : ${username.value}\n mot de passe : ${pass.value}\n checkbox : ${checkbox.value}\n radio : ${vale}\n bierre : ${bieresCoche}\n story : ${story.value}\n`)
// })


// tab v1
// const inputs = document.querySelectorAll("input")
// console.log(inputs);

// for (let i = 0; i < inputs.length; i++) {
//     console.log(inputs[i].name);
//     inputs[i].addEventListener("input", (e) => {
//         if(!e.currentTarget.value.match(/^[0-9]+$/)) {
//             e.currentTarget.value = e.currentTarget.value.replace(/[aA-zZ @&,"'():ùéàèç!_$*€£`+=\/;?#-]{1,}/g, "")
//             return
//         }
//         inputs[2].value = inputs[0].value * inputs[1].value;
//         inputs[5].value = inputs[3].value * inputs[4].value;
//         inputs[8].value = inputs[6].value * inputs[7].value;
//         inputs[9].value = parseInt(inputs[2].value) + parseInt(inputs[5].value) +  parseInt(inputs[8].value);
//     })
// }

// inputs[10].addEventListener("click", () => {
//     alert(`le prix totale est de ${inputs[9].value}`)
// })

// tab v2
const inputs = document.querySelectorAll("input");
const nameQ = document.querySelectorAll("input[name^='q']");
const namePu = document.querySelectorAll("input[name^='pu']");
const nameP = document.querySelectorAll("input[name^='p']");
const nameTotale = document.querySelectorAll("input[name='total']");

for (let i = 0; i < nameQ.length; i++) {
    inputs[i].addEventListener("input", (e) => {
        if(!e.currentTarget.value.match(/^[0-9]+$/)) {
            e.currentTarget.value = e.currentTarget.value.replace(/[aA-zZ @&,"'():ùéàèç!_$*€£`+=\/;?#-]{1,}/g, "")
            return
        }
        nameP[i].value = nameQ[i].value * namePu[i].value
        nameTotale[i].value = nameQ[i].value;
    })
}







// const img = document.querySelector('img')

// let image = ["image/img1.png","image/img2.png", "image/img3.png" ]
// let i = 0;

// setInterval(() => {
//     img.src = image[i%(image.length)];
//     i++;
// }, 1000);


// const img = document.querySelector('img');
// const gauche = document.getElementById('flech_gauche');
// const droite = document.getElementById('flech_droite');
// let i = 1;

// droite.addEventListener("click", () => {
//     if (i < 6) {
//         i++
//     }
//     img.src = `image/anim${i}.jpg`;
// })

// gauche.addEventListener("click", () => {
//     if (i > 1) {
//         i--
//     }
//     img.src = `image/anim${i}.jpg`;
// })