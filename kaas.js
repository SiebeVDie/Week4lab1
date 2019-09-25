var Geel = prompt("Is de kaas geel?")

if(Geel == "ja")          {var Gaten = prompt("Zitten er gaten in?") }

else if (Geel == "nee")   {var Schimmel = prompt ("Heeft de kaas blauwe schimmels?")}




if(Gaten == "ja")         {var Duur = prompt ("Is de kaas belachelijk duur")}

else if (Gaten == "nee")    {var Steen = prompt ("Is de kaas hard als steen")}





if (Schimmel == "ja")     {var Korst = prompt ("Heeft de kaas een korst?")}

else if (Schimmel == "nee")     {var Korst2 = prompt ("Heeft de kaas een korst?")}




if (Korst2 == "ja")  
	document.write("Camembert")

else if (Korst2 == "nee")  
	document.write("Mozzarella")



if (Duur == "ja") 
	document.write("Emmenthaler")

else if (Duur == "nee") 
	document.write("Leerdammer")



if (Korst == "ja") 
	document.write("Blue de Rochbaron")

else if (Korst == "nee") 
		document.write("Foume d'Ambert")

if (Steen == "ja")
	document.write("Parmigiano Reggiano")

else if (Steen == "nee")
	document.write("Goudse Kaas)