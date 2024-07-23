const exec = require('child_process').exec;
const fs = require('fs');

const envFile = '.env';

const handleError = function (error, stdout, stderr) {
  console.log(stdout);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
};

let envConfig = '';
fs.readFile(envFile, 'utf8', (err, data = '') => {
  if (err) {
    console.log(err);
    return;
  }

  const rows = data.split('\n');

  rows
    .filter(r => r)
    .forEach(row => {
      const rowSplit = row.split('=');
      const key = rowSplit[0].trim();
      const value = rowSplit[1].trim();

      envConfig += `${key}=${value} `;
    });

  console.log(envConfig);

  exec(`${envConfig} eas update --branch preview --message "update navigation"`, handleError);
  // exec(`${envConfig} eas update --branch production --message "update values"`, handleError)
});
