let readlineSync = require("readline-sync");

// ### 7.5
// Extra guest<br />
// Continue from the last exercise.<br />
// Ask the user how many guests will stay in the room (1 or 2)<br />
// > Add 10€ per night for an extra guest (Before discount)
// ```
// Don't forget the extra breakfast 🥐

console.log("Hello! Welcome to Beachwalk Hotel 🏖");


console.log("How many nights would you like to stay with us?");
let lengthStay = readlineSync.question("> ");

console.log("And how many of you will be staying? 1 or 2?");
let nPeople = readlineSync.question("> ");

console.log("Which type of room would you like? Normal/Deluxe/Deluxe suite");
let roomType = readlineSync.question("> ");

if (nPeople = 1) {
    if (roomType === "Normal") {
        let baseRate = lengthStay * 90;
    
        if (lengthStay < 5) {
            console.log("> That amounts to " + baseRate + "€ for a standard rate");
            }
            console.log("Would you like to include breakfast? Y/N");
    
                let breakfast = readlineSync.question("> ");
        
                if (breakfast === "Y") {
                    let brincl = baseRate + 10;
                    console.log(" Your total amounts to " + brincl + "€, including breakfast");
                
                }   else if (breakfast === "N") {
                        let brincl = baseRate;
                        console.log (" Your total remains " + brincl + "€")
                    }
            
            else if ( 5 <= lengthStay < 10) {
                let baseRate5 = (lengthStay * 90) * 0.9;
                
        
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
        
    
        } else if (roomType === "Deluxe") {
            let DelbaseRate = (lengthStay * 120)
    
            if (lengthStay < 5) {
                console.log("> That amounts to " + DelbaseRate + "€ for a standard rate");
                }
                console.log("Would you like to include breakfast? Y/N");
    
                let breakfast = readlineSync.question("> ");
        
                if (breakfast === "Y") {
                    let brincl = DelbaseRate + 10;
                    console.log(" Your total amounts to " + brincl + "€, including breakfast");
                
                }   else if (breakfast === "N") {
                        let brincl = DelbaseRate;
                        console.log (" Your total remains " + brincl + "€")
                    }
                
                else if ( 5 <= lengthStay < 10) {
                    let DelbaseRate5 = (lengthStay * 90) * 0.9;
                    
            
                    console.log("Would you like to include breakfast? Y/N");
                    let breakfast = readlineSync.question("> ");
            
                    if (breakfast === "Y") {
                        let brincl = DelbaseRate5 + 10;
                        console.log(" Your total amounts to " + brincl + "€, including breakfast");
                    
                    }   else if (breakfast === "N") {
                            let brincl = DelbaseRate5;
                            console.log (" Your total remains " + brincl + "€")
                        }
            
                } else if ( 10 <= lengthStay < 15) {
                
                    let DelbaseRate10 = (lengthStay * 90) * 0.85;
                    
            
                    console.log("Would you like to include breakfast? Y/N");
                    let breakfast = readlineSync.question("> ");
            
                    if (breakfast === "Y") {
                        let brincl = DelbaseRate10 + 10;
                        console.log(" Your total amounts to " + brincl + "€, including breakfast");
                    
                    }   else if (breakfast === "N") {
                            let brincl = DelbaseRate10;
                            console.log (" Your total remains " + brincl + "€")
                        }
                
                } else if ( 15 <= lengthStay) {
                
                    let DelbaseRate15 = (lengthStay * 90) * 0.80;
                    
            
                    console.log("Would you like to include breakfast? Y/N");
                    let breakfast = readlineSync.question("> ");
                    
                    if (breakfast === "Y") {
                        let brincl = DelbaseRate15 + 10;
                        console.log(" Your total amounts to " + brincl + "€, including breakfast");
                    
                    }   else if (breakfast === "N") {
                            let brincl = DelbaseRate15;
                            console.log (" Your total remains " + brincl + "€")
                        }
                 }
            
    
        } else if (roomType === "Deluxe suite") {
        
            let DelsuiteRate = (lengthStay * 150)
            
    
            if (lengthStay < 5) {
                console.log("> That amounts to " + DelsuiteRate + "€ for a standard rate");
                }
                console.log("Would you like to include breakfast? Y/N");
    
                let breakfast = readlineSync.question("> ");
        
                if (breakfast === "Y") {
                    let brincl = DelsuiteRate + 10;
                    console.log(" Your total amounts to " + brincl + "€, including breakfast");
                
                }   else if (breakfast === "N") {
                        let brincl = DelsuiteRate;
                        console.log (" Your total remains " + brincl + "€")
                    }
                
                else if ( 5 <= lengthStay < 10) {
                    let DelsuiteRate5 = (lengthStay * 90) * 0.9;
            
                    console.log("Would you like to include breakfast? Y/N");
                    let breakfast = readlineSync.question("> ");
            
                    if (breakfast === "Y") {
                        let brincl = DelsuiteRate5 + 10;
                        console.log(" Your total amounts to " + brincl + "€, including breakfast");
                    
                    }   else if (breakfast === "N") {
                            let brincl = DelsuiteRate5;
                            console.log (" Your total remains " + brincl + "€")
                        }
            
                } else if ( 10 <= lengthStay < 15) {
                
                    let DelsuiteRate10 = (lengthStay * 90) * 0.85;
                    
            
                    console.log("Would you like to include breakfast? Y/N");
                    let breakfast = readlineSync.question("> ");
            
                    if (breakfast === "Y") {
                        let brincl = DelsuiteRate10 + 10;
                        console.log(" Your total amounts to " + brincl + "€, including breakfast");
                    
                    }   else if (breakfast === "N") {
                            let brincl = DelsuiteRate10;
                            console.log (" Your total remains " + brincl + "€")
                        }
                
                } else if ( 15 <= lengthStay) {
                
                    let DelsuiteRate15 = (lengthStay * 90) * 0.80;
            
                    console.log("Would you like to include breakfast? Y/N");
                    let breakfast = readlineSync.question("> ");
                    
                    if (breakfast === "Y") {
                        let brincl = DelsuiteRate15 + 10;
                        console.log(" Your total amounts to " + brincl + "€, including breakfast");
                    
                    }   else if (breakfast === "N") {
                            let brincl = DelsuiteRate15;
                            console.log (" Your total remains " + brincl + "€")
                        }
                 }
        }
} else {                        //nPeople = 2  
    if (roomType === "Normal") {
        let baseRate = lengthStay * 90;
        let baseRate2 = baseRate + 10
    
        if (lengthStay < 5) {
            console.log("> That amounts to " + baseRate2 + "€ for a standard rate");
            }
            console.log("Would you like to include breakfast? Y/N");
    
                let breakfast = readlineSync.question("> ");
        
                if (breakfast === "Y") {
                    let brincl = baseRate2 + 10;
                    console.log(" Your total amounts to " + brincl + "€, including breakfast");
                
                }   else if (breakfast === "N") {
                        let brincl = baseRate2;
                        console.log (" Your total remains " + brincl + "€")
                    }
            
            else if ( 5 <= lengthStay < 10) {
                
                let baseRate5 = ((lengthStay * 90) + 10) * 0.9;
        
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
            
                let baseRate10 = ((lengthStay * 90) + 10) * 0.85;
        
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
            
                let baseRate15 = ((lengthStay * 90) + 10)* 0.80;
        
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
        
    
        } else if (roomType === "Deluxe") {
            let DelbaseRate = (lengthStay * 120)
            let DelbaseRate2 = DelbaseRate + 10

            if (lengthStay < 5) {
                console.log("> That amounts to " + DelbaseRate2 + "€ for a standard rate");
                }
                console.log("Would you like to include breakfast? Y/N");
    
                let breakfast = readlineSync.question("> ");
        
                if (breakfast === "Y") {
                    let brincl = DelbaseRate2 + 10;
                    console.log(" Your total amounts to " + brincl + "€, including breakfast");
                
                }   else if (breakfast === "N") {
                        let brincl = DelbaseRate2;
                        console.log (" Your total remains " + brincl + "€")
                    }
                
                else if ( 5 <= lengthStay < 10) {
                    let DelbaseRate5 = ((lengthStay * 90) + 10) * 0.9;
            
                    console.log("Would you like to include breakfast? Y/N");
                    let breakfast = readlineSync.question("> ");
            
                    if (breakfast === "Y") {
                        let brincl = DelbaseRate5 + 10;
                        console.log(" Your total amounts to " + brincl + "€, including breakfast");
                    
                    }   else if (breakfast === "N") {
                            let brincl = DelbaseRate5;
                            console.log (" Your total remains " + brincl + "€")
                        }
            
                } else if ( 10 <= lengthStay < 15) {
                
                    let DelbaseRate10 = ((lengthStay * 90) + 10) * 0.85;
                    
            
                    console.log("Would you like to include breakfast? Y/N");
                    let breakfast = readlineSync.question("> ");
            
                    if (breakfast === "Y") {
                        let brincl = DelbaseRate10 + 10;
                        console.log(" Your total amounts to " + brincl + "€, including breakfast");
                    
                    }   else if (breakfast === "N") {
                            let brincl = DelbaseRate10;
                            console.log (" Your total remains " + brincl + "€")
                        }
                
                } else if ( 15 <= lengthStay) {
                
                    let DelbaseRate15 = ((lengthStay * 90) + 10)* 0.80;
                    
            
                    console.log("Would you like to include breakfast? Y/N");
                    let breakfast = readlineSync.question("> ");
                    
                    if (breakfast === "Y") {
                        let brincl = DelbaseRate15 + 10;
                        console.log(" Your total amounts to " + brincl + "€, including breakfast");
                    
                    }   else if (breakfast === "N") {
                            let brincl = DelbaseRate15;
                            console.log (" Your total remains " + brincl + "€")
                        }
                 }
            
    
        } else if (roomType === "Deluxe suite") {
        
            let DelsuiteRate = (lengthStay * 150) + 10 
            
    
            if (lengthStay < 5) {
                console.log("> That amounts to " + DelsuiteRate + "€ for a standard rate");
                }
                console.log("Would you like to include breakfast? Y/N");
    
                let breakfast = readlineSync.question("> ");
        
                if (breakfast === "Y") {
                    let brincl = DelsuiteRate + 10;
                    console.log(" Your total amounts to " + brincl + "€, including breakfast");
                
                }   else if (breakfast === "N") {
                        let brincl = DelsuiteRate;
                        console.log (" Your total remains " + brincl + "€")
                    }
                
                else if ( 5 <= lengthStay < 10) {
                    let DelsuiteRate5 = ((lengthStay * 90) + 10) * 0.9;
            
                    console.log("Would you like to include breakfast? Y/N");
                    let breakfast = readlineSync.question("> ");
            
                    if (breakfast === "Y") {
                        let brincl = DelsuiteRate5 + 10;
                        console.log(" Your total amounts to " + brincl + "€, including breakfast");
                    
                    }   else if (breakfast === "N") {
                            let brincl = DelsuiteRate5;
                            console.log (" Your total remains " + brincl + "€")
                        }
            
                } else if ( 10 <= lengthStay < 15) {
                
                    let DelsuiteRate10 = ((lengthStay * 90) + 10) * 0.85;
                    
            
                    console.log("Would you like to include breakfast? Y/N");
                    let breakfast = readlineSync.question("> ");
            
                    if (breakfast === "Y") {
                        let brincl = DelsuiteRate10 + 10;
                        console.log(" Your total amounts to " + brincl + "€, including breakfast");
                    
                    }   else if (breakfast === "N") {
                            let brincl = DelsuiteRate10;
                            console.log (" Your total remains " + brincl + "€")
                        }
                
                } else if ( 15 <= lengthStay) {
                
                    let DelsuiteRate15 = ((lengthStay * 90) + 10) * 0.80;
            
                    console.log("Would you like to include breakfast? Y/N");
                    let breakfast = readlineSync.question("> ");
                    
                    if (breakfast === "Y") {
                        let brincl = DelsuiteRate15 + 10;
                        console.log(" Your total amounts to " + brincl + "€, including breakfast");
                    
                    }   else if (breakfast === "N") {
                            let brincl = DelsuiteRate15;
                            console.log (" Your total remains " + brincl + "€")
                        }
                 }
        }
}