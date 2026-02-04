const params = new URLSearchParams(window.location.search);
const type = params.get("type");

const title = document.getElementById("portfolio-title");
const content = document.getElementById("portfolio-content");
portfolio[type].items.forEach(file => {
  const card = document.createElement("div");
  card.className = "service-card";

  if (type === "video") {
    card.innerHTML = `
      <video controls style="width:100%">
        <source src="${portfolio[type].folder}/${file}">
      </video>
    `;
    
  } else {
    card.innerHTML = `
      <img src="${portfolio[type].folder}/${file}" style="width:100%">
    `;
  }

  content.appendChild(card);
});
