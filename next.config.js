module.exports = {
    reactStrictMode: true,
    env: {
        development: {
            url: "http://localhost:3000",
        },
        production: {
            url: "https://ficha-rpg-msv.vercel.app",
        },
    },
    images: { domains: ["i.ibb.co"] }
};
