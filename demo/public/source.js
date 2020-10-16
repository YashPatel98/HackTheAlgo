var text1, text2;
var functionsCalls = [];
var Interval;

function animationsCaller() {
    if (functionsCalls.length > 0) {
        functionsCalls[0]();
        functionsCalls.splice(0, 1);
    }
    else {

        clearInterval(Interval);

        document.getElementById("text1").disabled = false;
        document.getElementById("text2").disabled = false;
        document.getElementById("viso").disabled = false;
        document.getElementById("calco").innerHTML="Calculate"
    }
}

function changer() {
    let root = document.documentElement;
    let speed = (document.getElementById("speed").value / 6);
    root.style.setProperty('--animdur', `${speed}s`);
    console.log(`the speed is ${speed}`)
    clearInterval(Interval);
    Interval = setInterval(animationsCaller, speed * 1000)
}


function uniOutline(x, y) {
    functionsCalls.push(
        () => {
            document.getElementById(`box${x - 1}_${y - 1}`).classList.remove("checked", "current")
            void document.getElementById(`box${x - 1}_${y - 1}`).offsetWidth; // trigger a DOM reflow

            document.getElementById(`box${x}_${y}`).classList.remove("checked", "current")
            void document.getElementById(`box${x}_${y}`).offsetWidth; // trigger a DOM reflow

            document.getElementById("firstif").classList.remove("visited-line")
            void document.getElementById("firstif").offsetWidth;

            document.getElementById("firstifline").classList.remove("visited-line")
            void document.getElementById("firstifline").offsetWidth;

            document.getElementById(`box${x - 1}_${y - 1}`).classList.add("checked")
            document.getElementById(`box${x}_${y}`).classList.add("current")

            document.getElementById("firstif").classList.add("visited-line")
            document.getElementById("firstifline").classList.add("visited-line")


        });
}

function biOutline(x, y) {
    functionsCalls.push(
        () => {
            document.getElementById(`box${x - 1}_${y}`).classList.remove("checked", "current")
            void document.getElementById(`box${x - 1}_${y}`).offsetWidth; // trigger a DOM reflow

            document.getElementById(`box${x}_${y - 1}`).classList.remove("checked", "current")
            void document.getElementById(`box${x}_${y - 1}`).offsetWidth;

            document.getElementById(`box${x}_${y}`).classList.remove("checked", "current")
            void document.getElementById(`box${x}_${y}`).offsetWidth;


            document.getElementById("firstelse").classList.remove("visited-line")
            void document.getElementById("firstelse").offsetWidth;

            document.getElementById("firstelseline").classList.remove("visited-line")
            void document.getElementById("firstelseline").offsetWidth;

            document.getElementById(`box${x - 1}_${y}`).classList.add("checked")
            document.getElementById(`box${x}_${y - 1}`).classList.add("checked")
            document.getElementById(`box${x}_${y}`).classList.add("current")

            document.getElementById("firstelse").classList.add("visited-line")
            document.getElementById("firstelseline").classList.add("visited-line")

        });
}

function last(x, y, incommon) {
    functionsCalls.push(
        () => {
            document.getElementById(`box${x}_${y}`).classList.remove("checked", "current")
            void document.getElementById(`box${x}_${y}`).offsetWidth;
            document.getElementById(`box${x}_${y}`).classList.add("visited-box");

            if (!(x == 0 || y == 0) && incommon == true) {
                var character = document.createElement("div");
                character.innerHTML = text1[y - 1];
                document.getElementById("letters").prepend(character);
                character.style.setProperty('display', 'inline-block');
                character.style.setProperty('--animate-duration', `${(document.getElementById("speed").value / 6)}s`);
                character.style.setProperty('--animation-delay', `${(document.getElementById("speed").value / 6) + 1}s`);
                character.style.setProperty('transform', 'translateZ(0)');

                character.classList.add('animate__animated', "animate__slideInRight");
            }

        });

}

function last2(x, y, incommon) {

            document.getElementById(`box${x}_${y}`).classList.remove("checked", "current")
            void document.getElementById(`box${x}_${y}`).offsetWidth;
            document.getElementById(`box${x}_${y}`).classList.add("visited-box");

            if (!(x == 0 || y == 0) && incommon == true) {
                var character = document.createElement("div");
                character.innerHTML = text1[y - 1];
                document.getElementById("letters").prepend(character);
                character.style.setProperty('display', 'inline-block');
                character.style.setProperty('--animate-duration', `${(document.getElementById("speed").value / 6)}s`);
                character.style.setProperty('--animation-delay', `${(document.getElementById("speed").value / 6) + 1}s`);
                character.style.setProperty('transform', 'translateZ(0)');

                character.classList.add('animate__animated', "animate__slideInRight");
            }

}

function assign(x, y, st) {
    functionsCalls.push(
        () => {
            document.getElementById(`inner${x}_${y}`).classList.add("innered");
        })
}

