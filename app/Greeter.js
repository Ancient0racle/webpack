// Greeter.js
import config from './config.json';
import styles from './Greeter.css';
module.exports = function () { 
	const greet = document.createElement('div');
	greet.textContent = config.greetText;
	greet.className = styles.root;
	return greet;
};