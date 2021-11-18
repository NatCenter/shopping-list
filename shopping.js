let GrocieyList = [
  {
    item: " Milk ",
    price: 1.99,
    dateGood: "012/22/2022",
  },
  {
    item: " eggs",
    price: 2.99,
    dateGood: "12/14/2021",
  },
  {
    item: " pizza rolls ",
    price: 5.99,
    dateGood: "12/14/2023",
  },
  {
    item: " apples ",
    price: 1.99,
    dateGood: "12/11/2021",
  },
  {
    item: " Sandwich buns ",
    price: 2.99,
    dateGood: "12/13/2021",
  },
  {
    item: " Mustered ",
    price: 3.99,
    dateGood: "12/15/2022",
  },
];

const greens = {
  item: " Greens ",
  price: 3.99,
  dateGood: "12/15/2022",
};
const duckRoast = {
  item: " Duck Roast ",
  price: 15.99,
  dateGood: "1/1/2022",
};
const hotDogs = {
  item: " Hot dogs ",
  price: 20.99,
  dateGood: "2/1/2022",
};
const icCream = {
  item: " Ice Cream  ",
  price: 7.99,
  dateGood: "2/1/2022",
};
const stake = {
  item: " Stake  ",
  price: 100.99,
  dateGood: "1/1/2022",
};

//declares a new item in an array
const addToShoppingList = (newItem) => {
  //pushes that new item to the array
  GrocieyList.push(newItem);
  // goes through the array and adds an id to each object of the array
  GrocieyList = GrocieyList.map((item, i) => {
    item.id = i + 1;
    return item;
  });
  // same as above but uses date
  GrocieyList = GrocieyList.map((items) => {
    items.date = " " + new Date();
    return items;
  });
};

const maxPrice = 8;

//calls the function
addToShoppingList(greens);
addToShoppingList(duckRoast);
addToShoppingList(hotDogs);
addToShoppingList(icCream);
addToShoppingList(stake);

for (const food of GrocieyList) {
  //give you a list of all the most expensive items in the array
  if (food.price >= maxPrice) {
    console.log(
      ` Id: ${food.id}  Date: ${food.date}  ${food.item}  Price: ${food.price}`
    );
  }
}
