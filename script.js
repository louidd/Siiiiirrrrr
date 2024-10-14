const diliButton = document.getElementById('dili-btn');
const ooButton = document.getElementById('oo-btn');
const celebration = document.getElementById('celebration');
const gifImage = document.getElementById('gif');
const message = document.getElementById('message');
const happySound = document.getElementById('happy-sound'); 
const cryingSound = document.getElementById('crying-sound'); 
const idkSound = document.getElementById('idk-sound'); 
let diliClickCount = 0;

// Function to stop all sounds
function stopAllSounds() {
    happySound.pause();
    happySound.currentTime = 0; 
    cryingSound.pause();
    cryingSound.currentTime = 0; 
    idkSound.pause();
    idkSound.currentTime = 0;
}

// Dili button functionality
diliButton.addEventListener('click', () => {
    stopAllSounds();
    
    // Show happy cat GIF and play happy sound
    gifImage.src = 'gifs/happy-cat-cat.gif';  
    message.textContent = 'Arigathankss';  
    happySound.play();  

    // Reset the click count
    diliClickCount = 0;  
});

// Oo button functionality
ooButton.addEventListener('click', () => {
    diliClickCount++; // Increment click count for "Oo"

    const randomX = Math.random() * (window.innerWidth - ooButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - ooButton.offsetHeight);
    
    ooButton.style.position = 'absolute';
    ooButton.style.left = `${randomX}px`;
    ooButton.style.top = `${randomY}px`;

    stopAllSounds(); // Stop any playing sounds

    // Show crying cat and play crying sound if clicked less than 3 times
    if (diliClickCount < 3) {
        gifImage.src = 'gifs/banana-crying-cat.gif';  
        message.textContent = 'Sige na Sir :(';
        cryingSound.play();  
    } else {
        // Show angry cat if clicked 3 or more times
        gifImage.src = 'gifs/angry cat.gif';  
        message.textContent = 'Kinsa raman mi :(';
        idkSound.play();  
    }

    celebration.classList.remove('hidden'); // Show the GIF container
});
