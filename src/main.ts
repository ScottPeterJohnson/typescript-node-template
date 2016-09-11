//Import a NodeJS file
 import os = require('os');
 //Import one of our source files
 import {Employee} from "things/employees";
 //Import everything from a source file
import * as Houses from "places/houses";

//Use what we explicitly imported
let bob : Employee = Employee.bob();
//Use named import
let house : Houses.House = new Houses.House();

console.log("Hello, world!");
//Use nodejs imports
console.log("Platform: " + os.platform());
console.log("Version: " + os.release());
