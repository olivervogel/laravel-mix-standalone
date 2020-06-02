import Size from './size';

window.Vue = require('vue');

const app = new Vue({
    el: '#app',
    data: {
        width: 16,
        height: 9,
    },
    computed: {
        size: function () {
            return new Size(this.width, this.height);
        }
    }
});