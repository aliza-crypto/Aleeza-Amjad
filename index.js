// intro animation
const textArray = ["Web Developer", "Computer Engineer"];
let textIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
    currentText = textArray[textIndex];
    let displayText = currentText.substring(0, charIndex);

    document.getElementById("typing").textContent = displayText;

    if (!isDeleting) {
        if (charIndex < currentText.length) {
            charIndex++;
            setTimeout(typeEffect, 200); 
        } else {
            isDeleting = true;
            setTimeout(typeEffect, 1500); 
        }
    } else {
        if (charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, 100);
        } else {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(typeEffect, 500);
        }
    }
}

typeEffect();


//  project image animation
const projectImages = document.querySelectorAll("#projects .imgD,#projects .imgE,#projects .imgF,#projects .imgG");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            projectImages.forEach((img, index) => {
                setTimeout(() => {
                    img.classList.add("show");
                }, index * 300); 
            });
        }else {
            projectImages.forEach(img => img.classList.remove("show"));
        }
    });
}, { threshold: 0.3 });
observer.observe(document.querySelector("#projects"));

 
function sendMail() {
    let parms = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_u9cyg6o", "template_8vj7b2j", parms)
        .then(function () {
            alert("Email sent successfully");

            
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        })
        .catch(function (error) {
            console.error("Failed to send email:", error);
            alert("Failed to send email. Please try again.");
        });
}