let students = new Array(
    new Array("Nguyễn Văn A", 22, 7.5),
    new Array("Lê Thị B", 18, 8.3),
    new Array("Phan Văn C", 22, 6.5),
    new Array("Vũ Văn D", 19, 8.4),
    new Array("Ngô Văn E", 21, 3.5)
);

function fillData1(){
    const datatable = document.getElementById("datatable");
    for(let i=0; i<students.length; i++){
        let row = datatable.insertRow(i+1);
        row.setAttribute("class", "bg-light text-dark");
        let col = new Array(students[0].length+1);
        for(let j=0; j<=students[i].length; j++)
            col[j] = row.insertCell(j);
        col[0].innerHTML = (i+1);
        for(let j=1; j<=students[i].length; j++){
            col[j].innerHTML = students[i][j-1];
        }
    }
}
function fillData2(){
    const contentdata = document.getElementById("contentdata");
    let str_result = "";
    for(let i=0; i<students.length; i++){
        str_result += "<tr>";
        let temp = "<td>"+(i+1)+"</td>";
        for(let j=0; j<students[i].length; j++){
            temp+="<td>"+students[i][j]+"</td>"
        }
        str_result+=(temp+"</tr>");
    }
    //console.log(str_result);
    contentdata.innerHTML = str_result;
}
function fillData3(){
    const contentdata = document.getElementById("filterdata");
    let str_result = "";
    for(let i=0; i<students.length; i++){
        if(students[i][1]>=20){
            str_result += "<tr>";
            let temp = "<td>"+(i+1)+"</td>";
            for(let j=0; j<students[i].length; j++){
                temp+="<td>"+students[i][j]+"</td>"
            }
            str_result+=(temp+"</tr>");
        }
    }
    //console.log(str_result);
    contentdata.innerHTML = str_result;
}

document.addEventListener("DOMContentLoaded", function(){
    fillData1();
    fillData2();
    fillData3();
});