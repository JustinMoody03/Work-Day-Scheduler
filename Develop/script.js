var time = new Date()
var day = time.getDay()
console.log(day)
time = time.toDateString()
console.log(time)

let times = time.split(" ")
console.log(times)
const toFullDayString = (string) => {
    switch (string) {
        case "Mon":
            return "Monday"
            break;
        case "Tue":
            return "Tuesday"
            break;
        default:
            return "Weekend"
            break;
    }
}
var hours = ["9:00"]

var showTime = `${toFullDayString(times[0])}, ${times[1]} ${times[2]}, ${times[3]}`
console.log(showTime)

var currentTime = new Date().getHours()
console.log(currentTime)
var time = "9:00"


var timeBlocks = document.getElementsByClassName('row')
console.log(timeBlocks)
for (const block of timeBlocks) {
    if(block.attributes.id.nodeValue - currentTime < 0){
        block.children[1].classList.add("past")

    }
    console.log(block.children[1])
}