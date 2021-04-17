import ping from 'ping';
import { config } from './config.js';
import { writeToFile } from './csv-writer.js';

export const pingHost = () => {
    ping.promise.probe(config.host, config.pingConfig).then(res => {
        handlePingResponse(res);
    })
}

const handlePingResponse = (res) => {
    const down = !res.alive;
    const time = new Date();
    if (down) {
        console.log('DOWN!!!', time);
        const data = {
            time: time.toISOString(),
            down: 1,
            end: new Date(time.getTime() + 1000).toISOString()
        };
        writeToFile(data);
    }
}