import axios from "axios";

function dateToString(date: Date) {
    return date.toString().split('T')[0];
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
function doBeforeGet(inter_since: string, inter_until: string) {
    const startDate = new Date(dateToLegal(inter_since));
    const endDate = new Date(dateToLegal(inter_until));
    const dates: any[] = [];
    let dateList: any[] = [];
    while (startDate <= endDate) {
        dates.push(dateToString(new Date(startDate)));
        startDate.setDate(startDate.getDate() + 1);
    }
    dateList = dates;
    dates.forEach(date => {
        // @ts-ignore
        if (interactionCache[dateToString(date)]) {
            dateList = dateList.filter(temp => temp !== date);
        }
    })
    const formatDate = convertDateListToPairs(dateList);
    let data;
    formatDate.forEach(datePair => {
         axios.get('https://www.yunbaogao.cn/reportFile/opinionLeader/getInteractionHistory', {
            params: {
                since: datePair[0],
                until: datePair[1],
                _id: '183217247'
            }
        })
             .then(response => {
                 data = response.data;
                 // console.log(data);
                 // @ts-ignore
                 data.forEach(item => {
                     let tempDate = dateToString(new Date(item.posted_time));
                     // @ts-ignore
                     interactionCache[tempDate] = interactionCache[tempDate].concat(item);
                 })
             })
             .catch(error => {
                 console.log(error);
             })
    })
    dates.forEach((date: Date) => {
        const temp = dateToString(date)
        // @ts-ignore
        if (interactionCache[temp]){
            // @ts-ignore
            interactionHistory = interactionHistory.concat(interactionCache[temp])
        }

    })
    console.log(interactionHistory.length);
}

const interactionCache = {};
let interactionHistory: any[] = [];
doBeforeGet('2022-01-01', '2022-01-31');
