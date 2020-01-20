#Simple Bills App made with ReactJS

## Steps

**Download or Pull This Repo**

 **Install Node**
	https://nodejs.org/en/

 **Install all the node packages** 
On the root of this project run on your terminal (if you want you can do this with yarn but thats optional)
We updated to version 4.0 of gulp so you should have no problems
```bash
    npm install
    npm install gulp-cli -g
    npm install gulp 
    npm install webpack@4.25.1 -g
    npm install webpack-cli@3.1.2 -g
```


**Start the dev server**
```bash
  npm run watch
```

**Start the dev server with proxy**
```bash
  npm run proxy
```

**Build files for production**
```bash
  npm run build
```

**Optimize Your Images**
```bash
  npm run imgs
```

**Static Site Generator Development**
```bash
  npm run static:dev
```

**Static Site Generator Production**
```bash
  npm run static:build
```


# EACCESS ERROR FIX
```diff
- how to fix the EACCESS ERROR
- lets say for example you trying to install webpack
- sudo npm install webpack@4.25.1 -g
- and get an error
- Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/webpack/node_modules/fsevents/build'
- then try again to install it but with this at the end "--unsafe-perm=true --allow-root"
- for example
- sudo npm install webpack@4.25.1 -g --unsafe-perm=true --allow-root
```
or 

npm install har-validator@latest --save-dev

