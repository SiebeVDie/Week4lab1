var Geel = prompt("Is de kaas geel?")

if(Geel == "ja")          {var Gaten = prompt("Zitten er gaten in?") }

else if (Geel == "nee")   {var Schimmel = prompt ("Heeft de kaas blauwe schimmels?")}




if(Gaten == "ja")         {var Duur = prompt ("Is de kaas belachelijk duur")}

else if (Gaten == "nee")    {var Steen = prompt ("Is de kaas hard als steen")}





if (Schimmel == "ja")     {var Korst = prompt ("Heeft de kaas een korst?")}

else if (Schimmel == "nee")     {var Korst2 = prompt ("Heeft de kaas een korst?")}




if (Korst == "ja")  
	document.write("Camembert")

else if (Korst == "nee")  
	document.write("Mozzarella")