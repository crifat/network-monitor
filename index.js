import { pingHost } from './pinger.js';
import { generateJsonOutput } from './csv-to-json.js'
import { config } from './config.js';

(function startMonitoring() {
    console.log('monitor started');
    setInterval(pingHost, config.interval);
    setInterval(generateJsonOutput, 60000);
})();