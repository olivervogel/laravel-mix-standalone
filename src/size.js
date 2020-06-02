export default class Size {
    constructor (width, height) {
        this.width = width;
        this.height = height;
    }

    get aspectRatio() {
        return Math.round((this.width / this.height) * 100) / 100;
    }

    test(value) {
        return 'from size: ' + value;
    }
}