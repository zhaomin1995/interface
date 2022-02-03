const q1_yes = document.getElementById('q1_yes');
const q1_no = document.getElementById('q1_no');
const q1_hours = document.getElementById('q1+_hours');
const q1_days = document.getElementById('q1+_days');
const q1_weeks = document.getElementById('q1+_weeks');
const q2_text = document.getElementById('q2_text');
const q2_image = document.getElementById('q2_image');
const q2_all = document.getElementById('q2_other');

const submitBtn = document.getElementById('submitButton');

const database = firebase.database();

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    database.ref('/').set({
        q1yes: q1_yes.value,
        q1no: q1_no.value,
        q1hours: q1_hours.value,
        q1days: q1_days.value,
        q1weeks: q1_weeks.value,
        q1text: q2_text.value,
        q1image: q2_image.value,
        q1all: q2_all.value,

    })
})