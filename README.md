# What is this?
A simple template for a Typescript project targeting NodeJS.

# How do I use it?
Clone the repo.
Run `npm install`, then `npm run app`.
If all goes well, delete the .git folder and do `git init` to start a new project.

# How do I add dependencies?
+ Install NPM packages to package.json.
+ Use [Typings](https://github.com/typings/typings) to get declaration files.

# How does it work?
+ `tsc` is configured to output javascript files to the node_modules folder. This allows non-relative imports, so you don't have to mess around with `../../../foo/bar/baz`
+ `npm` scripts are used for a fairly simple build process.
+ Declaration files installed with Typings are automatically in-scope.
+ Set up your editor accordingly.
