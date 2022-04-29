console.log(data)
const aF = ["A","B","C","D","E","F"];

const selectTag = document.querySelector('select');

const bana = document.querySelector('.bana');

const animals = data.filter(obj=>(obj.type === "animal")? true: false);

const vegetable = data.filter(obj=>(obj.type === "vegetable")? true:false);

const user = data.filter(obj=> (obj.type === "user")?true : false);

const numberLength = 6
resetPrint(data)

selectTag.addEventListener('change', ()=>setInterval(()=>(selectTag.value === "all")? resetPrint(data) :(selectTag.value === "animals")?  resetPrint(animals) :(selectTag.value === "vegetable")?  resetPrint(vegetable)   : resetPrint(user) 
,100))

function prntHtml(array){array.forEach(obj => { const {color, name, prefix} = obj;
        bana.innerHTML += `
        <div class="col-12 col-md-4 col-lg-2 mt-4 mb-4">
            <div class="card text-center pb-5 pt-5" style="color: #${randomColor()}">
                <h1><i class="${prefix}solid ${prefix}${name} "></i></h1>
                <p>${name.charAt(0).toUpperCase() + name.slice(1)}</p>
            </div>
        </div>
        `;
    });
};

function resetPrint(array){ bana.innerHTML = ""; prntHtml(array)};
//generate random number
function rndNumber(max){ return Math.floor(Math.random()*max)};
//generate ramìndom abc
function randmAf(array){ return array[rndNumber(array.length)] };
function numbrOrAf(array, max){ return (rndNumber(2) > 0)? rndNumber(max): randmAf(array)};
function randomColor(array,max){ const nA = []; for(i = 0; i< numberLength; i++){nA.push(numbrOrAf(aF, 10))};const color = nA.join(""); return color}