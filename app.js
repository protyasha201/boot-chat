const person1 = document.getElementById("person-1");
const person2 = document.getElementById("person-2");
const sendMessageOne = document.getElementById("send-message-1");
const sendMessageTwo = document.getElementById("send-message-2");
const personMessageFirst = document.getElementById("person1-message");
const personMessageTwo = document.getElementById("person2-message");


const enter = (id, button) => {
    id.addEventListener("keypress", (e) => {
        if (e.key == "Enter") {
            button.click();
        }
    })
}


sendMessageOne.addEventListener("click", () => {
    const div = document.createElement("div");
    div.className = "textsFirst";

    const texts1 = `
    <h3>${person1.value}</h3>
    `
    div.innerHTML = texts1;
    personMessageTwo.appendChild(div);

    div.style.display = "block";
    person1.value = "";
})


sendMessageTwo.addEventListener("click", () => {
    const div = document.createElement("div");
    div.className = "textsFirst";

    const texts2 = `
    <h3>${person2.value}</h3>
    `

    div.innerHTML = texts2;

    personMessageFirst.appendChild(div);

    div.style.display = "block";

    person2.value = "";
})


enter(person1, sendMessageOne);
enter(person2, sendMessageTwo);