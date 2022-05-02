var indexdata=JSON.parse(localStorage.getItem("schedule"))||[]

displaymydata(indexdata)
favritearr=[]
function displaymydata(indexdata){
      indexdata.forEach(function(elm){
            var tr=document.createElement("tr")
            
            var td1=document.createElement("td")
            td1.innerText=elm.num

            var td2=document.createElement("td")
            td2.innerText=elm.teama

            var td3=document.createElement("td")
            td3.innerText=elm.teamb

            var td4=document.createElement("td")
            td4.innerText=elm.date

            var td5=document.createElement("td")
            td5.innerText=elm.venue

            var td6=document.createElement("td")
            td6.innerText="Favourites "
            td6.style.color="green"
            td6.style.cursor="pointer"

            td6.addEventListener("click",function(){
                  fovritefunction(elm)
            })

            tr.append(td1,td2,td3,td4,td5,td6)
            document.querySelector("tbody").append(tr)
      })
     

           
}

function fovritefunction(elm)
{
favritearr.push(elm)
localStorage.setItem("favourites",JSON.stringify(favritearr))
}