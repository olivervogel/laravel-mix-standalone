export default class Size {
    constructor (width, height) {
        this.width = width;
        this.height = height;
    }

    get aspectRatio() {
        return this.width / this.height;
    }

    test(value) {
        return 'from size: ' + value;
    }
}