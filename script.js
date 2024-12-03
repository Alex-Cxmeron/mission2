window.onload = function() {
    // Ask the user if they are over 18
    let age = prompt("Are you over 18? Please enter your age:");

    
    age = Number(age);  // change the string to a number

    if (isNaN(age) || age < 18) {  // Check if the input is a number and if the user is under 18
        alert("You must be over 18 to access this site.");
        window.location.href = "https://www.roblox.com/"; // Send to roblox if underage
    } else {
        const currentMonth = new Date().getMonth();  

        // adds december theme if its december or month 11 as per index
        if (currentMonth === 11) {  
            document.body.classList.add("december-theme");
        }
    }
}
