import Size from './size';

let foo = () => {
    return new Size(300, 200);
}

console.log(foo());
console.log(foo().aspectRatio);
console.log(foo().test('hmm'));