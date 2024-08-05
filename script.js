fetch("https://icanhazdadjoke.com/slack")
  .then((res) => res.json())
  .then((data) => {
    const joketext = data.attachments[0].text;
    document.getElementById("HelloMF").innerHTML = joketext;
  });
