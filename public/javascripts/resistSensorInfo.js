require('dotenv').config();

const Airtable = require('airtable');
const base = new Airtable({apiKey: 'keyJ54rs0oKM6fRHQ'}).base('appKrt1miHh9aYtaE');

base('Table 1').create({
  "time": "2019-07-01 11:22:33",
  "temperature": "23",
  "humidity": "70",
  "illuminance": "101",
  "motion": "1"
}, function(err, record) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(record.getId());
});