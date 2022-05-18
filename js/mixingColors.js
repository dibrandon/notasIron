function colorMix (color1, color2) {
    if ((color1 === "red" && color2 === "blue" ) || (color1 ==="blue" && color2 === "red")){
return "violet"
    }
    else if ((color1 === "red" && "yellow") || (color2 ==="yellow" && "red")){
        return "orange"
    }
    else if ((color1 === "blue" && color2 === "yellow") || (color1 === "yellow" && color2 === "blue")) {
        return "green"
    }
}
let myColor = colorMix ("red", "yellow")
console.log(myColor)

// As a bonus, create more colors, make extra conditions to check if the colors are the same, and then try refactoring your function to use switch case conditional statements instead of if/else conditionals. Now that you know all the basics, you can play with the code however you wish. Practice makes the master!
