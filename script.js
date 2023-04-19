const first = document.getElementById("first");
const second = document.getElementById("second");
const mybutton = document.getElementById("mybutton");
const result = document.getElementById("result");

/* mybutton.onclick = function(){
    alert("You have clicked me");
} */
mybutton.addEventListener("click", function(){
    let ftext = first.value;
    let stext = second.value;
    let res = ftext + " " + stext;
    result.innerText = res;
});

const message = document.getElementById("message");
const btns = document.querySelectorAll(".calc .btn");
btns[0].addEventListener('click', function(){//1
    message.value += "1";
});
btns[1].addEventListener('click', function(){//2
    message.value += "2";
});
var fnum = 0;
var snum = 0;
btns[2].addEventListener('click', function(){//+
    fnum = parseInt(message.value);
    message.value = "";
});
btns[3].addEventListener('click', function(){//=
    snum = parseInt(message.value);
    r = fnum+snum;
    message.value = r;
});
btns[4].addEventListener('click', function(){//CE
    message.value = "";
});