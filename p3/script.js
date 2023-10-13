function clearEntries() {
    document.getElementById("aval").value = '';
    document.getElementById("bval").value = '';
    document.getElementById("cval").value = '';
    document.getElementById("min").innerHTML = '';
    document.getElementById("max").innerHTML = '';
    document.getElementById("mean").innerHTML = '';
    document.getElementById("median").innerHTML = '';
    document.getElementById("range").innerHTML = '';
    
};




function result() {
    var a = document.getElementById("aval").value;
    var b = document.getElementById("bval").value;
    var c = document.getElementById("cval").value;
//returns an integer
    var n1 = parseInt(a, 10);
    var n2 = parseInt(b, 10);
    var n3 = parseInt(c, 10);
//every function has been sent to 0
    var max = 0;
    var min = 0;
    var range = 0;
    var median = 0;
    var mean = 0;
    //find min value
    if (n1 < n2) {
    if (n1 < n3)
    min = n1;
    else
    min = n3;
    } else if (n2 < n3)
    min = n2;
    else
    min = n3;
    //find max value
    if (n1 > n2) {
    if (n1 > n3)
    max = n1;
    else
    max = n3;
    } else if (n2 > n3)
    max = n2;
    else
    max = n3
    //calculate range
    range = max - min;
    //calculate median total sum - (max + min) because there are only 3 numbers
    median = (n1 + n2 + n3) - (max + min)
    //calculate mean
    mean = (n1 + n2 + n3) / 3;
    document.getElementById("max").innerHTML = "max = " + max;
    document.getElementById("min").innerHTML = "min = " + min;
    document.getElementById("mean").innerHTML = "mean = " + mean;
    document.getElementById("median").innerHTML = "median = " + median;
    document.getElementById("range").innerHTML = "range = " + range;
    }
    
    