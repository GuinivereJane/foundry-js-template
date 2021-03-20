Hooks.once('init', async function() {
  console.log('init');
  window.addEventListener("message", (event) => {
    console.log(event);
    console.log("message recieved");
  }, false);

  window.addEventListener("roll", (event, type, options) => {
    console.log(event);
    console.log(type);
    console.log(options);

    console.log("roll recieved");
    view1.getInt32(0).toString(16)
  }, false);
});

Hooks.once('ready', async function() {
  console.log('ready');

});
