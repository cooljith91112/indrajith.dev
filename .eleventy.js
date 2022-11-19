/*jshint esversion: 6 */

const dayjs = require("dayjs");
const faviconPlugin = require("eleventy-favicon");
const eleventyPluginFeathericons = require("eleventy-plugin-feathericons");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const _ = require("lodash");

module.exports = function (config) {
    config.addPassthroughCopy({
        "src/css/styles.css": "./styles.css",
    });
    config.addPassthroughCopy({
        "src/css/fonts": "./fonts",
    });
    config.addPassthroughCopy({
        "src/images": "./images",
    });
    config.addPlugin(faviconPlugin, {
        destination: "./public",
    });
    config.addWatchTarget("./src/css");
    config.addPlugin(eleventyPluginFeathericons);
    config.addPlugin(syntaxHighlight);
    config.addPlugin(pluginRss, {
        posthtmlRenderOptions: {
            closingSingleTag: "default",
        },
    });

    config.addFilter("dateFilter", function (date) {
        return dayjs(date).format("DD MMM YYYY");
    });

    function filterTagList(tags) {
        return (tags || []).filter(
            (tag) => ["all", "nav", "post", "posts"].indexOf(tag) === -1
        );
    }

    config.addCollection("postsByYear", (collection) => {
        return _.chain(
            collection.getAllSorted().filter((post) => {
                return post.data.tags?.includes("posts");
            })
        )
            .groupBy((post) => {
                return dayjs(post.date).format("DD MMM YYYY");
            })
            .toPairs()
            .reverse()
            .value();
    });

    config.addFilter("filterTagList", filterTagList);

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};
