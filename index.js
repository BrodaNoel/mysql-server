var fs = require('fs');

module.exports = {
	humans: 'Only Broda Noel :(',
	
	init: function(){
		// New my.ini
		fs.createReadStream('./lib/xampp/mysql/bin/my.ini.backup').pipe(fs.createWriteStream('./lib/xampp/mysql/bin/my.ini'));

		// Replace all #FULLDIR# for ".";
		fs.readFile('./lib/xampp/mysql/bin/my.ini', 'utf8', function (err, data) {
			if (err) return console.log(err);

			var result = data.replace(/#FULLDIR#/g, __dirname);

			fs.writeFile('./lib/xampp/mysql/bin/my.ini', result, 'utf8', function (err) {
				if (err) return console.log(err);
			});
		});
	}
};
