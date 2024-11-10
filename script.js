// Dataset
const speakers = [
  {
    image: "assets/speaker1.png",
    name: "John Doe",
    bio: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    designation: "Cheif Marketing Officer",
    company: "Acme Corp",
  },
  {
    image: "assets/speaker2.png",
    name: "John Doe",
    bio: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    designation: "Cheif Engagement Officer",
    company: "Acquila",
  },
  {
    image: "assets/speaker3.png",
    name: "John Doe",
    bio: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    designation: "Cheif Technical Developer",
    company: "Pantheon",
  },
  {
    image: "assets/speaker4.png",
    name: "John Doe",
    bio: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    designation: "Cheif Marketing Officer",
    company: "Specbee",
  },
  {
    image: "assets/speaker1.png",
    name: "John Doe",
    bio: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    designation: "Cheif Marketing Officer",
    company: "Acme Corp",
  },
  {
    image: "assets/speaker2.png",
    name: "John Doe",
    bio: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    designation: "Cheif Engagement Officer",
    company: "Acquila",
  },
  {
    image: "assets/speaker3.png",
    name: "John Doe",
    bio: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    designation: "Cheif Technical Developer",
    company: "Pantheon",
  },
  {
    image: "assets/speaker4.png",
    name: "John Doe",
    bio: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    designation: "Cheif Marketing Officer",
    company: "Specbee",
  },
  {
    image: "assets/speaker1.png",
    name: "John Doe",
    bio: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    designation: "Cheif Marketing Officer",
    company: "Acme Corp",
  },
  {
    image: "assets/speaker2.png",
    name: "John Doe",
    bio: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    designation: "Cheif Engagement Officer",
    company: "Acquila",
  },
  {
    image: "assets/speaker3.png",
    name: "John Doe",
    bio: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    designation: "Cheif Technical Developer",
    company: "Pantheon",
  },
  {
    image: "assets/speaker4.png",
    name: "John Doe",
    bio: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    designation: "Cheif Marketing Officer",
    company: "Specbee",
  },
];

// selecting slider container
const sliderContainer = document.getElementById("slider");
const buttonRight = document.getElementById("slider-button-right");
const buttonLeft = document.getElementById("slider-button-left");

const programContainer = document.getElementById("program_section");

function scrollSliderRight() {
  sliderContainer.scrollBy({ left: 300, behavior: "smooth" });
}
function scrollSliderleft() {
  sliderContainer.scrollBy({ left: -300, behavior: "smooth" });
}

// function - rendering card dynamically

function renderSpeakers(speakers) {
  speakers.forEach((speaker) => {
    // create card elements
    const card = document.createElement("div");
    card.classList.add("slider_item");
    card.setAttribute("tabindex", "0");
    card.setAttribute("data-name", speaker.name);
    card.setAttribute("data-bio", speaker.bio);
    card.setAttribute("data-image", speaker.image);
    card.setAttribute("data-role", speaker.designation);

    const image = document.createElement("img");
    image.src = speaker.image;
    image.alt = `${speaker.name}`;
    image.classList.add("slider_image");

    const name = document.createElement("p");
    name.classList.add("slider_name");
    name.textContent = speaker.name;

    const role = document.createElement("p");
    role.classList.add("slider_role");
    role.textContent = speaker.designation;

    const company = document.createElement("p");
    company.classList.add("slider_company");
    company.textContent = speaker.company;

    // append;
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(role);
    card.appendChild(company);
    // event listener to show modal when card is clicked
    card.addEventListener("click", () => {
      console.log("modal clicked");
      showModal(speaker);
    });

    sliderContainer.appendChild(card);
  });
}
let modal,
  modalInfo,
  modalImage,
  modalName,
  modalBio,
  modalCompany,
  modalDesignation,
  modalCloseButton;

function createModal() {
  if (!modal) {
    // create modal and close btn
    modal = document.getElementById("modal");
    modal.style.display = "none"; //initially hidden

    // modal.classList.add("slider_item");

    modalCloseButton = document.createElement("button");
    modalCloseButton.classList.add("modal-close");
    modalCloseButton.textContent = "X";
    modalCloseButton.addEventListener("click", () => {
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
    });
    modal.appendChild(modalCloseButton);

    // profile section
    const profileSection = document.createElement("div");
    profileSection.classList.add("modal-profile");

    modalImage = document.createElement("img");
    modalImage.classList.add("modal-image");

    modalInfo = document.createElement("div");
    modalInfo.classList.add("modal-info");

    modalName = document.createElement("p");
    modalName.classList.add("modal-name");

    modalCompany = document.createElement("p");
    modalCompany.classList.add("modal-company");

    modalDesignation = document.createElement("p");
    modalDesignation.classList.add("modal-designation");

    // append

    modalInfo.appendChild(modalName);
    modalInfo.appendChild(modalCompany);
    modalInfo.appendChild(modalDesignation);

    profileSection.appendChild(modalImage);
    profileSection.appendChild(modalInfo);

    // bio section
    const bioSection = document.createElement("div");
    bioSection.classList.add("modal-bio");

    modalBio = document.createElement("p");
    modalBio.classList.add("bio-text");

    bioSection.appendChild(modalBio);

    // append all sections
    modal.appendChild(modalCloseButton);
    modal.appendChild(profileSection);
    modal.appendChild(bioSection);

    document.body.appendChild(modal);
  }
}
function showModal(speaker) {
  createModal();
  //   modalImage.src = speaker.image;
  //   modalName.textContent = speaker.name;
  //   modalBio.textContent = speaker.bio;
  //   modalCompany.textContent = speaker.company;
  //   modalDesignation.textContent = speaker.designation;
  modal.querySelector(".modal-image").src = speaker.image;
  modal.querySelector(".modal-name").textContent = speaker.name;
  modal.querySelector(".modal-designation").textContent = speaker.designation;
  modal.querySelector(".modal-company").textContent = speaker.company;
  modal.querySelector(".bio-text").textContent = speaker.bio;

  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");

  modalCloseButton.focus();
}

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
  }
});

buttonRight.addEventListener("click", scrollSliderRight);
buttonLeft.addEventListener("click", scrollSliderleft);

renderSpeakers(speakers);