function fillRow(new_row, l1, r) {
    for (let i = 0; i < 2; i++) {
        let new_square = document.createElement("div");
        new_square.className = "box";

        let new_inner = document.createElement("div");
        new_inner.className = "inner";

        new_square.appendChild(new_inner)

        new_row.appendChild(new_square);
    }
    for (let i = 0; i <= l1; i++) {
        let new_square = document.createElement("div");
        new_square.className = "box";
        new_square.id = "box" + r + "_" + i;

        let new_inner = document.createElement("div");
        new_inner.className = "inner";
        new_inner.id = "inner" + r + "_" + i;

        new_square.appendChild(new_inner)

        new_row.appendChild(new_square);
    }
}
function fillJ(l1) {
    var new_row = document.createElement("div");
    new_row.className = "row";
    new_row.id = "row-2";
    document.getElementById("grid").appendChild(new_row)


    let new_square = document.createElement("div");
    new_square.className = "box";
    new_row.appendChild(new_square);
    new_square.style.background="transparent";
    new_square.style.color="black";


    let jj = document.createElement("div");
    jj.className = "box";
    jj.id = "j";
    let jjinner = document.createElement("div");
    jjinner.className = "inner innered";
    jj.appendChild(jjinner)
    jjinner.innerHTML = "j";
    new_row.appendChild(jj);
    jj.style.background="transparent";
    jj.style.color="black";

    for (let i = 0; i <= l1; i++) {
        let new_square = document.createElement("div");
        new_square.className = "box";
        new_square.id = `j_${i}`;

        let new_inner = document.createElement("div");
        new_inner.className = "inner innered";
        new_inner.innerHTML = i;
        new_square.appendChild(new_inner)

        new_row.appendChild(new_square);

        new_square.style.background="transparent";
        new_square.style.color="black";
    }
}
function fillText1(l1, text1) {
    var new_row = document.createElement("div");
    new_row.className = "row";
    new_row.id = "row-1";
    document.getElementById("grid").appendChild(new_row)

    let ii = document.createElement("div");
    ii.className = "box";
    let iinn = document.createElement("div");
    iinn.className = "inner innered";
    iinn.innerHTML = "i";
    ii.appendChild(iinn)
    new_row.appendChild(ii);
    ii.style.background = "transparent";
    ii.style.color = "black";

    for (j = 0; j < 2; j++) {
        let new_square = document.createElement("div");
        new_square.className = "box";
        new_row.appendChild(new_square);
        new_square.style.background = "transparent";
        new_square.style.color = "black";
    }

    for (let i = 0; i < l1; i++) {
        let new_square = document.createElement("div");
        new_square.className = "box";
        new_square.id = `L1_${i}`;

        let new_inner = document.createElement("div");
        new_inner.className = "inner innered";
        new_inner.innerHTML = text1[i];
        new_square.appendChild(new_inner)

        new_row.appendChild(new_square);

        new_square.style.background = "transparent";
        new_square.style.color = "black";
    }
}

function LCS() {
    clearInterval(Interval);
    functionsCalls = [];

    document.getElementById("grid").innerHTML = '';
    text1 = document.getElementById("text1").value.toLowerCase()
    text2 = document.getElementById("text2").value.toLowerCase()
    var l1 = text1.length
    var l2 = text2.length

    console.log(`${text1} length is ${l1} and ${text2} len is ${l2}`)
    if (l1 == 0 || l2 == 0) {
        return 0;
    }
    document.getElementById("grid").style.display="block"
    document.getElementById("grid").classList.add("animate__animated","animate__slideInLeft");
    document.getElementsByClassName("code")[0].style.display="block"
    document.getElementsByClassName("code")[0].classList.add("animate__animated","animate__slideInRight");
    
    document.getElementById("result").style.display="block"
    document.getElementById("letters").innerHTML = '';

    document.getElementById("desc").style.display="none"

    document.getElementById("text1").disabled = true;
    document.getElementById("text2").disabled = true;
    document.getElementById("viso").disabled = true;
    document.getElementById("calco").innerHTML="Skip"

    var DP_table = new Array(l2 + 1);

    fillJ(l1);
    fillText1(l1, text1);
    for (var i = 0; i < DP_table.length; i++) {
        var new_row = document.createElement("div");
        new_row.className = "row";
        new_row.id = "row" + i;
        document.getElementById("grid").appendChild(new_row)
        fillRow(new_row, l1, i)
        DP_table[i] = new Array(l1 + 1);
    }

    DP_table[0][0] = 0;
    document.getElementById("inner0_0").innerHTML = "0";
    document.getElementById(`inner0_0`).classList.add("innered");

    for (let s = 0; s <= l2; s++) {
        let row = document.getElementById(`row${s}`).childNodes
        let I = row[0]
        I.id = `i_${s}`
        I.childNodes[0].innerHTML = s
        I.childNodes[0].classList.add("innered")
        I.style.background = "transparent";
        I.style.color = "black";

        let L = row[1]
        L.style.background = "transparent";
        L.style.color = "black";
        if (s > 0) {
            L.id = `L2_${s - 1}`
            L.childNodes[0].innerHTML = text2[s - 1];
            L.childNodes[0].classList.add("innered")
        }
    }

    for (var x = 1; x <= l1; x++) {
        DP_table[0][x] = 0;
        document.getElementById(`inner0_${x}`).innerHTML = "0";
        document.getElementById(`inner0_${x}`).classList.add("innered");
    }
    for (var x = 1; x <= l2; x++) {
        DP_table[x][0] = 0;
        document.getElementById(`inner${x}_0`).innerHTML = "0";
        document.getElementById(`inner${x}_0`).classList.add("innered");
    }

    for (var i = 1; i <= l2; i++) {
        for (var j = 1; j <= l1; j++) {

            if (text1[j - 1] == text2[i - 1]) {
                uniOutline(i, j);
                DP_table[i][j] = DP_table[i - 1][j - 1] + 1;
            }
            else {
                biOutline(i, j);
                DP_table[i][j] = Math.max(DP_table[i - 1][j], DP_table[i][j - 1]);
            }

            document.getElementById(`inner${i}_${j}`).innerHTML = DP_table[i][j];
            assign(i, j);
        }
    }



    var i = l2, j = l1;

    while (i >= 0 && j >= 0) {

        if (i == 0 || j == 0) {
            last(i, j, false);
            break;
        }
        if (DP_table[i][j] != Math.max(DP_table[i - 1][j], DP_table[i][j - 1])) {
            last(i, j, true);
            i--;
            j--;
        }
        else {
            last(i, j, false);

            if (DP_table[i][j] == DP_table[i - 1][j]) {
                i--;
            }
            else {
                j--;
            }
        }
    }

    Interval = setInterval(animationsCaller, (document.getElementById("speed").value / 6)*1000)
}

