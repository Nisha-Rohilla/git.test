const socials = [
    {
      media: "facebook",
      handle: "Nisha",
      people: "followers",
      followers: 0,
      growth: 0,
      rise: "up",
      color: "hsl(208, 92%, 53%)",
    },
    {
      media: "twitter",
      handle: "Nisha",
      people: "followers",
      followers: 0,
      growth: 0,
      rise: "up",
      color: "hsl(203, 89%, 53%)",
    },
    {
      media: "instagram",
      handle: "Nisha",
      people: "followers",
      followers: 0,
      growth: 0,
      rise: "up",
      color: "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
    },
    {
      media: "youtube",
      handle: "Nisha",
      people: "subscribers",
      followers: 0,
      growth: 0,
      rise: "down",
      color: "hsl(348, 97%, 39%)",
    },
  ];
  
  const followers = document.querySelector("main .top");
  socials.forEach((e) => {
    card = document.createElement("div");
    card.classList = "card";
    card.innerHTML = `
            <div class="handle">
              <img src="./images/icon-${e.media}.svg" alt="" />
              <span>${e.handle}</span>
            </div>
            <h1>${e.followers}</h1>
            <p>${e.people}</p>
            <div class="growth ${e.rise}">
              <img src="./images/icon-${e.rise}.svg" alt="" />
              <span class="">${e.growth}</span> Today
            </div>
   `;
  
    border = document.createElement("div");
    border.classList = "border";
    border.style.background = e.color;
    card.prepend(border);
  
    followers.appendChild(card);
  });
  
  const overview = [
    {
      engagement: "Page Views",
      media: "facebook",
      figure: 0,
      growth: 0,
      rise: "up",
    },
    {
      engagement: "Likes",
      media: "facebook",
      figure: 0,
      growth: 0,
      rise: "down",
    },
    {
      engagement: "Likes",
      media: "instagram",
      figure: 0,
      growth: 0,
      rise: "up",
    },
    {
      engagement: "Profile Views",
      media: "instagram",
      figure: 0,
      growth: 0,
      rise: "up",
    },
    {
      engagement: "Retweets",
      media: "twitter",
      figure: 0,
      growth: 0,
      rise: "up",
    },
    {
      engagement: "Likes",
      media: "twitter",
      figure:0,
      growth: 0,
      rise: "up",
    },
    {
      engagement: "Likes",
      media: "youtube",
      figure:0,
      growth: 0,
      rise: "down",
    },
    {
      engagement: "Total Views",
      media: "youtube",
      figure: 0,
      growth: 0,
      rise: "down",
    },
  ];
  
  const bottom = document.querySelector(".overview");
  overview.forEach((e) => {
    card = document.createElement("div");
    card.classList = "card";
    card.innerHTML = `
               <div class="engagement">
                <h5>${e.engagement}</h5>
                <img src="./images/icon-${e.media}.svg" alt="" />
              </div>
              <div class="figures">
                <h1>${e.figure}</h1>
                <span class="${e.rise}"> <img src="./images/icon-${e.rise}.svg" alt="" />${e.growth}%</span>
              </div>
   `;
  
    bottom.appendChild(card);
  });
  
  const toggle = document.querySelector("input[type='checkbox']");
  if (toggle.checked) {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }
  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
    localStorage.setItem("theme", document.body.classList.value);
  });
  
  if (document.body.classList == "light") {
    toggle.setAttribute("checked");
  }
  window.addEventListener("load", () => {
    document.body.classList = localStorage.getItem("theme");
  });