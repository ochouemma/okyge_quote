const quoteElement = document.getElementById("quote");

const quotes = [
  "La vie est un mystère qu’il faut vivre, et non un problème à résoudre.",
  "Le succès n’est pas final, l’échec n’est pas fatal : c’est le courage de continuer qui compte.",
  "Il n’y a pas de raccourci vers n’importe où qui en vaille la peine.",
  "Faites de votre vie un rêve, et d’un rêve, une réalité.",
  "Le bonheur vient de vos propres actions.",
  "Chaque jour est une nouvelle chance de changer votre vie.",
  "Croyez en vous et vous serez invincible.",
  "Le succès, c’est tomber sept fois, se relever huit.",
  "N’attendez pas les opportunités. Créez-les.",
  "La meilleure façon de prédire l’avenir est de le construire."
];

function typeWriter(text, i = 0) {
  if (i < text.length) {
    quoteElement.textContent += text.charAt(i);
    setTimeout(() => typeWriter(text, i + 1), 50);
  }
}

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteElement.textContent = "";
  typeWriter(quote);
}

// Affiche une citation au chargement
window.addEventListener("DOMContentLoaded", getRandomQuote);
