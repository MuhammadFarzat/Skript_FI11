$(document).ready(fertig);
var i;
var bilder = Array(3);
function fertig()
{
    for(i = 0; i < 3; i++)
    {
        bilder[i] = "bild"+(i+1)+".jpg";
    }
    $("#bild").attr("src", bilder[0]);
    i = 0;
    $("#bild").click(bildaendern);
}

function bildaendern()
{
    //alert("Servus");
    if(i == 2)
    {
        $("#bild").fadeOut(2000, function()
        {
            $("#bild").attr("src", bilder[0]);
            $("#bild").fadeIn(2000);
            i = 0;
        });
       
       
    }
    else
    {
        $("#bild").fadeOut(2000, function()
        {
            $("#bild").attr("src", bilder[i+1]);
            $("#bild").fadeIn(2000);
            i++;
        });
        
        
    }
}