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
    "Montgomery": "That fart took off faster than a steamboat on the Alabama River!",
    "Juneau": "Juneau you just released an Alaskan blast colder than glacier winds!",
    "Phoenix": "That fart burned as hot as the Phoenix sun in July!",
    "Little Rock": "That was a big toot for a Little Rock answer!",
    "Sacramento": "You breezed through that one like the delta winds of Sacramento!",
    "Denver": "You let one rip that soared higher than the Mile High City!",
    "Hartford": "That was a fart-worthy insurance policy for Hartford success!",
    "Dover": "Dover and out! That answer smelled like First State glory!",
    "Tallahassee": "That answer floated up like a swampy Florida breeze!",
    "Atlanta": "You peach-farted your way through the capital of Georgia!",
    "Honolulu": "That was a tropical fart, fresh as Hawaiian flowers!",
    "Boise": "You just potato-farted your way through Idaho’s finest capital!",
    "Springfield": "Your answer jumped higher than Lincoln's top hat with a Springfield puff!",
    "Indianapolis": "That fart raced to the finish line like the Indy 500!",
    "Des Moines": "That Des Moinely fart was ear-poppingly perfect, like Iowa cornfields!",
    "Topeka": "That fart came roaring across the Kansas prairie!",
    "Frankfort": "You Frank-farted your way to success, like a bold Kentucky breeze!",
    "Baton Rouge": "That answer was spicy, like a Cajun fart in Baton Rouge!",
    "Augusta": "That fart sailed up like Maine's lighthouses guiding ships to shore!",
    "Annapolis": "That sea breeze fart floated straight from the Naval Academy!",
    "Boston": "That was wicked smaht, like a Boston Tea Party toot!",
    "Lansing": "That fart roared like the Detroit Lions crushing their rivals!",
    "Saint Paul": "That heavenly fart floated up like Saint Paul's cathedral air!",
    "Jackson": "That answer blew through like a soulful Mississippi fart!",
    "Jefferson City": "Your fart declared independence with Jeffersonian flair!",
    "Helena": "That fart breezed through like the Rocky Mountain winds of Montana!",
    "Lincoln": "Four score and seven farts ago, you nailed that answer!",
    "Carson City": "That fart blasted across Nevada like a desert dust storm!",
    "Concord": "That revolutionary fart echoed through New Hampshire history!",
    "Trenton": "That Jersey fart crossed the Delaware in Trenton style!",
    "Santa Fe": "Your fart painted the sky like a New Mexican sunset!",
    "Albany": "That fart blasted upstate like a roaring Adirondack wind!",
    "Raleigh": "You puffed that answer out with Carolina charm!",
    "Bismarck": "That answer shook the plains like a thunderous prairie fart in Bismarck!",
    "Columbus": "That was a voyage of discovery, straight to fart victory!",
    "Oklahoma City": "That fart ripped through like a twister in Tornado Alley!",
    "Salem": "That answer was bewitching, like a Salem fart spell!",
    "Harrisburg": "That fart rang the Liberty Bell of Pennsylvania pride!",
    "Providence": "Your fart blessed Rhode Island like divine inspiration!",
    "Columbia": "That Carolina fart rose up like a Gamecock victory cheer!",
    "Pierre": "That prairie fart blew across South Dakota like Mount Rushmore winds!",
    "Nashville": "That fart hit all the right notes in Music City!",
    "Austin": "Keep Austin weird, and your farts even weirder!",
    "Salt Lake City": "That answer bubbled up like the Salt Lake's natural gases!",
    "Montpelier": "That Vermont fart smelled of fresh maple syrup and victory!",
    "Richmond": "Your answer marched to victory like a bold Confederate fart!",
    "Olympia": "That evergreen fart floated through the forests of Olympia!",
    "Charleston": "That answer breezed through like a Lowcountry Charleston charm!",
    "Madison": "That Wisconsin cheese fart smelled of success and dairy air!",
    "Cheyenne": "That answer galloped across Wyoming like a cowboy’s fart!"
};


let remainingStates = Object.keys(statesAndCapitals); // Keep track of states not yet answered correctly
let currentState = ""; // Current state being guessed
let score = 0; // Player's score
let autoNextStateTimeout = null; // Holds the timeout ID for auto-progress

// Function to pick a random state from the remaining states
function getRandomState() {
    return remainingStates[Math.floor(Math.random() * remainingStates.length)];
}

// Function to display a new state for guessing
function displayNewState() {
    if (remainingStates.length === 0) {
        document.getElementById("state-name").textContent = "You guessed all the states correctly!";
        document.getElementById("feedback").textContent = "Congratulations, you're a fart-tastic genius!";
        document.getElementById("feedback").style.color = "green";
        document.getElementById("next-state").style.display = "none";
        return;
    }

    currentState = getRandomState();
    document.getElementById("state-name").textContent = currentState;
    document.getElementById("feedback").textContent = ""; // Clear feedback
    document.getElementById("next-state").style.display = "none"; // Hide Next State button
}

// Function to update the list of correctly answered states
function updateCorrectlyAnsweredList(state, capital, pun) {
    const list = document.getElementById("correct-list");
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${state}:</strong> ${capital} - ${pun}`;
    list.appendChild(listItem);
}

// Function to progress automatically to the next state
function autoProgressToNextState() {
    autoNextStateTimeout = setTimeout(() => {
        displayNewState();
    }, 5000); // 5 seconds delay
}

// Event listener for form submission
document.getElementById("guess-form").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page reload on form submission

    const userGuess = document.getElementById("capital-guess").value.trim(); // Get user input
    const correctCapital = statesAndCapitals[currentState]; // Get the correct capital

    if (userGuess.toLowerCase() === correctCapital.toLowerCase()) {
        const pun = fartPuns[correctCapital];
        document.getElementById("feedback").textContent = pun;
        document.getElementById("feedback").style.color = "green";
        score++; // Increment score for correct answer
        updateCorrectlyAnsweredList(currentState, correctCapital, pun); // Update the list
        remainingStates = remainingStates.filter((state) => state !== currentState); // Remove the guessed state
        autoProgressToNextState(); // Start the auto-progress timer
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
    clearTimeout(autoNextStateTimeout); // Cancel auto-progress if user manually clicks
    displayNewState(); // Show a new state
});

// Initialize the game with the first state
displayNewState();
