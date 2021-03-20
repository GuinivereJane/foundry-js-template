Hooks.once('init', async function() {
  console.log('init');
  window.addEventListener("message", (event) => {
    console.log(event);
    console.log("message recieved");
  }, false);

  window.addEventListener("roll", (event) => {
    console.log(event);
    console.log("roll recieved");
  }, false);
});

Hooks.once('ready', async function() {
  console.log('ready');

});
