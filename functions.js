function checkZip() {
    const zip = document.getElementsByID("zip");
    if (zip > 20000) {
        return true;
    }else {
        return false;
    }
}

function total() {
    document.getElementByID("classic").value = 3; document.getElementByID("premium").value = 5; document.getElementByID("royal").value = 7;
    document.getElementById("_10").value = 0.10; document.getElementByID("_15").value = 0.15; document.getElementByID("_20").value = 0.2;

    var price = document.getElementsByClassName("style").value ;
    var tip = document.getElementsByClassName("tip").value;
    for( i = 0; i < price.length; i++ ) {
        if(price[i].type = "radio" && price[i].checked) {
            document.getElementsByClassName("style")
        }
    }
    
    var x = price * tip;
    var cost = price + x;
    document.getElementsByID("total").innerhtml = cost;
}

/* 
if(ele[i].checked)
    document.getElementById("result").innerHTML += ele[i].name + " Value: " + ele[i].value + "<br>";
*/