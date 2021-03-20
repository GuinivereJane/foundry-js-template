Hooks.once('init', async function() {
  console.log('init');
  window.addEventListener("message", (event) => {
    console.log(event);
    console.log("message recieved");
    let roll = new Roll(event.data.data);
    roll.evaluate();
    roll.toMessage();
  }, false);

  window.addEventListener("roll", (event, type, options) => {
    console.log(event);
    console.log("roll recieved");
    console.log(event.data)
    let roll = new Roll(event.data.data);
    console.log(roll);
    roll.evaluate();
    roll.toMessage();
    console.log(roll);
    console.log(roll.total);

  }, false);
});

Hooks.once('ready', async function() {
  console.log('ready');

});
