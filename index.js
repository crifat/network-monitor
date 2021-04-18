import { pingHost } from './pinger.js';
import { generateJsonOutput } from './csv-to-json.js'
import { config } from './config.js';
import { startServer } from './server.js';

(function startMonitoring() {
    console.log('monitor started');
    setInterval(pingHost, config.interval);
    setInterval(generateJsonOutput, config.convertInterval);
    startServer();
})();