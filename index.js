const { hash } = window.location;

const message = atob(hash.replace("#", ""));
if (message) {
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");

  document.querySelector("h1").innerHTML = message;
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  // adds and removes the "hide" class which is a built in property from the materialize css.
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");

  // the btoa encodes a string in base-64
  const input = document.querySelector("#message-input");
  const encrypted = btoa(input.value);

  // the .select() method just highlights the value once it has been provided.
  const linkInput = document.querySelector("#link-input");
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
});
