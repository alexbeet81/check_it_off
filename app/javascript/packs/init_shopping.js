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
    
    // set the initial state of the category-item-container
    if (selected === "false") {
      itemIdSelector.style.backgroundColor = color
    } else {
      itemIdSelector.style.backgroundColor = "#e0e0e0"
      itemIdSelector.classList.add('selected');
      fontAwesomeCircleSelector.classList.remove('fa-circle')
      fontAwesomeCircleSelector.classList.add('fa-check-circle')
    }

    itemIdSelector.addEventListener('click', e => {
      
      // api call to toggle self.item_selected to true or false
      axios.patch(`http://localhost:3000/api/v1/items/${id}`, {
        // item_selected: false
      })

      // toggles selected class on the div
      itemIdSelector.classList.toggle('selected');
      fontAwesomeCircleSelector.classList.toggle('fa-circle')
      fontAwesomeCircleSelector.classList.toggle('fa-check-circle')
      
      // calls a function that checks if item is selected and then
      // sets the background and other styles.
      toggleBackground(itemIdSelector);
    });

    const toggleBackground = (element) => {
      if (element.classList.length === 1) {
        itemIdSelector.style.backgroundColor = color
      } else {
        itemIdSelector.style.backgroundColor = "#e0e0e0"
      }
    };
  })
}

export default inItShopping;

