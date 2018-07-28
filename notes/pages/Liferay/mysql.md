---
title: "MySql"
description: "Importing mysql db to Liferay"
author: "Ryan Garant"

---

<article id="1">

## How To Import

- If db name does not exist, create a blank one
  - **login** to mysql

```shell
mysql -u root -p

# Once in shell

CREATE DATABASE db-name;

# then type

exit
```

- Once you have exited the shell, run

```shell
mysql -u root -p database_name < file.sql
```

- Then in your `bundles/tomcat-7.0.62/webapps/ROOT/WEB-INF/classes/portal-ext.properties` adjust this section:

```
jdbc.default.driverClassName=com.mysql.jdbc.Driver
jdbc.default.url=jdbc:mysql://localhost:3306/YOUR_DB?useUnicode=true&characterEncoding=UTF-8&useFastDateParsing=false
jdbc.default.username=root
jdbc.default.password=YOUR_PASS
```

</article>
