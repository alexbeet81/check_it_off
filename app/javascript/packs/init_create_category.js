const inItCreateCategory = () => {
  const meatFish = document.getElementById('meat_fish');

  console.log(meatFish);

  if (meatFish != null) {
    meatFish.addEventListener('click', (e) => {
      // AIP call to create a new category.
      // find the list id
      // create an object {catname: ,list_id: }that is then passed into a funtion
      console.log(e)
  
      // http://localhost:3000/api/v1/lists/:list_id/categories
  
      fetch('http://localhost:3000/api/v1/lists/2/categories', {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: {
          "category_name": "Meat & Fish",
          // "list_id": 2
        }
      })
    })
  }

  const apiCall = (data) => {
    //
  };
};

export default inItCreateCategory;