let pets = [
  {
    puppyName: "Poppy",
    id: 1,
    image: "./puppy.jpg",
  },
];

const select = document.querySelector("#dropdown-menu");
const clone = document.querySelector("#clone");

function render() {
  clone.replaceChildren();
  select.replaceChildren();
  for (let pet of pets) {
    const div = document.createElement("div");
    div.setAttribute("class", "divclone");
    clone.appendChild(div);

    const heading = document.createElement("h2");
    heading.textContent = pet.puppyName;
    div.appendChild(heading);

    const pId = document.createElement("p");
    pId.textContent = `Id: ${pet.id}`;
    div.appendChild(pId);

    const image = document.createElement("img");
    image.setAttribute("src", pet.image);
    div.appendChild(image);

    const button = document.createElement("button");
    button.textContent = "clone";
    div.appendChild(button);

    const option = document.createElement("option");
    option.textContent = pet.id;
    option.value = pet.id;
    select.appendChild(option);

    button.addEventListener("click", function () {
      console.log("click");

      const clonePets = { ...pets[0] };
      pets.push(clonePets);
      // setting the value of cloned object id property to the length of the object array
      clonePets.id = pets.length;
      render();
    });
  }
}

select.addEventListener("change", function (e) {
  const petId = +e.target.value;

  // console.log(pets.filter((pet) => pet.id !== petId));
  // if pet id in obj doesn't match the user's selection(petId), then filter will return
  // a new list of pet.ids that met the condition in the drop down menu.
  // re-rendering occures which includes select replaceChildren()
  pets = pets.filter((pet) => pet.id !== petId);

  render();
});

render();
