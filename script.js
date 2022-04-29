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

// <!-- CARD  -->
// <div class="col-12 col-md-6 col-lg-2">
//     <div class="card text-center">
//         <h1><i class="fa-solid fa-horse "></i></h1>
//         <p>Cavallo</p>
//     </div>
// </div>
// <!--END CARD  -->

const selectTag = document.querySelector('select')
console.log(selectTag)

selectTag.addEventListener('focus', function(){
    const getValue = setInterval(()=>console.log(selectTag.value),500);
    setTimeout(()=>clearInterval(getValue), 10000);
})

data.forEach(object => console.log(object))