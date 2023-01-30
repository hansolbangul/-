function time(date) {
    const [hour, min] = date.split(':').map(Number);
    return hour * 60 + min;
}

function solution(fees, records) {
    let answer = [];
    let close = time('23:59');
    let object = {};
    let queue = [];

    for(let i = 0; i < records.length; i++){
        const [date, number, type] = records[i].split(' ');
        const timestampe = time(date);
        if(type === 'IN') {
            queue.push({number, timestampe });
        } else {
            const matchIndex = queue.findIndex((item) => item.number === number);
            const subTime = timestampe - queue[matchIndex].timestampe;
            object[number] = object[number] ? object[number] + subTime : subTime;
            queue.splice(matchIndex, 1);
        }
    }

    queue.forEach(item => {
        const subTime = close - item.timestampe;
        object[item.number] = object[item.number] ? object[item.number] + subTime : subTime;
    })
    const sort = Object.keys(object).sort((a, b) => Number(a) - Number(b)).map(item => {
        console.log(object[item])
        return object[item] - fees[0] > 0 ? fees[1] + Math.ceil([(object[item] - fees[0]) / fees[2]]) * fees[3] : fees[1];
    });
    
    return sort;
}