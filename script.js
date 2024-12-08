// Object containing all 50 states and their capitals
const statesAndCapitals = {
    "Alabama": "Montgomery",
    "Alaska": "Juneau",
    "Arizona": "Phoenix",
    "Arkansas": "Little Rock",
    "California": "Sacramento",
    "Colorado": "Denver",
    "Connecticut": "Hartford",
    "Delaware": "Dover",
    "Florida": "Tallahassee",
    "Georgia": "Atlanta",
    "Hawaii": "Honolulu",
    "Idaho": "Boise",
    "Illinois": "Springfield",
    "Indiana": "Indianapolis",
    "Iowa": "Des Moines",
    "Kansas": "Topeka",
    "Kentucky": "Frankfort",
    "Louisiana": "Baton Rouge",
    "Maine": "Augusta",
    "Maryland": "Annapolis",
    "Massachusetts": "Boston",
    "Michigan": "Lansing",
    "Minnesota": "Saint Paul",
    "Mississippi": "Jackson",
    "Missouri": "Jefferson City",
    "Montana": "Helena",
    "Nebraska": "Lincoln",
    "Nevada": "Carson City",
    "New Hampshire": "Concord",
    "New Jersey": "Trenton",
    "New Mexico": "Santa Fe",
    "New York": "Albany",
    "North Carolina": "Raleigh",
    "North Dakota": "Bismarck",
    "Ohio": "Columbus",
    "Oklahoma": "Oklahoma City",
    "Oregon": "Salem",
    "Pennsylvania": "Harrisburg",
    "Rhode Island": "Providence",
    "South Carolina": "Columbia",
    "South Dakota": "Pierre",
    "Tennessee": "Nashville",
    "Texas": "Austin",
    "Utah": "Salt Lake City",
    "Vermont": "Montpelier",
    "Virginia": "Richmond",
    "Washington": "Olympia",
    "West Virginia": "Charleston",
    "Wisconsin": "Madison",
    "Wyoming": "Cheyenne"
};

// Object containing unique fart-related pun messages for each capital
const fartPuns = {
    "Montgomery": "You blew that one away like a southern breeze!",
    "Juneau": "Juneau you just passed gas-tasticly!",
    "Phoenix": "That was a hot and fiery fart of knowledge!",
    "Little Rock": "That was a little toot with a big impact!",
    "Sacramento": "You really let one rip in the capital of California!",
    "Denver": "You hit that one like a Rocky Mountain gust!",
    "Hartford": "That answer was fartsome and sharp!",
    "Dover": "Dover and out, what a blast!",
    "Tallahassee": "You passed that one with a fart-tastic Tallahassee breeze!",
    "Atlanta": "Peachy and pungent, just like Georgia's farts!",
    "Honolulu": "That answer was smooth, like an island breeze fart!",
    "Boise": "Potato-powered and pungent, way to go!",
    "Springfield": "Springing farts of knowledge all around!",
    "Indianapolis": "Fast as a racecar and loud as a fart horn!",
    "Des Moines": "You nailed it, Des Moinely perfect!",
    "Topeka": "That answer blew Kansas clear away!",
    "Frankfort": "You were frank, and that answer fortified your score!",
    "Baton Rouge": "That one was red-hot and fart-tastic!",
    "Augusta": "An August gust of correct answers!",
    "Annapolis": "Like a sea breeze, your answer farted its way to success!",
    "Boston": "That answer was wicked smaht and gassy!",
    "Lansing": "Lansing farts of wisdom left and right!",
    "Saint Paul": "A heavenly answer with a divine fart!",
    "Jackson": "That answer was smooth as a Mississippi fart!",
    "Jefferson City": "That was a declaration of fart-pendence!",
    "Helena": "Like a mountain breeze, you blew that one away!",
    "Lincoln": "Four score and seven farts ago, you nailed it!",
    "Carson City": "Your answer blew across the Nevada desert!",
    "Concord": "That was a revolutionary fart of knowledge!",
    "Trenton": "Like a Jersey shore breeze, you rocked it!",
    "Santa Fe": "That answer smelled like success in New Mexico!",
    "Albany": "That answer blew through like a New York wind!",
    "Raleigh": "North Carolina’s farts never smelled better!",
    "Bismarck": "You marked that one with a gassy Bismarck blast!",
    "Columbus": "Sailed straight to a fart-tacular answer!",
    "Oklahoma City": "A fart-nado of knowledge just hit!",
    "Salem": "You bewitched that one with a fart spell!",
    "Harrisburg": "You rang the Liberty Bell of farts with that one!",
    "Providence": "That answer was divinely inspired and gassy!",
    "Columbia": "A capital performance, full of farts and finesse!",
    "Pierre": "You nailed it, Pierre-fectly pungent!",
    "Nashville": "You sang a fart symphony in Music City!",
    "Austin": "Keep Austin weird, and your farts weirder!",
    "Salt Lake City": "That answer floated up like a Salt Lake bubble!",
    "Montpelier": "You got it, with a whiff of Montpelier magic!",
    "Richmond": "You answered that one with a rich and bold fart!",
    "Olympia": "You ruled the capital fartlympics!",
    "Charleston": "You charmed us with that fart answer!",
    "Madison": "Wisconsin farts have never been so sharp!",
    "Cheyenne": "You blew through that like a Wyoming wind!"
};

let currentState = ""; // Current state being guessed
let score = 0; // Player's score

// Function to pick a random state from the statesAndCapitals object
function getRandomState() {
    const states = Object.keys(statesAndCapitals);
    return states[Math.floor(Math.random() * states.length)];
}

// Function to display a new state for guessing
function displayNewState() {
    currentState = getRandomState();
    document.getElementById("state-name").textContent = currentState;
    document.getElementById("feedback").textContent = ""; // Clear feedback
    document.getElementById("next-state").style.display = "none"; // Hide Next State button
}

// Event listener for form submission
document.getElementById("guess-form").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page reload on form submission

    const userGuess = document.getElementById("capital-guess").value.trim(); // Get user input
    const correctCapital = statesAndCapitals[currentState]; // Get the correct capital

    if (userGuess.toLowerCase() === correctCapital.toLowerCase()) {
        document.getElementById("feedback").textContent = fartPuns[correctCapital];
        document.getElementById("feedback").style.color = "green";
        score++; // Increment score for correct answer
    } else {
        document.getElementById("feedback").textContent = `Wrong! Try again, or proceed to the next state.`;
        document.getElementById("feedback").style.color = "red";
    }

    // Update the score display
    document.getElementById("score").textContent = score;

    // Show the Next State button
    document.getElementById("next-state").style.display = "inline-block";

    // Clear the input field
    document.getElementById("capital-guess").value = "";
});

// Event listener for the "Next State" button
document.getElementById("next-state").addEventListener("click", () => {
    displayNewState(); // Show a new state
});

// Initialize the game with the first state
displayNewState();
