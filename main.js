"use strict";

document.getElementById("btn").addEventListener("click", endtest);

function endtest() {
    let q1 = document.getElementById("question1").value;
    console.log(q1);
    let q2 = document.getElementById("question2").value;
    console.log(q2);
    let q3 = document.getElementById("question3").value;
    console.log(q3);
    let q4 = document.getElementById("question4").value;
    console.log(q4);
    let score1 = 0;
    window.scrollTo(500, 0);




    //Question 1
    if (q1 == "Yes" || q1 == "Yea" || q1 == "Ye" || q1 == "yeah" || q1 == "yes" || q1 == "yea" || q1 == "ye" || q1 == "yeah") {
        score1 += 1;
        console.log(score1);
        document.getElementById("question1").style.backgroundColor = "lightgreen";
        document.getElementById("question1comment").innerHTML = "Good Job!"
    }else if (q1 !== "Yes" || q1 !== "Yea" || q1 !== "Ye" || q1 !== "yeah" || q1 !== "yes" || q1 !== "yea" || q1 !== "ye" || q1 !== "yeah") {
        score1 += 0;
        console.log(score1);
        document.getElementById("question1").style.backgroundColor = "lightcoral";
        document.getElementById("question1comment").innerHTML = "lmao you failed no point for you >:)"
    }


    //Question 2
    if (q2 == "Himitsu Sentai Gorenger" || q2 == "himitsu sentai gorenger" || q2 == "Gorenger" || q2 == "gorenger" || q2 == "Himitsu Sentai Goranger" || q2 == "himitsu sentai goranger" || q2 == "Goranger" || q2 == "goranger" ) {
        score1 +=1;
        console.log(score1);
        document.getElementById("question2").style.backgroundColor = "lightgreen";
        document.getElementById("question2comment").innerHTML = "Amazing! you sure are big brain"
    }else if (q2 !== "Himitsu Sentai Gorenger" || q2 !== "himitsu sentai gorenger" || q2 !== "Gorenger" || q2 !== "gorenger" || q2 !== "Himitsu Sentai Goranger" || q2 !== "himitsu sentai goranger" || q2 !== "Goranger" || q2 !== "goranger") {
        score1 +=0;
        console.log(score1);
        document.getElementById("question2").style.backgroundColor = "lightcoral";
        document.getElementById("question2comment").innerHTML = "HAHA wrong you have -200 IQ";
    }
    

    //Question 3
    if (q3 == "Quake" || q3 == "quake") {
        score1 +=1;
        console.log(score1);
        document.getElementById("question3").style.backgroundColor = "lightgreen";
        document.getElementById("question3comment").innerHTML = "Are you a veteran gamer? how did you know?!"
    }else if (q3 !== "Quake" || q3 !== "quake") {
        score1 +=0;
        console.log(score1);
        document.getElementById("question3").style.backgroundColor = "lightcoral";
        document.getElementById("question3comment").innerHTML = "wow you didn't know that? Bet you are a candy crush noob";
    }

    //Question 4
    if (q4 == "Ultraman" || q4 == "ultraman" || q4 == "Ultra-man" || q4 == "ultra-man" || q4 == "ウルトラマン" || q4 == "Urutoraman" || q4 == "urutoraman") {
        score1 +=1;
        console.log(score1);
        document.getElementById("question4").style.backgroundColor = "lightgreen";
        document.getElementById("question4comment").innerHTML = "You, I like. you are smart. I kill you last";
    }else if (q4 !== "Ultraman" || q4 !== "ultraman" || q4 !== "Ultra-man" || q4 !== "ultra-man" || q4 !== "ウルトラマン" || q4 !== "Urutoraman" || q4 !== "urutoraman") {
        score1 +=0;
        console.log(score1);
        document.getElementById("question4").style.backgroundColor = "lightcoral";
        document.getElementById("question4comment").innerHTML = "ok ngl I would get that either if I were you";
    }


    //setting the score
    let pcree = score1 / 4;
    console.log(pcree);
    let pc = pcree * 100;
    console.log(pc);
    document.getElementById("score").innerHTML = " " + score1 + "/4 or -> " + pc + "%";

}