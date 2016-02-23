// Styles
import 'normalize.css';
import '../assets/sass/global';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./Root.prod');
} else {
    module.exports = require('./Root.dev');
}