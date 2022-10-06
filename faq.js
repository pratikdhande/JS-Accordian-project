const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];

function showFaq(index) {
  // console.log( index);
  document.querySelectorAll(".faq p")[index].classList.toggle("hidden");
}


createFaq();

function createFaq() {
  for(let i = 0; i < faqData.length; i++){

    let faq = document.createElement("div");
    faq.className = "faq";

    // creating faq heading div
    let faqHeader = document.createElement("div");
    faqHeader.classList.add("faq_header");

    // creating button
    let btn = document.createElement("button");
    btn.type = "button";
    btn.classList.add("show_btn");
    btn.innerHTML = "+";

    // creating h3
    let ques = document.createElement("h3"); 
    ques.innerText = faqData[i].question;
    
    // creating p
    let p = document.createElement("p");
    p.innerText = faqData[i].answer;
    p.classList.add("hidden");

    faqHeader.appendChild(ques);
    faqHeader.appendChild(btn);
    faq.appendChild(faqHeader);
    faq.appendChild(p);
    accordianBody.appendChild(faq);
  }
}
 
function btnStatusUpdate() {
  const button = document.querySelectorAll(".show_btn");
  // console.log("aLL bUTTONS",button)
  button.forEach((btn,index) => {
    btn.addEventListener("click", ()=>{
      showFaq(index);
    })
  });
}
btnStatusUpdate();
