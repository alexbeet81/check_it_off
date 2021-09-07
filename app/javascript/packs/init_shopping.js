import axios from 'axios';

const inItShopping = () => {
  // select category item container
  const categoryItemContainerSelector = document.querySelectorAll('.category-item-container');

  categoryItemContainerSelector.forEach((e) => {
    const id = e.dataset.id;
    
    const itemIdSelector = document.getElementById(`item-id-${id}`)
    const itemIdSelectedSelector = document.getElementById(`item-id-selected-${id}`)

    // console.log("hey", itemIdSelector)

    // console.log('hello')

    if (itemIdSelectedSelector === null) {
      itemIdSelector.addEventListener('click', e => {
        
        
        // api call to change the value of item_seleceted
        // axios.patch(`http://localhost:3000/api/v1/items/${id}`, {
        //   // item_selected: false
        // })
        itemIdSelector.removeAttribute("style")
        itemIdSelector.style.backgroundColor = "grey";
        itemIdSelector.classList.toggle("selected");

        // update the dom
      })
    }


    if (itemIdSelector === null) {
      itemIdSelectedSelector.addEventListener('click', e => {

        // api call to change the value of item_seleceted
        // axios.patch(`http://localhost:3000/api/v1/items/${id}`, {
        //   // item_selected: false
        // })
        itemIdSelectedSelector.style.backgroundColor = "blue";
        itemIdSelectedSelector.removeAttribute("style")
        itemIdSelectedSelector.classList.toggle("selected")
        // update the dom
      })
    }
  })
}

export default inItShopping;

