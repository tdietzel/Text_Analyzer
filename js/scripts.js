// Utility Logic

function isEmpty(testString) {
  return (testString.trim().length === 0);
}

// UI Logic

function handleFormSubmission() {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const newPassage = offensiveLanguage(passage);
  const wordCount = wordCounter(newPassage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});

// Business Logic

function offensiveLanguage (passage, newPassage) {
  const textArray = passage.split(" ");
  textArray.forEach((element) => {
      if (element === "zoinks" || element === "muppeteer" || element === "biffaroni" || element === "loopdaloop") {
          textArray.splice(textArray.indexOf(element), 1);
      } 
  })
  newPassage = textArray.join(" ");
  return newPassage;
}

function wordCounter(text) {
    if (isEmpty(text)) {
      return 0;
    }
    let wordCount = 0;
    const textArray = text.split(" ");
    textArray.forEach(function(element) {
      if (!Number(element)) {
        wordCount++;
      }
    });
    return wordCount;
}
  
function numberOfOccurrencesInText(word, text) {
  if (word.trim().length === 0) {
    return 0;
  }
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function boldPassage(word, text) {
  if (isEmpty(word) || isEmpty(text)) {
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (word === element) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    p.append(" ");
  });
  return p;
}


// Not included yet
function commonWords(text) {
  const textArray = text.split(" ");
  let wordFrequencies = [];
  let commonList = [];
  textArray.forEach((word) => {
    if (wordFrequencies.includes(word)) {
      let numTarget = wordFrequencies.indexOf(word) + 1;
      wordFrequencies[numTarget]++;
    } else {
      wordFrequencies.push(word, 1);
    }
  });

  wordFrequencies.forEach((element) => {
    commonList.push(element);
    if (!Number(element)) {
      let numTarget = commonList.indexOf(element);
      let result = numTarget + 1;
      console.log(element + ": " + commonList[result])
      console.log(commonList[result])
    }
  });
  text = commonList.join(" ");
  console.log(text);
}