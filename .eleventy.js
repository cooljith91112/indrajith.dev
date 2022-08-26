/*jshint esversion: 6 */

const dayjs = require("dayjs");

module.exports = function (config) {
    config.addPassthroughCopy("./src/css");
    config.addWatchTarget("./src/css");
    config.addPassthroughCopy({
        "src/css/fonts": "./fonts",
    });

    config.addFilter("dateFilter", function (date) {
        return dayjs(date).format("DD MMM YYYY");
    });

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};
