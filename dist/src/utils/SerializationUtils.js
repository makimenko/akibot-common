"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SerializationUtils;
(function (SerializationUtils) {
    function deserialize(json, environment) {
        //console.log("deserialize: "+json.$name);
        try {
            var instance = new environment[json.$name]();
            for (var prop in json) {
                if (!json.hasOwnProperty(prop)) {
                    continue;
                }
                if (Array.isArray(json[prop])) {
                    var arr = [];
                    Array.from(json[prop]).forEach((i) => {
                        //console.log(i);
                        arr.push(deserialize(i, environment));
                    });
                    instance[prop] = arr;
                }
                else if (typeof json[prop] === 'object') {
                    instance[prop] = deserialize(json[prop], environment);
                }
                else {
                    instance[prop] = json[prop];
                }
            }
            return instance;
        }
        catch (err) {
            //console.error("Failed to deserialize:");
            //console.error(json);
            throw err;
        }
    }
    SerializationUtils.deserialize = deserialize;
    function jsonStringify(obj) {
        var cache = [];
        return JSON.stringify(obj, function (key, value) {
            if (typeof value === 'object' && value !== null) {
                if (cache.indexOf(value) !== -1) {
                    // Circular reference found, discard key
                    return;
                }
                // Store value in our collection
                cache.push(value);
            }
            return value;
        });
    }
    SerializationUtils.jsonStringify = jsonStringify;
    function jsonParse(jsonString) {
        return JSON.parse(jsonString);
    }
    SerializationUtils.jsonParse = jsonParse;
})(SerializationUtils = exports.SerializationUtils || (exports.SerializationUtils = {}));
//# sourceMappingURL=SerializationUtils.js.map