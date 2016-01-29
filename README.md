I'm on it... Just wait a couple of days...
(last update: 29/01/2016)

Usage:

```
var mysqlServer = require('mysql-server');
mysqlServer.start();
```

```
var mysqlServer = require('mysql-server');
mysqlServer.stop();
```

!IMPORTANT!
`start` function is synchronous. So, will keep your prompt until kill it pressing Ctrl + C
`start` function will take a couple of seconds in the first execution, just because it has to unzip all MySQL.