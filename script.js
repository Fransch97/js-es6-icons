const aF = ["A","B","C","D","E","F"];
//get select
const selectTag = document.querySelector('select');
//get row
const bana = document.querySelector('.bana');
//creat arrays
const animals = data.filter(obj=>(obj.type === "animal")? true: false);
const vegetable = data.filter(obj=>(obj.type === "vegetable")? true:false);
const user = data.filter(obj=> (obj.type === "user")?true : false);
//color number # length
const numberLength = 6;
//event change
selectTag.addEventListener('change', ()=>setInterval(()=>(selectTag.value === "all")? resetPrint(data) :(selectTag.value === "animals")?  resetPrint(animals) :(selectTag.value === "vegetable")?  resetPrint(vegetable)   : resetPrint(user),100));
//reset at start and under the funciton's
resetPrint(data);
function resetPrint(array){ bana.innerHTML = ""; prntHtml(array)};
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
//generate random color all functions
function rndNumber(max){ return Math.floor(Math.random()*max)};
function randmAf(array){ return array[rndNumber(array.length)] };
function numbrOrAf(array, max){ return (rndNumber(2) > 0)? rndNumber(max): randmAf(array)};
function randomColor(array,max){ const nA = []; for(i = 0; i< numberLength; i++){nA.push(numbrOrAf(aF, 10))};const color = nA.join(""); return color}