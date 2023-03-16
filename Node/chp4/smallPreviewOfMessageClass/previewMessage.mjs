// Classes: MessageChannel MessageEvent MessagePort
// MessagePort represents the end of a bidirectional communication
// We instantiate through


const {port1, port2} = MessageChannel();

port1.on('message', (message) => {
  console.log(message);
});
port2.postMessage({data: 'Hello World'});


// process object refers to the current process running your application
// you can access the stdin stdout... also you can terminate the current process
process.exit(42)

// Type echo $? for knowing the exit status of the application

// or killing a process
process.kill(process.pid, 'SIGKILL');

// echo $?
