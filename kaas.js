
var Geel = prompt("Is de kaas geel?")

//Is de kaas geel?

if(Geel == "ja")         
              {var Gaten = prompt("Zitten er gaten in?") }

else if (Geel == "nee")   
	          {var Schimmel = prompt ("Heeft de kaas blauwe schimmels?")}


//Zitten er gaten in?

if(Gaten == "ja")         
	          {var Duur = prompt ("Is de kaas belachelijk duur")}

else if (Gaten == "nee")    
	          {var Steen = prompt ("Is de kaas hard als steen")}



//Heeft de kaas blauwe schimmel?

if (Schimmel == "ja")     
	         {var Korst = prompt ("Heeft de kaas een korst?")}

else if (Schimmel == "nee")    
	         {var Korst2 = prompt ("Heeft de kaas een korst?")}



//Heeft de kaas een korst? (rechterkant)

if (Korst2 == "ja")  
	        alert("Camembert")


else if (Korst2 == "nee")  
	         alert("Mozzarella")



// Is de kaas belachelijk duur?

if (Duur == "ja") 
             alert("Emmenthaler")


else if (Duur == "nee") 
	         alert("Leerdammer")


//Heeft de kaas een korst (linkerkant)

if (Korst == "ja") 
	         alert("Blue de Rochbaron")


else if (Korst == "nee") 
		     alert("Foume d'Ambert")


//Is de kaas hard als steen?

if (Steen == "ja")
	        alert("Parmigiano Reggiano")


else if (Steen == "nee")
	        alert("Goudse Kaas")