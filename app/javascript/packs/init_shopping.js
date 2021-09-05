import axios from 'axios';

const inItShopping = () => {
  

  // select category item container
  const categoryItemContainerSelector = document.querySelectorAll('.category-item-container');

  categoryItemContainerSelector.forEach((e) => {
    const id = e.dataset.id;
    
    const itemIdSelector = document.getElementById(`item-id-${id}`)

    itemIdSelector.addEventListener('click', e => {
      console.log(e);
      // api call to change the value of item_seleceted
      axios.patch(`http://localhost:3000/api/v1/items/${id}`, {
        item_selected: false
      })
    })
  })
  // itterate over the div
}

export default inItShopping;

