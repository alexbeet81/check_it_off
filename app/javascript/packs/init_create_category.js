import axios from 'axios';

const inItCreateCategory = () => {
  // find the id of the current list.
  const getListId = document.getElementById('data-id');
  const id = getListId.dataset.id;

  const meatFish = document.getElementById('meat_fish');
  const fruitVeg = document.getElementById('fruit_veg');

  console.log(fruitVeg)

  const snacks = document.getElementById('snacks');
  const softDrinks = document.getElementById('soft_drinks');
  const beerWine = document.getElementById('beer_wine');
  const household = document.getElementById('household');
  const health = document.getElementById('health');
  const beauty = document.getElementById('beauty');
  const bakery = document.getElementById('bakery');
  const deli = document.getElementById('deli');
  const frozen = document.getElementById('frozen');
  const petfood = document.getElementById('petfood');
  const toys = document.getElementById('toys');
  const clothes = document.getElementById('clothes');
  const stationary = document.getElementById('stationary');

  const categoryModal = document.getElementById('categoryModal');

  if (meatFish != null) {
    meatFish.addEventListener('click', (e) => {
      apiCall('Meat & Fish!', id)
      categoryModal.style.display = 'none';
    })

    fruitVeg.addEventListener('click', (e) => {
      console.log(e)
    })

    snacks.addEventListener('click', (e) => {
      console.log(e)
    })

    softDrinks.addEventListener('click', (e) => {
      console.log(e)
    })

    beerWine.addEventListener('click', (e) => {
      console.log(e)
    })

    household.addEventListener('click', (e) => {
      console.log(e)
    })

    health.addEventListener('click', (e) => {
      console.log(e)
    })

    beauty.addEventListener('click', (e) => {
      console.log(e)
    })

    bakery.addEventListener('click', (e) => {
      console.log(e)
    })

    deli.addEventListener('click', (e) => {
      console.log(e)
    })

    frozen.addEventListener('click', (e) => {
      console.log(e)
    })

    petfood.addEventListener('click', (e) => {
      console.log(e)
    })

    toys.addEventListener('click', (e) => {
      console.log(e)
    })

    clothes.addEventListener('click', (e) => {
      console.log(e)
    })

    stationary.addEventListener('click', (e) => {
      console.log(e)
    })
  }

  const apiCall = (name, id) => {
    axios.post(`http://localhost:3000/api/v1/lists/${id}/categories`, {
      category_name: name,
      list_id: id
    })
  };
};

export default inItCreateCategory;