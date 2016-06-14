# angular2-vs-react
Set of simple exercises comparing Angular2 and React, covering the following topics:

- Data binding (One-way & Two-way)
- Loops and if’s
- Component definition
- Communication between components
- Routing
- Third-party libraries integration
- External services interaction (e.g consuming REST APIs)

## Execution
To run the demo suite you will need NodeJS and NPM. We recommend doing it through NVM (Node Version Manager)

    cd ~
    wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash

Close the terminal and reopen it again. After that install the last version of NodeJS adn set it as default.

    nvm install node
    nvm alias default node 

### Angular2 suite
To execute the Angular2 demo suite:

    cd angular2
    npm install
    npm start

After that, you can access the demo using a browser (Chrome or Firefox) at http://localhost:3000 (by default)

### ReactJS suite
To execute ReactJS demo suite we will use http-server. First of all, install it globally:

    npm install -g http-server

Now we can use it to serve static content from a chosen directory. From root folder execute:

    http-server react/

After that, you can access the demo using a browser (Chrome or Firefox) at http://localhost:8080 (by default)

