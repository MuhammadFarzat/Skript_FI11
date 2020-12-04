$(document).ready(fertig);

function fertig()
{
    $("#aufnehmen").click(anhaengen);
}

function anhaengen()
{
    if($("#name").val() == "")
    {
        alert("Der Feld ist leer!");
    }
    else
    {
        var wert = $("#name").val();
        var wert2 = "<li>" +wert+ "</li>";
        $("#liste").append(wert2);
        $("#name").val(""); 
        $("li").click(loeschen);
    }
    
}

function loeschen()
{
    this.remove();
}