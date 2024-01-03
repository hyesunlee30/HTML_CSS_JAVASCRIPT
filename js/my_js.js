function updateDemo2() {
    const demo2 = document.getElementById("demo2")
    if(demo2.style.backgroundColor == "blue") {
        demo2.style.backgroundColor = "red";
    } else if(demo2.style.backgroundColor == "red"){
        demo2.style.backgroundColor = "blue";
    } else {
        demo2.style.backgroundColor = "blue";
    }
}
