/*jshint esversion: 6 */

const dayjs = require("dayjs");
const faviconPlugin = require("eleventy-favicon");
const eleventyPluginFeathericons = require('eleventy-plugin-feathericons');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (config) {
    config.addPassthroughCopy({
        'src/_includes/assets/css/styles.css': './styles.css'
    });
    config.addPassthroughCopy({
        "src/css/fonts": "./fonts",
    });
    config.addPassthroughCopy({
        "src/images": "./images",
    });
    config.addPlugin(faviconPlugin, {
        destination: './public'
    });
    config.addWatchTarget("./src/css");
    config.addPlugin(eleventyPluginFeathericons);
    config.addPlugin(syntaxHighlight);

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
