// frontend JavaScript logic

function displayCurrentDateTime() {
    const currentDateTime = new Date().toISOString();
    const formattedDateTime = currentDateTime.replace('T', ' ').substring(0, 19);
    console.log('Current Date and Time (UTC):', formattedDateTime);
}

displayCurrentDateTime();