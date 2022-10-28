const axios = require('axios').default;
const result = document.querySelector('.result');
const fetchPeople = async () => {
    try {
        const { data } = await axios.get('/api/people')
        const people = data.map((person) => {
            return `<h5>${person.name}</h5>`
        })
        result.innerHTML = people.join('');
    }
    catch (error) {
        result.innerHTML = `<div class="alert alert-danger">can't Fetch Data</div>`
    }
}
fetchPeople();
const btn = document.querySelector('.submit-btn');
const input = document.querySelector('.form-input');
const formAlert = document.querySelector('.form-alert');
btn.addEventListener('click', async (e) => {
    console.log("you click")
    e.preventDefault();
    const nameValue = input.value;
    try {
        const { data } = await axios.post('/api/people', { name: nameValue })
        const h5 = document.createElement('h5');
        h5.textContent = data.person
        result.appendChild(h5);
    }
    catch (error) {
        formAlert.textContent = error.response.data.msg
    }
    input.value = ''
})