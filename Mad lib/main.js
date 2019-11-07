document.getElementById("btn").addEventListener('click', displayMessage);

function displayMessage() {
  let verbEnding = document.getElementById("verb").value;
  let pluralNoun = document.getElementById("Plural").value;
  let adjective = document.getElementById("adjective").value;
  let presentTense = document.getElementById("present").value;
  let noun = document.getElementById("noun").value;

  let message =
    'There are too many ' +  verbEnding + ' ' + pluralNoun + 'on this' +  adjective + 'airplane,I screamed, sombody has to' + presentTense + 'on the' + noun + 'to solve this';

  document.getElementById("output").innerHTML = message;
}
