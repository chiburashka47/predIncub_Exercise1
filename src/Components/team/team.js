let container = document.getElementsByClassName("team__content"),
  elem = document.getElementsByClassName("team__content__elem"),
  img = document.querySelectorAll(".team__content__elem-img"),
  name = document.querySelectorAll(
    ".team__content__elem-desc__container__top__name"
  ),
  position = document.querySelectorAll(
    ".team__content__elem-desc__container__top__position"
  ),
  desc = document.querySelectorAll(
    ".team__content__elem-desc__container__middle"
  );

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

img.forEach((element, index) => {
  name[index].textContent = team[index].name;
  position[index].textContent = team[index].position;
  desc[index].textContent = team[index].desc;
});
