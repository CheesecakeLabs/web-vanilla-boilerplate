<img src="https://s3-us-west-2.amazonaws.com/ckl-generic-hosting/cheesecake-logo-blue.png" height="60">

# Web Vanilla Boilerplate


This a boilerplate for simple static web projects that came with a few configurations and libraries already setup to speed up the starter of your project. 


## Libraries

There's a bunch of libraries already included and setup for use, you can easily remove any of them without any problem depending of your case or architecture.

- Webpack
  - CSS loader
  - Image loader
  - File loader
  - Raw loader
  - Dev server
- Babel
  - Loader
  - Preset ES2015
- CSS
  - PostCSS
    - Nested
    - Mixins
    - Loader
    - Import
    - Hex to rgba
    - Custom media
    - CSS variables
    - Each
  - LostCSS 
  - Normalize.css
  - Reset.css
- Project
  - ITCSS styles folder structure
  - ESLint
  - Prettier


## Scripts

There's some NPM scripts already included:

`dev`: Creates a simple webpack dev server for development with hot reload at port 3000.

`build`: Bundle your project for production environment. Custom settings included at *webpack.config.production.js*.

`server`: Build your project for production and creates a simple HTTP server to serve it. HTTP serve tool is simple, but powerful enough to serve a simple static website.

`deploy`: **USE THIS CAREFULLY** Build your project for production and commit it to the *gh-pages* branch, with, if activated in your github project settings, automatically deploy your website to the git pages of your project. It deletes everything from your current *gh-pages* branch and include the *master* branch. It'll also delete everything uncommited from your current project.


## Custom configurations

### **Include HTML files**
There's a custom script inside the `app.js` file that include and inject HTML files into the main HTML structures. You can use it to include your *header* or *footer* into your HTML files without the need of copy and paste the source code into each file you need to include it.

Usage: 

`Include the HTML you want to inject into the ./src/html folder.`

`Add the tag html="name-file" into any HTML element, it'll automaticaly delete this element and inject the source file at this position.`

```
<span html="header.html"></span>
```

### **Hot reload template files**

To automatic refresh the page when any modifications is done to any of yours template files, include this to your `app.js` and import your HTML files into it.

```
// List your HTML dev files to Hot Reload it when changed
if (process.env.NODE_ENV !== 'production') {
  require('../../public/index.html')
}
```

It'll not include the HTMLs in your production build, it's used only for development purposes. If you want to use it in production remove the if condition.


## Installation

```
cd ./src
yarn -i
yarn dev
```


## Contributors

DouglasGimli (@douglasgimli)

Danilow (@danilow)


## License

