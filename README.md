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
`start` function is synchronous. So, it will keep your prompt until kill it pressing Ctrl + C (or calling `stop` function)
`start` function will take a couple of seconds in the first execution, just because it has to unzip all MySQL.