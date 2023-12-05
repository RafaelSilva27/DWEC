document.addEventListener("DOMContentLoaded", function () {
  // ZONA DE VARIABLES
  const tweetForm = document.getElementById("tweetForm");
  const tweetList = document.getElementById("tweetList");
  const resetButton = document.getElementById("resetButton");

  let tweets = JSON.parse(localStorage.getItem("tweets")) || [];

  renderTweets();

  // ZONA DE EVENTOS
  tweetForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const tweetText = document.getElementById("tweetText").value;

      if (tweetText.trim() !== "") {

          addTweet(tweetText);

          document.getElementById("tweetText").value = "";
      } else {
          showError("El tweet no puede estar vacío");
      }
  });

  resetButton.addEventListener("click", function () {
      resetTweets();
  });

  // ZONA DE FUNCIONES
  function addTweet(tweetText) { //Funcion para agregar un tweet
      tweets.push(tweetText);
      renderTweets();
      localStorage.setItem("tweets", JSON.stringify(tweets));
  }

  function deleteTweet(index) { //Funcion para borrar un tweet
      tweets.splice(index, 1);
      renderTweets();
      localStorage.setItem("tweets", JSON.stringify(tweets));
  }

  function resetTweets() { //Funcion para resetear un tweet
      tweets = [];
      renderTweets();
      localStorage.removeItem("tweets");
  }

  function showError(message) { //Funcion para mostrar error
      const errorDiv = document.createElement("div");
      errorDiv.className = "error-message";
      errorDiv.textContent = message;
      document.body.appendChild(errorDiv);

      setTimeout(function () {
          errorDiv.remove();
      }, 3000);
  }

  function renderTweets() { //Funcion para renderizar los tweets
      tweetList.innerHTML = "";

      tweets.forEach(function (tweet, index) {
          const listItem = document.createElement("li");
          listItem.textContent = tweet;

          const deleteButton = document.createElement("button");
          deleteButton.textContent = "Eliminar";
          deleteButton.addEventListener("click", function () {
              deleteTweet(index);
          });

          listItem.appendChild(deleteButton);

          tweetList.appendChild(listItem);
      });
  }
});
