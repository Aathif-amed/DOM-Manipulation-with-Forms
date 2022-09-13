let button = document.getElementById("submit");
button.addEventListener("click", () => {

    function checkgender() {
        let gender = document.getElementsByName("gender")
        for (let i in gender) {
            if (gender[i].checked) {
                return gender[i].value
            }
        }
    }

    function cofIs2() {
        let cof = document.getElementsByName("cof");
        let count = 0;
        let cof_arr = [];
        for (let i in cof) {
            if (cof[i].checked) {
                count++;
                cof_arr.push(cof[i].value);
            }
        }
        if (count >= 2) {
            let a = cof_arr.join(" , ");
            return a;
        } else {
            return false;
        }

    }

    let fName = document.getElementById("first-name").value;
    let lName = document.getElementById("last-name").value;
    let address = document.getElementById("address").value;
    let pincode = document.getElementById("pincode").value;
    let g = checkgender();
    let c = cofIs2();
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;
    let form = document.getElementById("form");
    let tbbody = document.getElementById("tblBody");

    if (!cofIs2()) {
        alert("Must Select Atleast 2 Choices of Food")

    } else {
        tbbody.innerHTML += `<td>${fName}</td>
    <td>${lName}</td>
    <td>${address}</td>
    <td>${pincode}</td>
    <td>${g}</td>
    <td>${c}</td>
    <td>${state}</td>
    <td>${country}</td>`

    }
    //  form.reset();
});