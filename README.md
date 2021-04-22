# quick start

start server
```js
node server/dist/index.js
```

load page
http://localhost:4000/

# test description

Your monthly phone bill has just arrived, and it's unexpectedly large. You decide to verify the amount by recalculating the bill based on your phone call logs and the phone company's charges.

00:01:07,400-234-090 
00:05:01,701-080-080 
00:03:01,201-211-345 
00:05:00,400-234-090

The example above is a sample of the phone logs, which can be an input file to your script. Each line in the logs describes one phone call using the following format: "hh:mm:ss,nnn-nnn- nnn", where "hh:mm:ss" denotes the duration of the call (in "hh" hours, "mm" minutes and "ss" seconds) and "nnn-nnn-nnn" denotes the 9-digit phone number of the recipient (with no leading zeros).

Each call is billed separately. The billing rules are as follows:

If the call was shorter than 5 minutes, then you pay 3 cents for every started second of the call (e.g. for duration "00:01:07" you pay 67 * 3 = 201 cents).

If the call was at least 5 minutes long, then you pay 150 cents for every started minute of the call (e.g. for duration "00:05:00" you pay 5  150 = 750 cents and for duration "00:05:01" you pay 6  150 = 900 cents).

All calls to the phone number that has the longest total duration of calls are free. In the case of a tie, if more than one phone number shares the longest total duration, the promotion is applied only to the phone number whose numerical value is the smallest among these phone numbers.

Write a NodeJS script to calculate and print the total bill amount for any given phone logs. Front-end part to upload csv & show results nicely - React or Angular.