module.exports = {
    entry: './main.ts',
    resolve:{
        extensions: [".ts"]
    },
    module: {
        rules: [
            {test: /\.tsx?$/, loader: "ts-loader"}
        ]
    }
}