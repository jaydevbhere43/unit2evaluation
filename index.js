document.querySelector("#masaiForm").addEventListener("submit",getdatafunction)
var data=JSON.parse(localStorage.getItem("schedule"))||[]
function getdatafunction(){
      event.preventDefault()

      var info={
            num:masaiForm.matchNum.value,
            teama:masaiForm.teamA.value,
            teamb:masaiForm.teamB.value,
            date:masaiForm.date.value,
            venue:masaiForm.venue.value  
      }
      data.push(info)
      console.log(data)

      localStorage.setItem("schedule",JSON.stringify(data))
}