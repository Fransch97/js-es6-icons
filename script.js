console.log("yes master");

// **Milestone 1**
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.
// **Milestone 2**
// Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
// **Milestone 3**
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone *(animal, vegetable, user)*. Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
// **BONUS**
// 1- modificare la struttura dati fornita e valorizzare la proprietà “color” in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo “#” seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
// 2- popolare le options della select della milestone 3 dinamicamente.

console.log(data)

// riconoscenere il valore select FATTO
//devo separare i tipi ?array diversi?
//devo filtrare i nomi
//devo filtrare 
// <!-- CARD  -->
// <div class="col-12 col-md-6 col-lg-2">
//     <div class="card text-center">
//         <h1><i class="fa-solid fa-horse "></i></h1>
//         <p>Cavallo</p>
//     </div>
// </div>
// <!--END CARD  -->

const selectTag = document.querySelector('select');
console.log(selectTag);

const bana = document.querySelector('.bana');


const animals = data.filter(obj=>(obj.type === "animal")? true: false);
console.log(animals ,"animals")

const vegetable = data.filter(obj=>(obj.type === "vegetable")? true:false);
console.log(vegetable ,"vegetable")

// testing else if destruttured XD
// const user = data.filter(obj=> (obj.type === "user")?true :(obj.type === "animal")? true: "");
const user = data.filter(obj=> (obj.type === "user")?true : false);
console.log(user ,"user")

selectTag.addEventListener('change', ()=>{
    console.log(selectTag.value);
(selectTag.value === "all")? resetPrint(data) :(selectTag.value === "animals")?  resetPrint(animals) :(selectTag.value === "vegetable")?  resetPrint(vegetable)   : resetPrint(user); 
})


function prntHtml(array){
    console.log(bana)
    array.forEach(obj => {
        const {color, name, prefix,} = obj;
        bana.innerHTML += `
        <div class="col-12 col-md-6 col-lg-2 ">
            <div class="card text-center pb-5 pt-5" style="color: ${color}">
                <h1><i class="${prefix}-solid ${prefix}${name} "></i></h1>
                <p>${name.charAt(0).toUpperCase() + name.slice(1)}</p>
            </div>
        </div>
        `;
    });
}

function resetPrint(array){
    bana.innerHTML = ""
    prntHtml(array)
}