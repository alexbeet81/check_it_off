import axios from 'axios';

const inItCreateCategory = () => {
  const meatFish = document.getElementById('meat_fish');

  const categoryModal = document.getElementById('categoryModal');

  if (meatFish != null) {
    meatFish.addEventListener('click', (e) => {
      // AIP call to create a new category.
      // find the list id
      // create an object {catname: ,list_id: }that is then passed into a funtion
     
    // AIP call to create a new category.
     axios.post('http://localhost:3000/api/v1/lists/2/categories', {
        category_name: "Meat & Fish",
        list_id: 2
      })

      categoryModal.style.display = 'none';
    })
  }

  const apiCall = (data) => {
    //
  };
};

export default inItCreateCategory;