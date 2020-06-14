const jimp = require("jimp");

module.exports = class Trash {
    /**
     * Trash
     * @param {image} image 
     */
    async getImage(image) {
        if (!image) throw new Error(`You must provide an image.`);
        let bg = await jimp.read(`../src/module/assets/trash.png`);
        image = await jimp.read(image);
        image.resize(309, 309);
        image.blur(5);
        bg.composite(image, 309, 0);
        let raw;
        bg.getBuffer(`image/png`, (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }
}