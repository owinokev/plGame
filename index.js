function league(gscored, gwon, gdrawn, glost, points, position, coach, captain, stadium, topscorer){
    this.gscored = gscored;
    this.gwon = gwon;
    this.gdrawn = gdrawn;
    this.glost = glost;
    this.points = points;
    this.position = position;
    this.coach = coach;
    this.captain = captain;
    this.stadium = stadium;
    this.topscorer= topscorer
}
var mancity = new league(94, 28, 5, 5,89, 1, 'guardiola','iikay', 'etihad', 'haaland' )
var arsenal = new league(88, 26, 6, 6,84, 2, 'mikel','odegaard', 'emirates', 'martinelli' )
var manutd = new league(58, 23, 6, 9,75, 3, 'erik','bruno', 'old trafford', 'rashford' )
var newcastle = new league(68, 19, 14, 5,71, 4, 'eddie','trippier', 'st james park', 'wilson' )
var liverpool = new league(75, 19, 10, 9,67, 5, 'klopp','henderson', 'anfield', 'salah' )
var brighton = new league(53, 18, 8, 12,62, 6, 'roberto','dunk', 'ammex', 'mac allister' )
var astonvilla = new league(51, 18, 7, 13,61, 7, 'emery','john', 'villa park', 'watkins' )
var spurs = new league(70, 18, 6, 14,60, 8, 'conte','kane', 'tottenham stadium', 'kane' )
var brenford = new league(58, 15, 14, 9,59, 9, 'thomas','jansson', 'brenford', 'toney' )
var fulham = new league(55, 15, 7, 16,52, 10, 'silva','thomas', 'craven cottage', 'mitrovic' )
var palace = new league(40, 11, 12, 15,45, 11, 'hodson','milivojevic', 'selhurt park', 'eze' )
var chelsea = new league(38, 11, 11, 16,44, 12, 'lampard','silva', 'stamford bridge', 'havertz' )
var wolves = new league(31, 11, 8, 19,41, 13, 'lopetegui','neves', 'molineux', 'neves' )
var westham = new league(42, 11, 7, 20,40, 14, 'moyes','rice', 'london stadium', 'benrahma' )
var bournemouth = new league(37, 11, 6, 21,39, 15, 'andoni','bruno', 'vitality', 'billing' )
var nottingham = new league(38, 9, 11, 18,38, 16, 'andy','bruno', 'city ground', 'awoniyi' )
var everton = new league(34, 8, 12, 18,36, 17, 'lampard','coleman', 'goodisno', 'mcneil' )
var leicester = new league(51, 9, 7, 22,34, 18, 'rodgers','evans', 'kingpower', 'rashford' )
var leeds = new league(48, 7, 10, 21,31, 19, 'marsch','bruno', 'elland road', 'rodrigo' )
var southampton = new league(36, 6, 7, 25,25, 20, 'ralph','prowse', 'st marys', 'prowse' )
answers= [mancity, arsenal, manutd, newcastle, liverpool, brighton, astonvilla, spurs, brenford,
fulham, palace, chelsea, wolves, westham, bournemouth, nottingham, everton, leicester, leeds, southampton]


var teams =["Manchester city", "Arsenal", "Manchester United", "Newcastle United", "Liverpool",
"Brighton & Hove Albion", "Aston Villa", "Tottenham Hotspur", "Brenford", "Fulham", "Crystal Palace","Chelsea",
"Wolverhampton Wanderers", "Westham United", "Bournemouth", "Nottingham Forest", "Everton",
"Leicester","Leed United", "Southampton"]

questions = [
  "How many goals were scored by",
  "How many games were won by",
  "How many games were drawn by",
  "How many games were lost by",
  "How many points were garnered by",
  "What was the league position of",
  "Who was the coach of",
  "Who was the captain of",
  "What is the name of the home stadium of",
  "Who was the topscorer of"
]

/* Questions*/

const ansList = []

var i = 0
var para = document.createElement("p")
var inputs = document.createElement("input")
var buttons = document.createElement("button")

document.querySelector("select").addEventListener("change", function(){
  var index = document.getElementById('cars').selectedIndex
  var indexAnswer = answers[index]
  inputs.placeholder = "Answer";
  inputs.style.borderRadius = "10px"
  buttons.style.borderRadius = "12px";
  buttons.innerText = "Submit";
  buttons.style.marginLeft = "5px";
  para.innerText = `${i + 1}. ${questions[i]} ${teams[index]}`
  para.style.fontSize = "16px"
  document.getElementById("answer").appendChild(para)
  document.getElementById('answer').appendChild(inputs)
  document.getElementById('answer').appendChild(buttons)

  // Removing the question

  document.querySelector("button").addEventListener("click", function(){
    i += 1
    if (i < 10) {
      ansList.push(document.querySelector("input").value)
      document.querySelector("input").value = " "
      para.remove()
      inputs.remove()
      buttons.remove()
      inputs.placeholder = "Answer";
      inputs.style.borderRadius = "12px"
      buttons.style.borderRadius = "12px";
      buttons.innerText = "Submit";
      buttons.style.marginLeft = "5px";
      para.innerText = `${i + 1}. ${questions[i]} ${teams[index]}`
      para.style.fontSize = "16px"
      document.getElementById("answer").appendChild(para)
      document.getElementById('answer').appendChild(inputs)
      document.getElementById('answer').appendChild(buttons)
    }else{
      ansList.push(document.querySelector("input").value)
      para.remove()
      inputs.remove()
      buttons.remove()
      /*Scoring*/
      goalScored = Number(ansList[0])
      gamesWon = Number(ansList[1])
      gamesDrawn = Number(ansList[2])
      gamesLost = Number(ansList[3])
      points = Number(ansList[4])
      position = Number(ansList[5])
      coach = ansList[6].toLowerCase()
      captain = ansList[7].toLowerCase()
      stadium = ansList[8].toLowerCase()
      topscorer = ansList[9].toLowerCase()
      var score = 0
      /*Confirming*/
      switch (true) {
        case goalScored === indexAnswer.gscored:
          score += 1
          break;
        case gamesWon === indexAnswer.gwon:
            score += 1
          break;
        case gamesDrawn === indexAnswer.gdrawn:
            score += 1
          break;
        case gamesLost === indexAnswer.glost:
            score += 1
          break;
        case points === indexAnswer.points:
            score += 1
          break;
        case position === indexAnswer.position:
            score += 1
          break;
        case coach === indexAnswer.coach:
              score += 1
          break;
        case captain === indexAnswer.captain:
            score += 1
          break;
        case stadium === indexAnswer.stadium:
            score += 1
          break;
        case topscorer === indexAnswer.topscorer:
              score += 1
            break;

        default:

      }

      para.innerText = `You scored: ${score}0%`
      document.getElementById("answer").appendChild(para)


    }


  })

 })

 //Next // QUESTION:
 // document.querySelector("button").addEventListener("click", function(){
 //

 //

 //
 //   ansList.push(document.querySelector("input").innerText)
 //   console.log(ansList)
 //
