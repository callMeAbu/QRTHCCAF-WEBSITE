
// nav bar controls
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');

    // Toggle icon between ☰ and ✖
    if (navLinks.classList.contains('active')) {
        hamburger.innerHTML = '✖';
    } else {
        hamburger.innerHTML = '☰';
    }
});




// Our leadership team JS code

const teamData = [
    {
        name: "Dr. Anario Onyeukwu",
        position: "Executive Chairman",
        caption: '"True change starts with action, not just words."',
        bio: "Dr. Anario Onyeukwu is a visionary leader and humanitarian dedicated to improving the lives of underserved communities. With a background in community development and philanthropy, he has led numerous initiatives that provide healthcare, education, and economic empowerment to those in need. As the Executive Chairman of QRTHCCAF, Dr. Onyeukwu drives the foundation’s mission with a focus on sustainability and long-term impact.",
        image: "/images/dr anario.jpg"
    },
    {
        name: "Rev. Dr. Onyeukwu",
        position: "Chairman Coordinator",
        caption: '"Compassion and leadership go hand in hand when serving humanity."',
        bio: "Rev. Dr. Onyeukwu Eze is a passionate humanitarian, visionary leader, and advocate for social welfare and community development. With a strong background in faith-driven service and philanthropy, he believes that true leadership is measured by the positive impact on people’s lives. As the Chairman Coordinator of QRTHCCAF, he plays a pivotal role in strategic planning, partnership building, and program execution, ensuring that the foundation's initiatives reach the right people at the right time. His leadership is rooted in compassion, providing hope, relief, and sustainable solutions to individuals and communities in need. Through his dedication to service, Rev. Dr. Onyeukwu Eze continues to inspire and drive change, reinforcing QRTHCCAF’s mission to uplift, empower, and transform lives.",
        image: "/images/dr eze.jpg"
    },
    {
        name: "Mrs. Nkechi Okorie",
        position: "Secretary",
        caption: '"Every life we touch is a step toward a better world."',
        bio: "Mrs. Nkechi Okorie is the backbone of QRTHCCAF’s administrative operations. With a strong commitment to organization and efficiency, she ensures that every initiative runs smoothly. Beyond handling logistics and coordination, Nkechi is a passionate advocate for education and women’s empowerment, believing that knowledge is the foundation of change.",
        image: "/images/mrs nkechi.jpg"
    },
    {
        name: "Mr. Akolo Averson",
        position: "Medical Specialist",
        caption: '"Good health is not a privilege; it is a right for all."',
        bio: "With years of experience in public health and medical outreach, Akolo Averson is committed to bringing quality healthcare to underserved communities. He leads QRTHCCAF’s medical programs, ensuring that free medical services, checkups, and treatments reach those who need them most. His compassionate approach to healthcare has impacted countless lives, making a tangible difference in the fight against health disparities.",
        image: "/images/akolo averson.jpg"
    },
    {
        name: "Mr. Abubakar Mohammed",
        position: "IT Specialist",
        caption: '"Technology is a powerful tool for social change."',
        bio: "Abubakar Mohammed is the digital mind behind QRTHCCAF’s technological initiatives. From managing the foundation’s digital presence to ensuring smooth communication, he leverages IT solutions to enhance outreach efforts. Passionate about using technology for good, Abubakar is dedicated to expanding QRTHCCAF’s reach and making humanitarian services more accessible.",
        image: "/images/abubakarmohammedIT.png"
    }
];

function showBio(index) {
    document.getElementById("bioName").innerText = teamData[index].name;
    document.getElementById("bioPosition").innerText = teamData[index].position;
    document.getElementById("bioCaption").innerText = teamData[index].caption;
    document.getElementById("bioText").innerText = teamData[index].bio;
    document.getElementById("bioImage").src = teamData[index].image;
    
    document.getElementById("bioSlide").classList.add("show");
}

function closeBio() {
    document.getElementById("bioSlide").classList.remove("show");
}




// our programs number counter 

// Number Counter Animation (Moderately Slow)
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".number");
    const speed = 120; // Adjusted speed for a smoother count

    counters.forEach((counter) => {
        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            let count = +counter.innerText.replace("+", ""); // Remove + for calculation

            const increment = Math.ceil(target / speed);

            if (count < target) {
                counter.innerText = count + increment + "+";
                setTimeout(updateCounter, 150); // Adjusted for smoother transition
            } else {
                counter.innerText = target + "+"; // Ensure the final number includes +
            }
        };

        updateCounter();
    });
});


