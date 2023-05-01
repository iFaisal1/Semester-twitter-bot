const rwClient = require('./TwitterClient.js')

// Set the start and end dates of the semester
const startDate = new Date('2023-03-12');
const endDate = new Date('2023-06-22');

// Define the function to print the progress bar and time remaining
function printProgress() {
  // Get the current date and time
  const today = new Date();

  // Check if the current time is 8:00 AM
if (today.getHours() === 8 && today.getMinutes() === 0) {
    console.log(' Good morning ')
    // Calculate the days remaining until the end of the semester
    const daysRemaining = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));

    // Calculate the percentage of days passed and print the progress bar
    const daysPassed = Math.ceil((today - startDate) / (1000 * 60 * 60 * 24));
    const percentage = Math.round(daysPassed / 102 * 100);
    const progressBar = '🁢'.repeat(percentage / 4) + '🁣'.repeat(25 - (percentage / 4));

    // Calculate the week number and add it to the output
    const weekNumber = Math.ceil(daysPassed / 7);
    const output = `${progressBar}]${percentage}%\n\n${daysPassed}/102 days passed\n${daysRemaining} days left\nWeek ${weekNumber}/15\n`;
    // tweet the output
    rwClient.v2.tweet(output);
}
}
// Call the function every minute
setInterval(printProgress, 60000);

