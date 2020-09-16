const geoip = require("node-iplocate");
var colors = require('colors');
var readline = require('readline');


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log("Hey there! I'm LV's GEOIP tool coded on Nodejs".yellow)
  rl.question("Tell me the IP Address that you want to get information about!\n", function(ip) {
    if (!ip) return console.log("Please, enter a IP Address!".red);
    
    geoip(ip).then(function(results) {
      console.log("\nIP Address".bold)
      console.log(results.ip);
      console.log("City".bold)
      console.log(results.city);
      console.log("Continent".bold)
      console.log(results.continent); 
      console.log("Country".bold)
      console.log(results.country + " (" + results.country_code + ")"); 
      console.log("Organisation".bold)
      console.log(results.org + " (" + results.asn + ")\n"); 
    });

    rl.close();
  });