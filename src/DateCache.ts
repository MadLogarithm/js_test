function dateToString(date: Date) {
    return date.toISOString().split('T')[0];
}
function setDate(inter_since: string | number | Date, inter_until: string | number | Date) {
    const startDate = new Date(inter_since);
    const endDate = new Date(inter_until);
    const dates = [];
    let result = [];
    while (startDate <= endDate) {
        dates.push(dateToString(new Date(startDate)));
        startDate.setDate(startDate.getDate() + 1);
    }
    result = dates;
    dates.forEach(date => {
        // console.log(date);
        // console.log(interactionCache[date]);
        if (interactionCache[date] !== undefined) {
            // console.log("yep");
            interactionHistory = interactionHistory.concat(interactionCache[date]);
            result = result.filter(temp => temp !== date);
        } else {
            // console.log("nope");
            interactionCache[date] = [{"name": 1}];
        }
        // console.log(interactionCache[date]);
        // console.log(date);
    })
    // console.log(interactionHistory);
    return result; // 返回剩余的日期
}

//{
//                     "_id": "1757639182372004319",
//                     "posted_time": 1707888811000,
//                     "favorite_count": 163,
//                     "retweet_count": 62,
//                     "quote_count": 3,
//                     "reply_count": 3,
//                     "views_count": 3744,
//                     "bookmark_count": 1
//                 },
//                 {
//                     "_id": "1757384930873557329",
//                     "posted_time": 1707828192000,
//                     "favorite_count": 114,
//                     "retweet_count": 50,
//                     "quote_count": 9,
//                     "reply_count": 5,
//                     "views_count": 5567,
//                     "bookmark_count": 3
//                 }

const interactionCache = {};
let interactionHistory = [];
let dates = setDate('2023-01-03', '2023-01-05');
console.log(dates);
dates = setDate('2023-01-01', '2023-01-07');
console.log(dates);
dates = setDate('2022-12-31', '2023-01-10');
console.log(dates);
