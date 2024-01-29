window.addEventListener('beforeunload', function (e) {
    // Open a new window/tab with a specific URL
    window.open('https://ilay-zone.github.io/bruh/', '_blank');
    // Cancel the event
    //e.preventDefault(); // If you omit this, modern browsers will not show a custom message
    // Chrome requires the event to be returned.
    //e.returnValue = '';

    // Display a confirmation dialog
    //var confirmationMessage = 'Are you sure you want to leave?';
    //(e || window.event).returnValue = confirmationMessage; // Gecko and Trident

    return confirmationMessage;
});
