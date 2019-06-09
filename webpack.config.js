module.exports = {
    entry: './qrcode.js',
    output: {
        library: 'QRCode',
        libraryTarget: 'umd',
        path: __dirname,
        filename: 'qrcode.min.js'
    },
    mode: 'production'
};