// For triggering events here we make use of custom events through the 
// eventTarget() method for creating target variables and the Event() method for
// creating events

const target = new EventTarget();
const event = new Event('customEvent');

target.addEventListener('customEvent', (event) => {
  console.log(`${event.type} was triggered`);
});

target.dispatchEvent(event);