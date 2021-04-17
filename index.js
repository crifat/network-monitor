import { pingHost } from './pinger.js';
import { config } from './config.js';

(function startMonitoring() {
    console.log('monitor started');
    setInterval(pingHost, config.interval);
})();