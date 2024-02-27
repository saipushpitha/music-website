const emailInput = document.getElementById("emailInput");
const signupButton = document.getElementById("signupButton");

// Add an event listener to the sign-up button
signupButton.addEventListener("click", function() {
    // Validate the email address
    if (validateEmail(emailInput.value)) {
        // Redirect to the desired URL
        window.location.href = "https://saipushpitha.github.io/music-exp/";
    }
});

// Email validation function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
    
        function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }
        var mysong = document.getElementById("mysong");
        var icon = document.getElementById("icon");
        
        icon.onclick = function(){
            if(mysong.paused){
                mysong.play();
                icon.src = "pause.png";
            }else{
                mysong.pause();
                icon.src = "play.png";
            }
        }

