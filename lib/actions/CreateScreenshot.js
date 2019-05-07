/**
 * Auto-generated action file for "Browshot" API.
 *
 * Generated at: 2019-05-07T14:39:49.916Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / browshot-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'CreateScreenshot'
 * Endpoint Path: '/screenshot/create'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "url",
    "instance_id",
    "size",
    "cache",
    "delay",
    "flash_delay",
    "screen_width",
    "screen_height",
    "priority",
    "referer",
    "post_data",
    "cookie",
    "script",
    "details",
    "html",
    "max_wait",
    "headers",
    "shots",
    "shot_interval",
    "hosting",
    "hosting_height",
    "hosting_width",
    "hosting_scale",
    "hosting_bucket",
    "hosting_file",
    "hosting_headers"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "url": "url",
    "instance_id": "instance_id",
    "size": "size",
    "cache": "cache",
    "delay": "delay",
    "flash_delay": "flash_delay",
    "screen_width": "screen_width",
    "screen_height": "screen_height",
    "priority": "priority",
    "referer": "referer",
    "post_data": "post_data",
    "cookie": "cookie",
    "script": "script",
    "details": "details",
    "html": "html",
    "max_wait": "max_wait",
    "headers": "headers",
    "shots": "shots",
    "shot_interval": "shot_interval",
    "hosting": "hosting",
    "hosting_height": "hosting_height",
    "hosting_width": "hosting_width",
    "hosting_scale": "hosting_scale",
    "hosting_bucket": "hosting_bucket",
    "hosting_file": "hosting_file",
    "hosting_headers": "hosting_headers"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['apiKeyQuery'] = cfg['apiKeyQuery'];

    let callParams = {
        spec: spec,
        operationId: 'CreateScreenshot',
        pathName: '/screenshot/create',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}