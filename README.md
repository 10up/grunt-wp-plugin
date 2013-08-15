# grunt-wp-plugin

> Create a WordPress plugin with [grunt-init][].

[grunt-init]: http://gruntjs.com/project-scaffolding

## Installation
If you haven't already done so, install [grunt-init][].

Once grunt-init is installed, place this template in your `~/.grunt-init/` directory. It's recommended that you use git to clone this template into that directory, as follows:

### Linux/Mac Users

```
git clone git@github.com:10up/grunt-wp-plugin.git ~/.grunt-init/wp-plugin
```

### Windows Users

```
git clone git@github.com:10up/grunt-wp-plugin.git %USERPROFILE%/.grunt-init/wp-plugin
```

## Usage

At the command-line, cd into an empty directory, run this command and follow the prompts.

```
grunt-init wp-plugin
```

_Note that this template will generate files in the current directory, so be sure to change to a new directory first if you don't want to overwrite existing files._

Install the NPM modules required to actually process your newly-created project by running:

```
npm install
```

## Scaffold

After running the init command above, you will be presented with a standard directory structure similar to:

    /plugin
    .. /assets
    .. .. /css
    .. .. .. /src
    .. .. .. /sass
    .. .. .. /less
    .. .. /js
    .. .. .. /src
    .. /images
    .. .. /src
    .. /includes
    .. /languages
    .. .. plugin.pot
    .. .gitignore
    .. Gruntfile.js
    .. plugin.php
    .. readme.php

### CSS vs Sass vs LESS

Depending on how you answer the prompt regarding the use of a preprocessor, you will either have a `/src` directory (CSS), a `/sass` directory (Sass), or a `/less` directory (LESS) under your normal `/css` directory.  The goal here is that you only ever edit files in the related source directory and Grunt will automatically build and minify your final stylesheets directly in `/css`.

If you're using Sass or Less, the raw files will be processed into `/css/filename.css` and minified into `/css/filename.min.css`.

If you're using vanilla CSS, the source files will be minified into `/css/filename.min.css`.

### JavaScript

You should only ever be modifying script files in the `/js/src` directory.  Grunt will automatically concatenate and minify your scripts into `/js/filename.js` and `/js/filename.min.js`.  These generated files should never be modified directly.

### Images

The `/images/src` directory exists only to allow you to keep track of source files (like PSDs or separate images that have been merged into sprites).  This helps keep source files under version control, and allows you to bundle them with the distribution of your new GPL plugin.

## Release History

 * 2013-08-15   v0.1.7   Fix a typo in rename.json.
 * 2013-08-13   v0.1.6   Add deployment builder. Remove dates from Grunt headers.
 * 2013-07-18	v0.1.5	 Remove /extend references (props @trepmal).
 * 2013-05-30   v0.1.4   Fix broken package.json generator.
 * 2013-05-06   v0.1.3   Several I18N updates (props @bradyvercher)
 * 2013-04-29   v0.1.2   Folder restructuring and renaming.
 * 2013-04-26   v0.1.1   Minor bug fixes.
 * 2013-04-25   v0.1.0   Initial public release.
