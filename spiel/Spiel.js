$(document).ready(fertig);
var frage1 = new Frage("Habe ich Hunger?", "nein", 1000);
var frage2 = new Frage("Wollen wir Ferien?", "nein", 2000);
var frage3 = new Frage("Mag Frau Stremme Katzen?", "ja", 100);
var frage4 = new Frage("Mag Muhammad Katzen?", "ja", 1000);
var frage5 = new Frage("Ist Emanuel schön?", "ja", 1);
var frage6 = new Frage("Hat Lukas rote Haare?", "ja", 4000);
var frage7 = new Frage("Ist Sven ein guter Klassensprecher?", "nein", 100);
var frage8 = new Frage("Ist Beten wichtig?", "ja", 5000);
var frage9 = new Frage("Will ich heim?", "ja", 1000);
var array = new Array(frage1, frage2, frage3, frage4, frage5, frage6, frage7, frage8, frage9);

var f;
var Summe = 0;
var geklickt = true;
var geklickt2 = false;
function fertig()
{

    for(var i = 0; i<9; i++)
    {
        //alert();
        $(".grid").append("<div class='box' id='"+i+"'>"+ array[i].Punkte +"</div>");
        

    }
 
    $(".box").click(fragen);
    

function fragen()
{
    
    f = $(this).attr('id');
    $(this).html(array[f].Fragestellung);
    $(this).css("font-size", "25px");
    $(this).css("background-color", "chartreuse");
    $(this).append('<div class = "antwort">ja</div>');
    $(this).append('<div class = "antwort">nein</div>');
    $(".box").unbind('click');
    $(".antwort").click(pruefen);
    $(this).unbind('click');
}

function pruefen()
{
    var antwort = $(this).html();
    geklickt2 = true;
    if(array[f].Antwort == antwort)
    {
        if(geklickt2 == true)
        {
            $(".antwort").unbind('click');
         
        }
        Summe += parseInt(array[f].Punkte);
        $("#"+f).css("border", "10px solid green");
        alert("Richtige Antwort!\nIhre Summe: "+Summe);
        
    }
    else
    {
        if(geklickt2 == true)
        {
            $(".antwort").unbind('click');
       
        }
        $("#"+f).css("border", "10px solid red");
        alert("Falsche Antwort!\nIhre Summer: "+ Summe);
        
    }
    //$(".antwort").unbind('click');
   // var i = 0;
    /*while(i < 9)
    {
        if($(array[i].Geklickt) != true)
        {
            $(array[i]).click(fragen);
        }
    }*/
}
}
function Frage(fragestellung, antwort, punkte)
{
    this.Fragestellung = fragestellung;
    this.Antwort = antwort;
    this.Punkte = punkte;
}
