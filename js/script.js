const aF = ["A","B","C","D","E","F"];
//get select
const selectTag = document.querySelector('select');
// controll all types if new push
const types = ["all"], controlTypes = (arrToPush) =>{data.forEach(el => (!arrToPush.includes(el.type)) ?arrToPush.push(el.type):"")}; controlTypes(types); console.log(types)
//insert dinamic into select the options                                                                                                     
const options = (array)=>{array.forEach(el =>{const opt = document.createElement('option'); opt.value= el; opt.innerHTML = el; selectTag.append(opt)})}; options(types);
// creare un arrary di arry di oggetti in base al array delle categorie
const typesObjArr =[];
// creare una funzione di un array basato sul array sopra scritto con un ciclo con un ciclo anidato
const arrArrObj = (basearr,arrTopushArr, objlist)=>{basearr.forEach(types => arrTopushArr.push(objlist.filter(obj=>(obj.type === types))))}; arrArrObj(types,typesObjArr,data,data); console.log(typesObjArr)
const conditionsChecker = (arrary,value)=> {arrary.forEach((array,index) =>{console.log(array.forEach(element=>{(element.type === value)? resetPrint(array): ""}))})}; conditionsChecker(typesObjArr,selectTag.value);
//get row
const row = document.querySelector('.bana');
//color number # length
const numberLength = 6;

//event "change"
selectTag.addEventListener('change',()=>setInterval(()=> {conditionsChecker(typesObjArr,selectTag.value)},100));//resetPrint(data)

//reset at start + under the funciton's
resetPrint(data);
function resetPrint(array){ row.innerHTML = ""; prntHtml(array)};
function prntHtml(array){array.forEach(obj => { const {color, name, prefix} = obj;
        row.innerHTML += `
        <div class="col-12 col-md-4 col-lg-2 mt-4 mb-4">
            <div class="card text-center pb-5 pt-5" style="color: #${randomColor(aF, 10)}">
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
function randomColor(array,max){ const nA = []; for(i = 0; i< numberLength; i++){nA.push(numbrOrAf(array, max))};const color = nA.join(""); return color};

