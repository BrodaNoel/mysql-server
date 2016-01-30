var fs = require('fs'),
	zip = require('machinepack-zip');

var mysqlServer = {
	humans: 'Only Broda Noel :(',
	
	unzip: function(ok, err){
		// Unzip xampp
		console.log('First run... Installing...');
		zip.unzip({
			source: __dirname + '/lib/xampp.zip',
			destination: __dirname + '/lib'
		}).exec({
			error: function(data) {
				console.log('Unzip done with errors');
				console.log(data);

				if(typeof err === 'function')
					err();
			},
			success: function() {
				console.log('Unzip done successfuly');

				console.log('Removing zip file');
				fs.unlinkSync(__dirname + '/lib/xampp.zip');

				if(typeof ok === 'function')
					ok();
			}
		});
	},

	initConfig: function(params) {
		// New my.ini
		console.log('Copy base configuration');
		fs.createReadStream(__dirname + '/lib/xampp/mysql/bin/my.ini.backup').pipe(fs.createWriteStream(__dirname + '/lib/xampp/mysql/bin/my.ini'));

		fs.readFile(__dirname + '/lib/xampp/mysql/bin/my.ini', 'utf8', function (err, data) {
			if (err) return console.log(err);

			// Replace all #FULLDIR# for ".";
			var result = data.replace(/#FULLDIR#/g, __dirname.replace(/\\/g, '/'));

			fs.writeFile(__dirname + '/lib/xampp/mysql/bin/my.ini', result, 'utf8', function (err) {
				if (err) return console.log(err);
			});
		});
	},

	start: function() {
		try {
			fs.accessSync(__dirname + '/lib/xampp.zip', fs.F_OK);

			mysqlServer.unzip(function(){
				mysqlServer.initConfig();
				mysqlServer.run();
			});

		} catch (e) {
			mysqlServer.run();
		}
	},

	stop: function() {
		console.log('Stopping MySQL instance');
		const exec = require('child_process').exec;
		const child = exec('call ' + __dirname + '/lib/xampp/mysql_stop.bat', function (error, stdout, stderr) {
			if (error) {
				console.log('ERROR stopping!');
				throw error;
			}
			console.log('stdout', stdout);
			console.log('stderr', stderr);
		});
	},

	run: function(){
		console.log('Running MySQL instance');
		console.log('Ctrl + C to stop');
		const exec = require('child_process').exec;
		const child = exec('call ' + __dirname + '/lib/xampp/mysql_start.bat', function (error, stdout, stderr) {
			if (error) {
				console.log('ERROR!');
				throw error;
			}
			console.log('stdout', stdout);
			console.log('stderr', stderr);
		});
	}
};

module.exports = mysqlServer;
