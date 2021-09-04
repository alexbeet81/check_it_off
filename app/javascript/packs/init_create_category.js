import axios from 'axios';

const inItCreateCategory = () => {
  // find the id of the current list.
  const getListId = document.getElementById('data-id');
  const id = getListId.dataset.id;

  const meatFish = document.getElementById('meat_fish');

  const categoryModal = document.getElementById('categoryModal');

  if (meatFish != null) {
    meatFish.addEventListener('click', (e) => {
      // AIP call to create a new category.

      // create an object {catname: ,list_id: }that is then passed into a funtion
     
    // AIP call to create a new category.
    //  axios.post(`http://localhost:3000/api/v1/lists/${id}/categories`, {
    //     category_name: "Meat & Fish",
    //     list_id: id
    //   })

      apiCall('Meat & Bla!', id)
      categoryModal.style.display = 'none';
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