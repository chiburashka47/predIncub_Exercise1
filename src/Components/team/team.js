let container = document.querySelector(".team__content");
let icons = [
  { iconClass: "fab fa-facebook-f" },
  { iconClass: "fab fa-twitter" },
  { iconClass: "fas fa-basketball-ball" },
  { iconClass: "far fa-envelope" },
];
let team = [
  {
    img: 0,
    name: "Anna Molik",
    position: "FrontEnd",
    desc: "Hello gello",
  },
  {
    img: 1,
    name: "Al Rayhan",
    position: " UI Designer",
    desc:
      "Lorem ipsum is not simply is an action designer random text it has roots in a piece.",
  },
  {
    img: 2,
    name: "Martin",
    position: "BackEnd",
    desc:
      "Lorem ipsum is not simply is an action designer random text it has roots in a piece.",
  },
  {
    img: 3,
    name: "Al Rayhan",
    position: " UI Designer",
    desc:
      "Lorem ipsum is not simply is an action designer random text it has roots in a piece.",
  },
  {
    img: 4,
    name: "Al Rayhan",
    position: " UI Designer",
    desc:
      "Lorem ipsum is not simply is an action designer random text it has roots in a piece.",
  },
  {
    img: 5,
    name: "Al Rayhan",
    position: " UI Designer",
    desc:
      "Lorem ipsum is not simply is an action designer random text it has roots in a piece.",
  },
];

team.map((item) => {
  let element = document.createElement("div"),
    bigImg = document.createElement("img"),
    desc = document.createElement("div"),
    descContainer = document.createElement("div"),
    topElem = document.createElement("div"),
    name = document.createElement("span"),
    slash = document.createElement("span"),
    position = document.createElement("span"),
    middleElem = document.createElement("div"),
    bottomElem = document.createElement("div");

  element.classList.add("team__content__elem");

  bigImg.classList.add("team__content__elem-img");
  bigImg.src = `./src/Components/team/style/${item.img}.png`;

  desc.classList.add("team__content__elem-desc");

  descContainer.classList.add("team__content__elem-desc__container", "column");

  topElem.classList.add("team__content__elem-desc__container__top", "row");

  name.classList.add("team__content__elem-desc__container__top__name");
  name.textContent = item.name;

  slash.classList.add("team__content__elem-desc__container__top__slash");
  slash.textContent = "/";

  position.classList.add("team__content__elem-desc__container__top__position");
  position.textContent = item.position;

  middleElem.classList.add("team__content__elem-desc__container__middle");
  middleElem.textContent = item.desc;

  bottomElem.classList.add("team__content__elem-desc__container__bottom");

  container.append(element);
  element.append(bigImg, desc);
  desc.append(descContainer);
  descContainer.append(topElem, middleElem, bottomElem);
  topElem.append(name, slash, position);
  icons.map((item) => {
    let imgContainer = document.createElement("a"),
      icon = document.createElement("i");

    imgContainer.classList.add(
      "team__content__elem-desc__container__bottom__elem"
    );

    icon.className = item.iconClass;
    bottomElem.append(imgContainer);
    imgContainer.append(icon);
  });
});
