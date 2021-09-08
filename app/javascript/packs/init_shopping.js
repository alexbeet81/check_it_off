import axios from 'axios';

const inItShopping = () => {
  // select category item container
  const categoryItemContainerSelector = document.querySelectorAll('.category-item-container');

  categoryItemContainerSelector.forEach((e) => {
    const id = e.dataset.id;
    const color = e.dataset.color;
    const selected = e.dataset.selected;

    const itemIdSelector = document.getElementById(`item-id-${id}`)
    const fontAwesomeCircleSelector = document.getElementById(`circle-${id}`)
    // set the initial state of the divs
    if (selected === "false") {
      itemIdSelector.style.backgroundColor = color
    } else {
      itemIdSelector.style.backgroundColor = "#e0e0e0"
      itemIdSelector.style.color="#bfbfbf"
    }

    itemIdSelector.addEventListener('click', e => {
      // itemIdSelector.style.color = "#bfbfbf"
      // itemIdSelector.style.backgroundColor = "#e0e0e0"
      itemIdSelector.classList.toggle('selected');
      fontAwesomeCircleSelector.classList.toggle('fa-circle')
      fontAwesomeCircleSelector.classList.toggle('fa-check-circle')
    });

    // if (itemIdSelectedSelector === null) {
    //   itemIdSelector.addEventListener('click', e => {
        
        
    //     // api call to change the value of item_seleceted
    //     // axios.patch(`http://localhost:3000/api/v1/items/${id}`, {
    //     //   // item_selected: false
    //     // })
    //     itemIdSelector.removeAttribute("style")
    //     itemIdSelector.style.backgroundColor = "grey";
    //     itemIdSelector.classList.toggle("selected");

    //     // update the dom
    //   })
    // }


    // if (itemIdSelector === null) {
    //   itemIdSelectedSelector.addEventListener('click', e => {

    //     // api call to change the value of item_seleceted
    //     // axios.patch(`http://localhost:3000/api/v1/items/${id}`, {
    //     //   // item_selected: false
    //     // })
    //     itemIdSelectedSelector.style.backgroundColor = "blue";
    //     itemIdSelectedSelector.removeAttribute("style")
    //     itemIdSelectedSelector.classList.toggle("selected")
    //     // update the dom
    //   })
    // }
  })
}

export default inItShopping;

