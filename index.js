let display = document.getElementById(`displayBox`);


function addToDisplay (term)
{
    if (display.value === "Error")
    {
        allClearDisplay();   
    }
    display.value += term;
}

function clearDisplay ()
{
    if (display.value === "Error")
    {
        allClearDisplay();   
    }
    display.value = display.value.slice(0, -1);
}

function allClearDisplay ()
{
    display.value = null;
    display.style.color = "black";
}

function calculateDisplay ()
{
    try
    {
        if (display.value == "" || display.value == null)
        {
            return;
        }
        if (display.value == "Error")
        {
            allClearDisplay();
            return;
        }

        display.value = display.value.replaceAll('÷', '/');
        display.value = display.value.replaceAll('×', '*');
        display.value = eval(display.value);
    }
    catch (error)
    {
        display.style.color = "red";
        display.value = "Error";
    }
}