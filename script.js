document.addEventListener("DOMContentLoaded", () => {
  const welcomeScreen = document.getElementById("welcome-screen");
  const loadingScreen = document.getElementById("loading-screen");
  const resultScreen = document.getElementById("result-screen");

  const scanButton = document.getElementById("scan-button");
  const noButton = document.getElementById("no-button");
  const restartButton = document.getElementById("restart-button");

  const shrimpImage = document.getElementById("shrimp-image");
  const resultText = document.getElementById("result-text");

  const shrimpResults = [
    { 
      text: "shtrimp", 
      image: "assets/images/shrimp/shrimp1.jpg", 
      audio: "assets/images/shrimp/shrimp.mp3" 
    },
    { 
      text: "deff a shrimp 👍", 
      image: "assets/images/shrimp/shrimp2.jpg", 
      audio: "assets/images/shrimp/shrimp.mp3" 
    },
    { 
      text: "Shrimp Shrimp", 
      image: "assets/images/shrimp/shrimp3.jpg", 
      audio: "assets/images/shrimp/shrimp.mp3" 
    },
    { 
      text: "not a shrimp", 
      image: "assets/images/notShrimp/notShrimp1.jpg", 
      audio: "assets/images/notShrimp/notShrimp.mp3" 
    },
    { 
      text: "not a shrimp", 
      image: "assets/images/notShrimp/notShrimp2.jpg", 
      audio: "assets/images/notShrimp/notShrimp.mp3" 
    },
    { 
      text: "not a shrimp", 
      image: "assets/images/notShrimp/notShrimp3.jpg", 
      audio: "assets/images/notShrimp/notShrimp.mp3" 
    },
  ];

  const noResults = [
    { 
      text: "you have to be scanned", 
      image: "assets/images/tryagain.jpg", 
      audio: "assets/sounds/tryagain.mp3" 
    },
  ];

  // Scan Button Click
  scanButton.addEventListener("click", () => {
    welcomeScreen.style.display = "none";
    loadingScreen.style.display = "block";

    setTimeout(() => {
      loadingScreen.style.display = "none";
      resultScreen.style.display = "block";

      const randomResult =
        shrimpResults[Math.floor(Math.random() * shrimpResults.length)];
      
      shrimpImage.src = randomResult.image;
      resultText.textContent = randomResult.text;

      // Play the corresponding audio
      const resultAudio = new Audio(randomResult.audio);
      resultAudio.play();
    }, 2000); // Simulate loading time
  });

  // No Button Click
  noButton.addEventListener("click", () => {
    welcomeScreen.style.display = "none";
    loadingScreen.style.display = "block";

    setTimeout(() => {
      loadingScreen.style.display = "none";
      resultScreen.style.display = "block";

      const randomNoResult =
        noResults[Math.floor(Math.random() * noResults.length)];
      
      shrimpImage.src = randomNoResult.image;
      resultText.textContent = randomNoResult.text;

      // Play the corresponding audio
      const resultAudio = new Audio(randomNoResult.audio);
      resultAudio.play();
    }, 2000); // Simulate loading time
  });

  // Restart Button
  restartButton.addEventListener("click", () => {
    resultScreen.style.display = "none";
    welcomeScreen.style.display = "block";
  });
});