const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");
const moodSelect = document.getElementById("moodSelect");
const emoji = document.getElementById("emoji");
const button = document.getElementById("changeMoodBtn");
nameInput.addEventListener("input", function()
{
    const name = nameInput.value;
    greeting.textContent = "Hello " + name + "!";
});
button.addEventListener("click", function()
{
    const mood = moodSelect.value;
    if (mood === "happy")
    {
        emoji.textContent = "😄";
        document.body.style.backgroundColor = "pink";
    }
    else if (mood === "sad")
    {
        emoji.textContent = "😢";
        document.body.style.backgroundColor = "grey";
    }
    else if (mood === "angry")
    {
        emoji.textContent = "😡";
        document.body.style.backgroundColor = "red";
    }
    else if (mood === "excited")
    {
        emoji.textContent = "🤩";
        document.body.style.backgroundColor = "yellow";
    }
});