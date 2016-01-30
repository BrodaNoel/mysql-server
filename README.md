### New features?
Yes, but inly if you request it using GitHub.
Right now, I really have no time to create all the stuffs that this package should has. For instance: A configuration file to define port, default username, password, db initialization, backups, etc etc etc.

If you need something quickly, just create a new issue in https://github.com/BrodaNoel/mysql-server, and I gonna work on it.

**Usage**:

```javascript
	var mysqlServer = require('mysql-server');
	mysqlServer.start();
```

```javascript
	var mysqlServer = require('mysql-server');
	mysqlServer.stop();
```

##### IMPORTANT!
`start` function is synchronous. So, it will keep your prompt until kill it pressing Ctrl + C (or calling `stop` function).

`start` function will take a couple of seconds in the first execution, just because it has to unzip all MySQL.