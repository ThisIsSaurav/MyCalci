let string = "";
let calci_buttons = document.querySelectorAll(".calci-layer-button");
let input_bar = document.getElementById("input-bar")
let equal = document.getElementById("equal");
let result_bar = document.getElementById("result-bar")
let value_bar = document.getElementById("value-bar")
let myarray;


let array_button = Array.from(calci_buttons);
array_button.forEach(item => {
    item.addEventListener("click", function () {
        audio.play();
        if (item.innerHTML == "=") {
            value_bar.value = string;
            string = eval(string);
            result_bar.value = string;
            string = "";
            input_bar.value = string;
        }
        else if (item.innerHTML == "C") {
            string = "";
            input_bar.value = string;
            result_bar.value = string;
            value_bar.value = string;
        }
        else if (item.innerHTML == "X") {
            myarray = string.split("");
            console.log(string)
            myarray.pop();
            string = myarray.join("");
            console.log(string);
            input_bar.value = string;
        }
        else {
            string = string + item.innerHTML;
            input_bar.value = string;
            if (string.length == 0) {
                input_bar.style.fontSize = "23px"
            }
            else if (string.length > 25) {
                input_bar.style.fontSize = "15px"
            }
        }


    })
})

function play() {
    let audio = document.getElementById("audio");
    audio.play();
}


