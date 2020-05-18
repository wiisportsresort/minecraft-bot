// const net = require('net');
// const util = require('util');
// const dgram = require('dgram');

// const client = dgram.createSocket('udp4');

// client.connect(25565, 'mc.wiisportsresorts.dev', () => {
//   // send handshake packet
//   client.send(Buffer.from([0xfe, 0x01]), (err, bytes) => {
//     console.log('-- sent bytes to remote --');
//     console.log(bytes);
//     console.log('--------------------------');
//   });
//   // send ping packet
// });

// client.on('message', (msg, remoteInfo) => {
//   console.log('------ new message -------');
//   console.log(msg);
//   console.log('------ remote info -------');
//   console.log(remoteInfo);
//   console.log('--------------------------');
//   client.close();
// });

// client.on('close', () => {
//   console.log('----- client closed ------');
// });

// const client = net.connect(25565, 'mc.wiisportsresorts.dev', () => {
//   client.write(
//     Buffer.from([
//       0xfe, // packet identifier for a server list ping
//       0x01, // server list ping's payload (always 1)
//       0xfa, // packet identifier for a plugin message
//     ]),
//   );
// });

// client.on('data', data => {
//   console.log(
//     data
//       .toString()
//       .replace(/\x00(?=\x00\x00)/g, ' // ')
//       .replace(/\x00/g, ''),
//   );
//   client.end();
// });

// client.on('end', hadErr => {
//   console.log(`Client ended with ${hadErr ? 'an' : 'no'} error.`);
//   process.exit(0);
// });

// process.stdin.resume();
