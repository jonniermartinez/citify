/** @type {import('next').NextConfig} */
// i18n configuration

const withNextIntl = require("next-intl/plugin")(
    "./src/i18n.ts"
);

module.exports = withNextIntl({
    async rewrites() {
        return [
            {
                source: "/mp/lib.min.js",
                destination: "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js",
            },
            {
                source: "/mp/lib.js",
                destination: "https://cdn.mxpnl.com/libs/mixpanel-2-latest.js",
            },
            {
                source: "/mp/decide",
                destination: "https://decide.mixpanel.com/decide",
            },
            {
                source: "/mp/:slug",
                // use "api-eu.mixpanel.com" if you need to use EU servers
                destination: "https://api.mixpanel.com/:slug",
            },
        ];
    },
});

