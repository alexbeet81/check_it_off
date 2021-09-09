import axios from 'axios';

const inItCreateCategory = () => {

  const categoryCards = document.querySelectorAll('.category_card');

  const categoryContainer = document.querySelector('.category-container');
  // find the id of the current list.
  const getListId = document.getElementById('data-id');

  // get the category modal and set display to none after api call
  const categoryModal = document.getElementById('categoryModal');
  
  //get the id of each category - find the last id
  const getItemAdd = document.querySelectorAll('.item-add');

  getItemAdd.forEach(e => {
    const id = e.dataset.id;
  })

  // categoryCards.forEach( categoryCard => {
  //   categoryCard.addEventListener('click', e => {
  //     console.log(e.srcElement)
  //   })
  // })

  // conditional to stop error when not on list#show page
  if (categoryCards.length > 1) {
    const id = getListId.dataset.id;
    // find the last category id
    const lastId = getListId.dataset.lastid;
    console.log(lastId);

    categoryCards[0].addEventListener('click', (e) => {
      apiCall('Meat & Fish', '#d8315b', '#ffecf0', id)
      categoryModal.style.display = 'none';
      
      // call the newCategoryDiv funcation and save it to div.
      const div = newCategoryDiv('Meat & Fish', '#d8315b', lastId);
      console.log(div);
      console.log(id);
      categoryContainer.insertAdjacentHTML("beforeend", div);
    })

    categoryCards[1].addEventListener('click', (e) => {
      apiCall('Fruit & Veg', '#50723c', '#e1ffd0', id)
      console.log(id)
      categoryModal.style.display = 'none';
    })

    categoryCards[2].addEventListener('click', (e) => {
      apiCall('Snacks', '#f2a540', '#fff0dc', id)
      console.log(id)
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

  // function that creates a new div that is called and then added
  // to the category-container
  const newCategoryDiv = (categoryName, color, lastId) => {
    // api call to find the last id
    const categoryId = parseInt(lastId) + 1;
    const div = `
      <div class="category-item" style="background-color: ${color};">
        <div class="category-title">
          <h3>${categoryName}</h3>
        </div>
        <div class="icon-group-cat">
          
          <a data-confirm="Are you quite sure?" class="fas fa-trash" rel="nofollow" data-method="delete" href="/categories/${categoryId}"></a>
        </div>
      </div>
    `
    return div;
  };


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