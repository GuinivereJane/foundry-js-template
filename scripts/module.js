Hooks.once('init', async function() {
  console.log('init');
  window.addEventListener("message", (event) => {
    console.log(event);
    console.log("message recieved");
  }, false);
});

Hooks.once('ready', async function() {
  console.log('ready');

});
