#! /usr/bin/env node

const hostPos = process.argv.findIndex(element => element == "--host");
if ( hostPos == -1){
    process.argv.push("--host");
    if (typeof process.env.LISTENING_IP === "undefined")
        process.env.LISTENING_IP = "127.0.0.1";
    process.argv.push(process.env.LISTENING_IP);
} else{
    process.env.LISTENING_IP = process.argv[hostPos + 1];
}

const portPos = process.argv.findIndex(element => element == "--port");
if (portPos == -1){
    process.argv.push("--port");
    if (typeof process.env.LISTENING_PORT === "undefined")
        process.env.LISTENING_PORT = "8080";
    process.argv.push(process.env.LISTENING_PORT);
} else{
    process.env.LISTENING_PORT = process.argv[portPos + 1];
}

if ( typeof process.env.PROTOCOL === 'undefined')
    process.env.PROTOCOL = "http";

if ( typeof process.env.ACESTREAM_M3U8_URL === 'undefined')
    process.env.ACESTREAM_M3U8_URL = "http://127.0.0.1:6878/ace/manifest.m3u8?id=";

const {argv_vals, bootstrap_server} = require('./lib/process_argv')

const start_server = (argv_vals["--tls"]) ? require('../servers/start_https') : require('../servers/start_http')

bootstrap_server(start_server)
