//Update the UI with API info from server response
const model = document.getElementById('model');
const score_tag = document.getElementById('score_tag');
const agreement = document.getElementById('agreement');
const subjectivity = document.getElementById('subjectivity');
const confidence = document.getElementById('confidence');
const irony = document.getElementById('irony');


const updateUI = (res) => {
        model.innerHTML = `model:   ${res.model}`;
        score_tag.innerHTML = `Score_Tag:  ${res.score_tag}`;
        agreement.innerHTML = `Agreement:  ${res.agreement}`;
        subjectivity.innerHTML = `Subjectivity: ${res.subjectivity}`;
        confidence.innerHTML =  `Confidence Rank(1-100) : ${res.confidence}%`;
        irony.innerHTML = `Irony:   ${res.irony}`;
}

export { updateUI }