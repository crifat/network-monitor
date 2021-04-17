import ping from 'ping';
import { config } from './config.js';
import { writeToFile } from './csv-writer.js';

export const pingHost = () => {
    ping.promise.probe(config.host, config.pingConfig).then(res => {
        handlePingResponse(res);
    })
}

const handlePingResponse = (res) => {
    // alive = res.alive;
    const down = res.alive;
    if (down) {
        console.log('DOWN!!!' + currentTime());
        const data = {
            time: currentTime(),
            down: 1
        };
        writeToFile(data);
    }
}

const currentTime = () => {
    const currentdate = new Date();
    // const datetime = addZero(currentdate.getDate()) + "-"
    //     + addZero((currentdate.getMonth() + 1)) + "-"
    //     + currentdate.getFullYear() + " "
    //     + addZero(currentdate.getHours()) + ":"
    //     + addZero(currentdate.getMinutes()) + ":"
    //     + addZero(currentdate.getSeconds());

    return currentdate.toISOString();
}

const addZero = (i) => {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}