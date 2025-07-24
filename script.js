async function generateFact() {
    const factDisplay = document.getElementById('fact');

    try {
        const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
        const data = await response.json();
        factDisplay.textContent = data.text;
    } catch (error) {
        console.error("Failed to fetch fact:", error);
        factDisplay.textContent = "Oops! Couldn't fetch a fun fact right now.";
    }
}
