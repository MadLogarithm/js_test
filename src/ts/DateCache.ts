function dateToString(date: Date) {
    return date.toISOString().split('T')[0];
}
function setDate(inter_since: string, inter_until: string) {
    const startDate = new Date(inter_since);
    const endDate = new Date(inter_until);
    const dates = [];
    let result: any[] = [];
    while (startDate <= endDate) {
        dates.push(dateToString(new Date(startDate)));
        startDate.setDate(startDate.getDate() + 1);
    }
    result = dates;
    dates.forEach(date => {
        // console.log(date);
        // console.log(interactionCache[date]);
        // @ts-ignore
        if (interactionCache[date] !== undefined) {
            // console.log("yep");
            // @ts-ignore
            interactionHistory = interactionHistory.concat(interactionCache[date]);
            result = result.filter(temp => temp !== date);
        } else {
            // console.log("nope");
            // @ts-ignore
            interactionCache[date] = [{"name": 1}];
        }
        // console.log(interactionCache[date]);
        // console.log(date);
    })
    // console.log(interactionHistory);
    return result; // 返回剩余的日期
}
function convertDateListToPairs(dateList: string | any[]) {
    const datePairs = [];
    let since = new Date(dateList[0]);
    let until = new Date(dateList[0]);
    for (let i= 1; i < dateList.length; i++) {
        const date = new Date(dateList[i]);
        if (date.getTime() - until.getTime() !== 86400000) {
            datePairs.push([dateToString(since), dateToString(until)]);
            since = date;
            until = date;
        } else if (i === dateList.length - 1) {
            datePairs.push([dateToString(since), dateToString(date)]);
        } else {
            until = date;
        }
    }
    return datePairs;
}
function dateToLegal(date: string) {
    if (date.length !== 10) {
        if (date[7] !== '-') {
            date = date.substring(0, 5) + '0' + date.substring(5);
        }
        if (date.length !== 10) {
            date = date.substring(0, 8) + '0' + date.substring(8);
        }
    }
    return date;
}

const interactionCache = {};
let interactionHistory: any[] = [];
let dates = setDate('2023-11-01', '2024-03-08');
// console.log(dates);
console.log(convertDateListToPairs(dates));
dates = setDate('2023-12-01', '2024-03-08');
// console.log(dates);
console.log(convertDateListToPairs(dates));
dates = setDate('2023-08-01', '2023-12-08');
// console.log(dates);
console.log(convertDateListToPairs(dates));
const formatDate = dateToLegal('2023-8-1')
console.log(formatDate)

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
