const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
const cappedTutorials = []
  tutorials.map((tutorial) =>{    
    const newTitle = tutorial.split(" ") 
    for(let i = 0; i < newTitle.length; i++) {
      newTitle[i] = newTitle[i].charAt(0).toUpperCase() + newTitle[i].slice(1);
    }
  return cappedTutorials.push(newTitle.join(' '));
  })
  return cappedTutorials;
}

/*  ***I got the test to pass with this double FOR loop until I remembered
       I had to use a MAP function :-(

function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const titleCased = () => {
  let tutorial = []
    for (let i = 0; i < tutorials.length; i++) {   
    const newString = tutorials[i].split(" ");      
    const newSentence = [];  
      for(let j = 0; j < newString.length; j++) {       
        newSentence.push(capitalizeFirstLetter(newString[j])); 
      }    
    tutorial.push(newSentence.join(' '))
  }
  return tutorial;
}

*/