function toggleBulb()
{
    let bulb = document.getElementById("bulbImage");
    if (bulb.src.includes("bulboff"))
        {
            bulb.src = "Images/Bulb1.png";
        }
    else
        {
            bulb.src = "Images/Bulb2.png";
        }
}