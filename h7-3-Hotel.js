let readlineSync = require("readline-sync");

// ### 7.3
// Discount<br />
// Let's discount guests who stay for longer periods.<br />
// Continue from the last exercise and calculate a discount.<br />
// > 5 nights or more, 10%<br />
// > 10 nights or more, 15%<br />
// > 15 nights or more, 20%<br />
// ```
// Only the room is affected by the discount. Breakfast price stays the same.
// ```

console.log("Hello! Welcome to Beachwalk Hotel 🏖");
console.log("How many nights would you like to stay with us?");

let lengthStay = readlineSync.question("> ");
let baseRate = lengthStay * 90;

if (lengthStay < 5) {
    console.log("> That amounts to " + baseRate + "€ for a standard rate");
    }
    
    else if ( 5 <= lengthStay < 10) {
        let baseRate5 = (lengthStay * 90) * 0.9;
        console.log("> That amounts to " + baseRate5 + "€");

        console.log("Would you like to include breakfast? Y/N");
        let breakfast = readlineSync.question("> ");

        if (breakfast === "Y") {
            let brincl = baseRate5 + 10;
            console.log(" Your total amounts to " + brincl + "€, including breakfast");
        
        }   else if (breakfast === "N") {
                let brincl = baseRate5;
                console.log (" Your total remains " + brincl + "€")
            }

    } else if ( 10 <= lengthStay < 15) {
    
        let baseRate10 = (lengthStay * 90) * 0.85;
        console.log("> That amounts to " + baseRate10 + "€");

        console.log("Would you like to include breakfast? Y/N");
        let breakfast = readlineSync.question("> ");

        if (breakfast === "Y") {
            let brincl = baseRate10 + 10;
            console.log(" Your total amounts to " + brincl + "€, including breakfast");
        
        }   else if (breakfast === "N") {
                let brincl = baseRate10;
                console.log (" Your total remains " + brincl + "€")
            }
    
    } else if ( 15 <= lengthStay) {
    
        let baseRate15 = (lengthStay * 90) * 0.80;
        console.log("> That amounts to " + baseRate15 + "€");

        console.log("Would you like to include breakfast? Y/N");
        let breakfast = readlineSync.question("> ");
        
        if (breakfast === "Y") {
            let brincl = baseRate15 + 10;
            console.log(" Your total amounts to " + brincl + "€, including breakfast");
        
        }   else if (breakfast === "N") {
                let brincl = baseRate15;
                console.log (" Your total remains " + brincl + "€")
            }
     }

