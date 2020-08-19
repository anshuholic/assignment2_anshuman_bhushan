var parent = document.getElementById("display");
const data = [
  {
    key: 1,
    type: "mobile",
    name: "oppo",
    price: "₹ 20,000",
    image: "./mobile1.png",
  },
  {
    key: 2,
    type: "mobile",
    name: "one plus",
    price: "₹ 50,000",
    image: "./mobile2.jpeg",
  },
  {
    key: 3,
    type: "mobile",
    name: "redmi",
    price: "₹ 18,000",
    image: "./mobile3.jpg",
  },
  {
    key: 4,
    type: "laptop",
    name: "vivo",
    price: "₹ 59,999",
    image: "./laptop1.jpg",
  },
  {
    key: 5,
    type: "laptop",
    name: "lenovo",
    price: "₹ 49,999",
    image: "./laptop2.jpg",
  },
  {
    key: 6,
    type: "laptop",
    name: "acer",
    price: "₹ 79,999",
    image: "./laptop3.jpg",
  },
  {  
  key: 7,
    type: "smartwatch",
    name: "lenovo",
    price: "₹ 5000",
    image: "./smartwatch1.jpg",
  },
  {
    key: 8,
    type: "smartwatch",
    name: "redmi",
    price: "₹ 4,999",
    image: "./smartwatch2.jpg",
  },
  {
    key: 9,
    type: "smartwatch",
    name: "realme",
    price: "₹ 7,555",
    image: "./smartwatch3.jpg",
  },
  {
    key: 10,
    type: "earphone",
    name: "boat",
    price: "₹ 699",
    image: "./earphone1.jpeg",
  },
  {
    key: 11,
    type: "earphone",
    name: "akg",
    price: "₹ 899",
    image: "./earphone2.jpg",
  },
  {
    key: 12,
    type: "earphone",
    name: "acer",
    price: "₹ 999",
    image: "./earphone3.jpg",
  },
];
$(document).ready(function () {
  console.log("hello");
  display();
});
function display() {
  parent.innerHTML = " ";
  let content = " ";
  data.map((item) => {
    content =
      content +
      `
        <div class="col-xs-4">
        <div class="thumbnail">
        <img src=${item.image} />
        <div class="caption">
        <h1>${item.name}</h1>
        <p>Price is Rs.${item.price}</p>

        </div>
        </div>

        </div>
        `;
  });
  parent.innerHTML = content;
}
function displayContent(id) {
  parent.innerHTML = " ";
  let content = " ";
  let data1 = data.filter((a) => a.type === id);
  data1.map((item) => {
    content =
      content +
      `
        <div class="col-xs-4">
        <div class="thumbnail">
        <img src=${item.image} />
        <div class="caption">
        <h1>${item.name}</h1>
        <p>Price is.${item.price}</p>

        </div>
        </div>

        </div>
        `;
  });
  parent.innerHTML = content;
}
function search() {
  let s = document.getElementById("search").value;
  parent.innerHTML = " ";
  let content = " ";
  console.log(s.length);
  let len = s.length;
  let data1 = data.filter((a) => a.name.substr(0, len) === s);
  data1.map((item) => {
    content =
      content +
      `
        <div class="col-xs-4">
        <div class="thumbnail">
        <img src=${item.image} />
        <div class="caption">
        <h1>${item.name}</h1>
        <p>Price is.${item.price}</p>
        </div>
        </div>
        </div>
        `;
  });
  parent.innerHTML = content;
}
