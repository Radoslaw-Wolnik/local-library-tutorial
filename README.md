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


MonoDB is in the container, as well as our backend app
docker-compose up --build

populate db 
> node populatedb "mongodb://mongo:27017/my_database"
this works if u split the console to two so that we can run the script on the docker containers [|] icon beside the trash icon
> docker-compose up -build
> docker-compose exec app node populatedb "mongodb://mongo:27017/my_database"
propably i could also do sth like docker-compose up --build &


route paths as regular expressions: 
    ? : The endpoint must have 0 or 1 of the preceding character (or group), e.g. a route path of '/ab?cd' will match endpoints acd or abcd.
    + : The endpoint must have 1 or more of the preceding character (or group), e.g. a route path of '/ab+cd' will match endpoints abcd, abbcd, abbbcd, and so on.
    * : The endpoint may have an arbitrary string where the * character is placed. E.g. a route path of '/ab*cd' will match endpoints abcd, abXcd, abSOMErandomTEXTcd, and so on.
    () : Grouping match on a set of characters to perform another operation on, e.g. '/ab(cd)?e' will perform a ?-match on the group (cd) — it will match abe and abcde.



Need to fix genre_detail page/view


Deployment: 
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment
I need to go throught them all one by one so they are correct for my implementation
It changes a lot
logging, sending, protection against vulnerabilities etc
