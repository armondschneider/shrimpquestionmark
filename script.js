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
      { text: "shtrimp", image: "assets/images/shrimp/shrimp1.jpg" },
      { text: "deff a shrimp 👍", image: "assets/images/shrimp/shrimp1.jpg" },
      { text: "not a shrimp", image: "assets/images/notShrimp/notShrimp2.jpg" },
    ];
  
    const noResults = [
      { text: "ok weird try again", image: "assets/images/tryagain.jpg" },
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
      }, 2000); // Simulate loading time
    });
  
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
      }, 2000); // Simulate loading time
    });
  
    restartButton.addEventListener("click", () => {
      resultScreen.style.display = "none";
      welcomeScreen.style.display = "block";
    });
  });