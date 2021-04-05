let text_form = document.getElementsByClassName('text_form');
let output = document.getElementById('output');


function buttonClick(){
    var number = 0
    
    for (let i = 0; i < text_form.length; i++) {
        if (text_form.item(i).value === "運動") {
            number = number + 5;
        }
        else if (text_form.item(i).value === "勉強") {
            number = number + 5;
        }
        else if (text_form.item(i).value === "仕事") {
            number = number + 5;
        } 
    }

    if(number > 14) {
        output.innerHTML = `your socre: ${number} god`
     } else if(number > 10) {
         output.innerHTML = `your socre: ${number} good`
     } else if(number > 5) {
         output.innerHTML = `your socre: ${number} ok`
     } else {
         output.innerHTML = `your socre: ${number} bad`
     }
    
    
    

}