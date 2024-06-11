const vowels = ["a", "e", "i", "o", "u"];
export function wordCount(paragraph) {
  paragraph = paragraph.trim();
  let p = paragraph.split(/[\s,\t,\n]+/);
  // let newStr = str.replace(/\s+/g, ' ');
  if (p.length === 1 && p[0] === "") {
    return 0;
  }
  return p.length;
}

export function avgWordLength(paragraph) {
  let p = paragraph.split(/[\s,\t,\n]+/);
  let sum = 0,
    avg = 0;
  for (let item of p) {
    sum = sum + item.length;
  }
  if (p.length == 0) {
    avg = 0;
  } else {
    avg = sum / p.length;
  }
  return avg;
}

export function specialCharCount(paragraph) {
  const specialCharacters = ["_", "$", "%"];
  let count = 0;
  for (let item of paragraph) {
    if (specialCharacters.includes(item)) {
      count++;
    }
  }
  return count;
}

export function digitsCount(paragraph) {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let count = 0;
  for (let item of paragraph) {
    if (numbers.includes(item)) {
      count++;
    }
  }
  return count;
}

export function vowelCount(paragraph) {
  let count = 0;
  for (let item of paragraph) {
    if (vowels.includes(item)) {
      count++;
    }
  }
  return count;
}

export function characterCount(paragraph) {
  let p = paragraph.replaceAll(" ", "");
  return p.length;
}

export function alphabetCount(paragraph) {
  let count = 0;
  for (let item in paragraph) {
    if (paragraph.charCodeAt(item) >= 97 && paragraph.charCodeAt(item) <= 122) {
      // (item >= 'a' && item <= 'z')
      count++;
    }
  }
  return count;
}

export function consonantCount(paragraph) {
  // let alphabets = alphabetCount(paragraph);
  // let vowels = vowelCount(paragraph);
  // let consonants = alphabets - vowels;
  let count = 0;
  for (let item of paragraph) {
    if (item >= "a" && item <= "z" && !vowels.includes(item)) count++;
  }
  return count;
}
