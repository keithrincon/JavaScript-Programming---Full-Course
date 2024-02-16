let myLeads = ['www.awesomelead.com', 'www.epiclead.com', 'www.greatlead.com'];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');

inputBtn.addEventListener('click', function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

// Render the leads in the unordered list using ulEl.textContent
for (let i = 0; i < myLeads.length; i++) {
  ulEl.textContent += myLeads[i] + ' ';
  //   += concatenate
  // takes the previous value and concats it with the current lead
  // make it work then make it better!
}
