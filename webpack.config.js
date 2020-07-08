module.exports = {
    entry: "./index.py",
    mode: 'production',
    target: "webworker",
    module: {
        rules: [
            {
                test: /\.py$/,
                loader: 'transcrypt-loader',
                options: {}
            }
        ]
    }
};
