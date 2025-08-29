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
  "La meilleure façon de prédire l’avenir est de le construire.",

  // ❤️ Amour
  "Aimer, c’est offrir le meilleur de soi sans rien attendre en retour.",
  "L’amour véritable ne crie pas, il agit en silence.",
  "Chaque geste d’amour est une graine semée dans le cœur du monde.",

  // 😊 Bonheur
  "Le bonheur ne se trouve pas, il se construit, un sourire à la fois.",
  "Sois présent à ta vie, c’est là que le bonheur se cache.",
  "Cherche moins le bonheur loin, crée-le là où tu es.",

  // 🤝 Respect
  "Respecter, c’est voir l’humain avant l’opinion.",
  "Le respect ne s’impose pas, il s’inspire.",
  "Celui qui respecte élève le monde autour de lui.",

  // 🙏 Protection de Dieu
  "Quand Dieu veille, aucune tempête ne peut t’emporter.",
  "Sa lumière éclaire même les chemins qu’on ne comprend pas encore.",
  "Sous Sa protection, même l’invisible devient possible."
];
function typeWriter(text, i = 0) {
  if (i === 0) {
    quoteElement.innerHTML = ""; // Utilise innerHTML pour plus de souplesse
  }

  if (i < text.length) {
    // Ajoute un espace insécable si le caractère est un espace
    const char = text[i] === " " ? "&nbsp;" : text[i];
    quoteElement.innerHTML += char;
    setTimeout(() => typeWriter(text, i + 1), 50);
  }
}

function getRandomQuote() {
  const sound = document.getElementById("typeSound");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  typeWriter(quote);

  // Joue le son une fois au clic
  sound.currentTime = 0;
  sound.play();
}



// Affiche une citation au chargement
window.addEventListener("DOMContentLoaded", getRandomQuote);

