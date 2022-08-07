# dig-domain [![npm version](https://badge.fury.io/js/dig-domain.svg)](https://badge.fury.io/js/dig-domain)
This is a simple wrapper for the unix/linux/macos dig command. Output contain both raw JSON and corresponding IP's

## Install
```
npm i dig-domain
```

## Usage
```
const dig = require('dig-domain')
dig.dig([args])
```
You can add [all args from dig](https://linux.die.net/man/1/dig) to the args array.
### Examples
```
const dig = require('dig-domain')
dig.dig(['google.com', 'ANY'])
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log('Error:', err);
  });
```
Set custom DNS server:
```
dig.dig(['@8.8.8.4','google.com', 'ANY'])
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log('Error:', err);
  });
```

## Result

The function returns object with following properties IPs, rawData, error
```
{
    error: false,
    IPs: [ '216.58.208.238' ],
    rawData: '\n' +
    '; <<>> DiG 9.10.6 <<>> google.com\n' +
    ';; global options: +cmd\n' +
    ';; Got answer:\n' +
    ';; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 50501\n' +
    ';; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1\n' +
    '\n' +
    ';; OPT PSEUDOSECTION:\n' +
    '; EDNS: version: 0, flags:; udp: 1232\n' +
    ';; QUESTION SECTION:\n' +
    ';google.com.\t\t\tIN\tA\n' +
    '\n' +
    ';; ANSWER SECTION:\n' +
    'google.com.\t\t249\tIN\tA\t216.58.208.238\n' +
    '\n' +
    ';; Query time: 9 msec\n' +
    ';; SERVER: 1.1.1.1#53(1.1.1.1)\n' +
    ';; WHEN: Tue Aug 02 02:06:13 PKT 2022\n' +
    ';; MSG SIZE  rcvd: 55\n' +
    '\n'
}

```
