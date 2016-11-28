# **Portfolio**

This repository contains my portfolio website project.

----------


### **Table of contents**

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [What's Included](#whats-included)
- [Development Workflow](#development-workflow)
- [Author](#author)


----------

### **Prerequisites**

Node.JS [Click here to download and install it!](https://nodejs.org/en/)

----------

### **Getting Started**

Some quick steps to follow to get started:

```bash
# Clone the repo:
git clone https://github.com/younes038/portfolio.git [folderName]

# Change directory:
cd [folderName]

# Install NPM dependencies:
npm install

# Install Bower dependencies:
bower install
```

----------

### **What's Included**

Within the cloned repo you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
portfolio/
├──	assets/
│	├── components/
│	│    ├── font-awesome
│	│    ├── jquery
│	│    ├── jquery.easy-pie-chart
│	│    └── requirejs
│	├── css/
│	│    ├── style.css
│	│    └── style.min.css
│	├── js/
│	│    └── script.js
│	└── sass/
│		 ├── partials/
│		 │    ├── _charts.scss
│		 │    ├── _cloud-background.scss
│		 │    ├── _footer.scss
│		 │    ├── _menu.scss
│		 │    └── _timeline.scss
│		 └── styles.scss
├──	node_modules/
│	 └── etc...
├──	index.html
└──	etc...
```

----------

### **Development Workflow**

packages required:

- Gulp
- Gulp-Sass
- Gulp-rename
- Bower
- BrowserSync

libraries and font:

- jQuery
- jQuery.easy-pie-chart
- Font-Awesome

>Run the default gulp task:

>```bash
gulp
```
>This will compile and minify the SASS files through 'assets/css/style.min.css' on save and launch BrowserSync to see the changes through the browser.

----------

### **Author**

**Younes El Yandouzi**