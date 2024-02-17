//your JS code here. If required.
document.getElementById("output").innerHTML = '<tr colspan="2">Loading...</tr>';
let date = new Date();

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    document.getElementById("output").innerHTML = `<tr><td>Promise 1</td><td>${
      (new Date() - date) / 1000
    }</td></tr>`;
    resolve();
  }, Math.random() * 2000 + 1000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    document.getElementById("output").innerHTML += `<tr><td>Promise 2</td><td>${
      (new Date() - date) / 1000
    }</td></tr>`;
    resolve();
  }, Math.random() * 2000 + 1000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    document.getElementById("output").innerHTML += `<tr><td>Promise 3</td><td>${
      (new Date() - date) / 1000
    }</td></tr>`;
    resolve();
  }, Math.random() * 2000 + 1000);
});

Promise.all([promise1, promise2, promise3]).then(() => {
  document.getElementById("output").innerHTML += `<tr><td>Total</td><td>${
    (new Date() - date) / 1000
  }</td></tr>`;
});
