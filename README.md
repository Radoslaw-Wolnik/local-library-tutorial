# local-library-tutorial
this is a backend tutorial project for node.js with express following: 
https://developer.mozilla.org/en-US/docs/Learn/Server-side/

> npm install express-generator -g
> express express-local-library-tutorial --view=pug

to run:
win PS> ENV:DEBUG = "express-local-library-tutorial:*"; npm start
win CMD> SET DEBUG=express-local-library-tutorial:* & npm start

to reload after save:
> npm install --save-dev nodemon

and now after adding necessary scripts to the package.json 
to start:
> npm run serverstart



Additionally i will conteinerise it 
docker-compose up --build