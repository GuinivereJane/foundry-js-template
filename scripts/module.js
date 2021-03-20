Hooks.once('init', async function() {
  console.log('init');
  window.addEventListener("message", (event) => {
    console.log(event);
    console.log("message recieved");
    let roll = new Roll(event.data.data);
    roll.evaluate();
    roll.toMessage();
  }, false);

  // window.addEventListener("roll", (event, type, options) => {
  //   console.log(event);
  //   console.log("roll recieved");
  //   let roll = new Roll(event.data.data);
  //   roll.evaluate();
  //   roll.toMessage();
  }, false);
});

Hooks.once('ready', async function() {
  console.log('ready');

});
