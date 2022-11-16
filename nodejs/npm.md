# NODE PACKAGE MANAGER

if a project has a `package.json` file, running `npm install` it will install everything that the project needs.

to install specific packages you `npm install <package-name>`.

## flags

* `--save-dev` - installs and adds entry to package.json DevDependencies
* `--no-save` - installs but doesn't add entry to package.json dependecies
* `--save-optional` -  installs and adds the entry to the package.json file optionalDependencies
* --no-optional will prevent optional dependencies from being installed

The difference between devDependencies and dependencies is that the former contains development tools, like a testing library, while the latter is bundled with the app in production.

## UPDATING PACKAGE

npm update

## VERSIONING

`npm install <package-name>@<version>`
