var student = {
    name: "",
    type: "student"
};

document.addEventListener('DOMContentLoaded',contentLoaded);

function contentLoaded(event) 
{
document.getElementById('name').addEventListener("keyup",keyUp);

}

function keyUp(event) {
    calculateNumericOutput(); 
     
}

function calculateNumericOutput() {
    student.name = document.getElementById("name").value;

    var totalValue = 0;
    for(var i=0;i<student.name.length;i++) {
        totalValue = totalValue + student.name.charCodeAt(i); 
    }


    var output = "Total Value : " + totalValue;
document.getElementById("output").innerText = output;
}




