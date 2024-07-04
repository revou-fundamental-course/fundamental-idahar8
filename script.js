const nama = "rahadi";
let age = 20;

let ID = document.getElementById('ID');
console.log(ID);

function generateID () {
    let generation;
    
    if (age >12 && age <20) {
        generation ="adolescence generation";
    }
    else if (age >20 && age <50) {
        generation ="adult generation";
    }
    else if (age >50) {
        generation ="elder generation";
    }
    else if (age >2 && age <12) {
        generation ="kid generation";
    }
    else if (age <2) {
        generation ="baby generation";
    }
    return ID.innerHTML = generation;
}

console.log(nama);
console.log(age);

generateID();