/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className === "nav-menu") {
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }


  /* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".home-info", { delay: 200 });
sr.reveal(".hire-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".home-left", { delay: 300 });

/* more about */
sr.reveal(".more-about-right", { delay: 200 });
sr.reveal(".more-about-left", { delay: 200 });
/* -- PROJECT BOX -- */
sr.reveal(".project-title", { interval: 200 });
sr.reveal(".project-details", { interval: 200 });

/*  ------contact-----*/
sr.reveal(".contact-heading",{DelayNode : 500});
sr.reveal(".contact-add",{DelayNode : 600});
sr.reveal(".contact-mail",{DelayNode : 700});



/* email js  */

function email() {
  console.log("button clicked");
  (function () {
    emailjs.init("xVXPZrMUlknB2RiMY"); // public key
  })();

  var params = {
    sendername: document.querySelector("#name").value,
    senderemail: document.querySelector("#email").value,
    subject: document.querySelector(".subject").value,
    message: document.querySelector("#message").value,
  };

  var serviceID = "service_d14t70f"; // email service id

  var templateID = "template_mu9onki"; // template id

  if (
    params.sendername != "" &&
    params.senderemail != "" &&
    params.subject != "" &&
    params.message != ""
  ) {
    console.log(params);
    emailjs.send(serviceID, templateID, params).then(
      function (response) {
        alert(" thank you for contacting me !!!");
        console.log("SUCCESS!", response.status, response.text);
        document.querySelector("#message").value = "";

  document.querySelector("#name").value = "";

  document.querySelector("#email").value = "";
  document.querySelector(".subject").value = "";
      },
      function (err) {
        console.log("FAILED...", err);
      }
    );
  } else {
    alert("please fill the form");
  }

  
}