function visualize() {
    clearInterval(Interval);
    functionsCalls = [];

    document.getElementById("grid").innerHTML = '';
    text1 = document.getElementById("text1").value.toLowerCase()
    text2 = document.getElementById("text2").value.toLowerCase()
    var l1 = text1.length
    var l2 = text2.length
    
    console.log(`${text1} length is ${l1} and ${text2} len is ${l2}`)
    if (l1 == 0 || l2 == 0) {
        return 0;
    }

    document.getElementById("text1").disabled = false;
    document.getElementById("text2").disabled = false;
    document.getElementById("viso").disabled = false;
    document.getElementById("calco").innerHTML="Calculate"

    document.getElementById("grid").style.display="block"
    document.getElementById("grid").classList.add("animate__animated","animate__slideInLeft");
    document.getElementsByClassName("code")[0].style.display="none"

    document.getElementById("result").style.display="block";
    document.getElementById("letters").innerHTML = '';
    
    document.getElementById("desc").style.display="none"
    
    var DP_table = new Array(l2 + 1);

    fillJ(l1);
    fillText1(l1, text1);
    for (var i = 0; i < DP_table.length; i++) {
        var new_row = document.createElement("div");
        new_row.className = "row";
        new_row.id = "row" + i;
        document.getElementById("grid").appendChild(new_row)
        fillRow(new_row, l1, i)
        DP_table[i] = new Array(l1 + 1);
    }

    DP_table[0][0] = 0;
    document.getElementById("inner0_0").innerHTML = "0";
    document.getElementById(`inner0_0`).classList.add("innered");

    for (let s = 0; s <= l2; s++) {
        let row = document.getElementById(`row${s}`).childNodes
        let I = row[0]
        I.id = `i_${s}`
        I.childNodes[0].innerHTML = s
        I.childNodes[0].classList.add("innered")
        I.style.background = "transparent";
        I.style.color = "black";

        let L = row[1]
        L.style.background = "transparent";
        L.style.color = "black";
        if (s > 0) {
            L.id = `L2_${s - 1}`
            L.childNodes[0].innerHTML = text2[s - 1];
            L.childNodes[0].classList.add("innered")
        }
    }

    for (var x = 1; x <= l1; x++) {
        DP_table[0][x] = 0;
        document.getElementById(`inner0_${x}`).innerHTML = "0";
        document.getElementById(`inner0_${x}`).classList.add("innered");
    }
    for (var x = 1; x <= l2; x++) {
        DP_table[x][0] = 0;
        document.getElementById(`inner${x}_0`).innerHTML = "0";
        document.getElementById(`inner${x}_0`).classList.add("innered");
    }

    for (var i = 1; i <= l2; i++) {
        for (var j = 1; j <= l1; j++) {

            if (text1[j - 1] == text2[i - 1]) {
                DP_table[i][j] = DP_table[i - 1][j - 1] + 1;
            }
            else {
                DP_table[i][j] = Math.max(DP_table[i - 1][j], DP_table[i][j - 1]);
            }

            document.getElementById(`inner${i}_${j}`).innerHTML = DP_table[i][j];
            document.getElementById(`inner${i}_${j}`).classList.add("innered");
        }
    }



    var i = l2, j = l1;

    while (i >= 0 && j >= 0) {

        if (i == 0 || j == 0) {
            last2(i, j, false);
            break;
        }
        if (DP_table[i][j] != Math.max(DP_table[i - 1][j], DP_table[i][j - 1])) {
            last2(i, j, true);
            i--;
            j--;
        }
        else {
            last2(i, j, false);

            if (DP_table[i][j] == DP_table[i - 1][j]) {
                i--;
            }
            else {
                j--;
            }
        }
    }

}