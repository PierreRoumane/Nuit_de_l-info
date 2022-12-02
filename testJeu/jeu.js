var monTableau = [
    [0, 0],
    [0, 0]
   ];

   //document.write(monTableau[0][0] + " " + monTableau[0][1] +"<br/>"+ monTableau[1][0] + " " + monTableau[1][1])

var btn = document.querySelector('input');
var txt = document.querySelector('p');
   
btn.addEventListener('click', updateBtn);
   
function updateBtn() {
    if (btn.value === 'Démarrer la machine') {
       btn.value = 'Arrêter la machine';
       txt.textContent = 'La machine est allumé.';
    } else {
       btn.value = 'Démarrer la machine';
       txt.textContent = 'La machine est arrêtée.';
    }
}