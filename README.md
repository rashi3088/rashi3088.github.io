# Portfolio-Website
My personal portfolio website

### Setting up for the first time:
- Clone repository on your local computer
- Make sure you have [Node.js](https://nodejs.org/en/download) installed (16.x or higher)
    - To check if Node.js and npm is installed correctly on your machine, run the following command on your CMD/Terminal:
    `npm --version`
    It should print the version number on the terminal
- Open CMD and navigate to the directory where you cloned your repository
- Run `npm install` to install all dependencies listed in package.json
- If everything goes well, you can move on to running your application


### Running the application
- Open CMD and navigate to the directory where you cloned your repository
- Run `npm run start`
  This should spin up a local development server for you to view your application on localhost
- It should automatically open up a browser for you pointing at `http://localhost:3000/`.If it doesn't, you can open a web browser and navigate to `http://localhost:3000/` yourself.


### Deploying changes on the actual website
- After you have made your changes, open CMD and navigate to the directory where you cloned your repository
- Run `npm run deploy`
- This might take a couple minutes to build, but after that, you should see a `Published` message (or something like that) on the CMD. This means the app changes have successfully been deployed to your website
- You can go confirm it at [https://rashi3088.github.io/](https://rashi3088.github.io/portfolio-website)
- You can also check the status of your deployment on this [link](https://github.com/rashi3088/portfolio-website/actions/workflows/pages/pages-build-deployment).

#### References:
- https://github.com/gitname/react-gh-pages#deploying-a-react-app-to-github-pages
- 
