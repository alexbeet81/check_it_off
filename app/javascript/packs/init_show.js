const inItShow = () => {

  const toggleHidden = (data) => {
    return data.classList.toggle("hidden")
  }

  const iconGroupItemSelector = document.querySelectorAll('.icon-group-item')
  iconGroupItemSelector.forEach(e => {
    const id = e.dataset.id

    const editItemSelector = document.querySelector(`#edit-item-${id}`)
    const editFormSelector = document.querySelector(`#edit-form-${id}`)
    const itemWrapperSelector = document.querySelector(`#item-wrapper-${id}`)
    const itemWrapperClassSelector = document.querySelectorAll(".item-wrapper")
    
    itemWrapperClassSelector.forEach((e) => {
      console.log(e.classList)
    })
    
    editItemSelector.addEventListener('click', (e) => {
      // resets everything
      iconGroupItemSelector.forEach(e => {
        // console.log(e)
        // console.log(itemWrapperSelector)
      })

      toggleHidden(editItemSelector)
      toggleHidden(editFormSelector)
      toggleHidden(itemWrapperSelector)
    })
  })

  // select the add item class divs
  const itemAddClassElementSelector = document.querySelectorAll('.item-add');

  // iterate over each dive
  itemAddClassElementSelector.forEach( (e) => {
    // find the id assosiated with category.id
    const id = e.dataset.id

    // find the add item and input box with the unique id
    const addItemIdElementSelector = document.querySelector(`#addItem-${id}`);
    const inputBoxIdElementSelector = document.getElementById(`input-box-${id}`);

    // toggle hidden on each with event listener
    addItemIdElementSelector.addEventListener('click', e => {
      toggleHidden(addItemIdElementSelector);
      toggleHidden(inputBoxIdElementSelector);
    })
  })
};

export default inItShow;