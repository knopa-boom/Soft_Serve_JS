function addTwoDays(date) {
    date.setDate(date.getDate() + 2)
}

var currentDate = new Date();
addTwoDays(currentDate);