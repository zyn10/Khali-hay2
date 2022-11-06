//this is used when we do masti with http
import url from 'url';

const myURL = new URL('https://alphapride.io');
myURL.pathname='/a/b/c';
myURL.search='?d=e';
myURL.hash= '#fgh';

console.log(myURL);
