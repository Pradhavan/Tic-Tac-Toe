let Run=0
let Value="O"
let Array=[]
Array.fill(null)

function Restart(){
    document.location.reload()
    document.getElementById("Resultboard").innerHTML="X is winner"
    console.log("WINNER IS XO")
}
function Winner(){
//debugger
console.log(Array)
if(Array[0]== Value && Array[1]== Value && Array[2]== Value){document.getElementById('Resultboard').innerHTML = Value +" is Winner"; document.getElementById("BOX").style.pointerEvents = "none";}
if(Array[3]== Value && Array[4]== Value && Array[5]== Value){document.getElementById('Resultboard').innerHTML = Value +" is Winner";document.getElementById("BOX").style.pointerEvents = "none"; }
if(Array[6]== Value && Array[7]== Value && Array[8]== Value){document.getElementById('Resultboard').innerHTML = Value +" is Winner"; document.getElementById("BOX").style.pointerEvents = "none";}
if(Array[0]== Value && Array[3]== Value && Array[6]== Value){document.getElementById('Resultboard').innerHTML = Value +" is Winner";document.getElementById("BOX").style.pointerEvents = "none"; }
if(Array[1]== Value && Array[4]== Value && Array[7]== Value){document.getElementById('Resultboard').innerHTML = Value +" is Winner"; document.getElementById("BOX").style.pointerEvents = "none";}
if(Array[2]== Value && Array[5]== Value && Array[8]== Value){document.getElementById('Resultboard').innerHTML = Value +" is Winner";document.getElementById("BOX").style.pointerEvents = "none"; }
if(Array[0]== Value && Array[4]== Value && Array[8]== Value){document.getElementById('Resultboard').innerHTML = Value +" is Winner";document.getElementById("BOX").style.pointerEvents = "none"; }
if(Array[2]== Value && Array[4]== Value && Array[6]== Value){document.getElementById('Resultboard').innerHTML = Value +" is Winner";document.getElementById("BOX").style.pointerEvents = "none"; }
}

function Test(id)
{
//debugger
let ID=0
if(id=="C0") ID=0
if(id=="C1") ID=1
if(id=="C2") ID=2
if(id=="C3") ID=3
if(id=="C4") ID=4
if(id=="C5") ID=5
if(id=="C6") ID=6
if(id=="C7") ID=7
if(id=="C8") ID=8

Run++;

    if (Value == "X")
    {
        Value ="O";
        //Color ="Yellow";
    }
    else
    { 
        Value ="X";
        //Color ="Gray";
    }

if (Array[ID]==null)
{
 Array[ID]=Value;

if(id == "C0" )
  {
    //document.getElementById(id).style.backgroundColor=xColor;
    document.getElementById(id).innerHTML = Value;
    document.getElementById(id).onclick = function() {
    //disable
    this.disabled = true;
        Winner()
    }
  }
if(id == "C1" )
  {
    //document.getElementById(id).style.backgroundColor=xColor;
    document.getElementById(id).innerHTML = Value;
    document.getElementById(id).onclick = function() {
    //disable
    this.disabled = true;
        Winner()
    }
  }
if(id == "C2" )
  {
    //document.getElementById(id).style.backgroundColor=xColor;
    document.getElementById(id).innerHTML = Value;
    document.getElementById(id).onclick = function() {
    //disable
    this.disabled = true;
        Winner()
    }
  }
if(id == "C3" )
  {
    //document.getElementById(id).style.backgroundColor=xColor;
    document.getElementById(id).innerHTML = Value;
    document.getElementById(id).onclick = function() {
    //disable
    this.disabled = true;
        Winner()
    }
  }
if(id == "C4" )
  {
    //document.getElementById(id).style.backgroundColor=xColor;
    document.getElementById(id).innerHTML = Value;
    document.getElementById(id).onclick = function() {
    //disable
    this.disabled = true;
        Winner()
    }
  }
if(id == "C5" )
  {
    //document.getElementById(id).style.backgroundColor=xColor;
    document.getElementById(id).innerHTML =Value;
    document.getElementById(id).onclick = function() {
    //disable
    this.disabled = true;
        Winner()
    }
  }
if(id == "C6" )
  {
    //document.getElementById(id).style.backgroundColor=xColor;
    document.getElementById(id).innerHTML =Value;
    document.getElementById(id).onclick = function() {
    //disable
    this.disabled = true;
    Winner()
    }
  }
if(id == "C7" )
  {
    //document.getElementById(id).style.backgroundColor=xColor;
    document.getElementById(id).innerHTML =Value;
    document.getElementById(id).onclick = function() {
    //disable
    this.disabled = true;
        Winner()
    }
  }
if(id == "C8" )
  {
    //document.getElementById(id).style.backgroundColor=xColor;
    document.getElementById(id).innerHTML =Value;
    document.getElementById(id).onclick = function() {
    //disable
    this.disabled = true;
        Winner()
    }
  }

if(Run==9)
  {
  document.getElementById("Resultboard").innerHTML = "Match Draw"
    alert("Match Draw");
    //Restart();
  }
}
Winner()
}
