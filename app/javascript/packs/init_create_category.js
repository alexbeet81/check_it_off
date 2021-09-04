import axios from 'axios';

const inItCreateCategory = () => {
  const categoryCards = document.querySelectorAll('.category_card');

  console.log(categoryCards[1])

  // find the id of the current list.
  const getListId = document.getElementById('data-id');
  
  // get each element and save into variable
  // const meatFish = document.getElementById('meat_fish');
  // const fruitVeg = document.getElementById('fruit_veg');
  // const snacks = document.getElementById('snacks');
  // const softDrinks = document.getElementById('soft_drinks');
  // const beerWine = document.getElementById('beer_wine');
  // const household = document.getElementById('household');
  // const health = document.getElementById('health');
  // const beauty = document.getElementById('beauty');
  // const bakery = document.getElementById('bakery');
  // const deli = document.getElementById('deli');
  // const frozen = document.getElementById('frozen');
  // const petfood = document.getElementById('petfood');
  // const toys = document.getElementById('toys');
  // const clothes = document.getElementById('clothes');
  // const stationary = document.getElementById('stationary');

  // get the category modal and set display to none after api call
  const categoryModal = document.getElementById('categoryModal');

  // conditional to stop error when not on list#show page
  if (categoryCards != null) {
    const id = getListId.dataset.id;

    categoryCards[0].addEventListener('click', (e) => {
      apiCall('Meat & Fish', '#d8315b', '#ffecf0', id)
      categoryModal.style.display = 'none';
      // location.reload();
    })

    categoryCards[1].addEventListener('click', (e) => {
      apiCall('Fruit & Veg', '#50723c', '#e1ffd0', id)
      categoryModal.style.display = 'none';
      // apiCall('Fruit & Veg', id)
      // categoryModal.style.display = 'none';
    })

    categoryCards[2].addEventListener('click', (e) => {
      apiCall('Snacks', '#f2a540', '#fff0dc', id)
      categoryModal.style.display = 'none';
    })

    categoryCards[3].addEventListener('click', (e) => {
      apiCall('Soft Drinks', '#8c271e', '#ffe1de', id)
      categoryModal.style.display = 'none';
    })

    categoryCards[4].addEventListener('click', (e) => {
      apiCall('Beer & Wine', '#eb6c6c', '#ffe0e0', id)
      categoryModal.style.display = 'none';
    })

    categoryCards[5].addEventListener('click', (e) => {
      apiCall('Household', '#07908f', '#daffff', id)
      categoryModal.style.display = 'none';
    })

    categoryCards[6].addEventListener('click', (e) => {
      apiCall('Health', '#485696', '#dde3ff', id)
      categoryModal.style.display = 'none';
    })

    categoryCards[7].addEventListener('click', (e) => {
      apiCall('Beauty', '#c08497', '#ffe9f0', id)
      categoryModal.style.display = 'none';
    })

    categoryCards[8].addEventListener('click', (e) => {
      apiCall('Bakery', '#f78e69', '#ffe5dc', id)
      categoryModal.style.display = 'none';
    })

    categoryCards[9].addEventListener('click', (e) => {
      apiCall('Deli', '#ffa69e', '#ffedeb', id)
      categoryModal.style.display = 'none';
    })

    categoryCards[10].addEventListener('click', (e) => {
      apiCall('Frozen', '#9bbdf9', '#e7f0ff', id)
      categoryModal.style.display = 'none';
    })

    categoryCards[11].addEventListener('click', (e) => {
      apiCall('Pet Food', '#7b2d26', '#ffd8d5', id)
      categoryModal.style.display = 'none';
    })

    categoryCards[12].addEventListener('click', (e) => {
      apiCall('Toys', '#e8aa15', '#fff5dd', id)
      categoryModal.style.display = 'none';
    })

    categoryCards[13].addEventListener('click', (e) => {
      apiCall('Clothes', '#e26d5a', '#ffe2de', id)
      categoryModal.style.display = 'none';
    })

    categoryCards[14].addEventListener('click', (e) => {
      apiCall('Stationary', '#f29559', '#ffebde', id)
      categoryModal.style.display = 'none';
    })
  }

  const apiCall = (name, colorOne, colorTwo, id) => {
    axios.post(`http://localhost:3000/api/v1/lists/${id}/categories`, {
      category_name: name,
      category_color: colorOne,
      category_icon: colorTwo,
      list_id: id
    })
  };
};

export default inItCreateCategory;