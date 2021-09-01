const initShow = () => {
  //   const addItemBtn = document.querySelectorAll(".item-add")
  // addItemBtn.forEach((btn) => {
  //   btn.addEventListener('click', (e) => {
  //   add()
  //   })
  // })

  // const editItemBtn = document.querySelectorAll("#edit-item")
  // editItemBtn.forEach((btn) => {
  //   btn.addEventListener('click', (e) => {
  //     editAdd()
  //   })
  // })

  // const add = () => {
  //  const userAnswers = document.querySelectorAll(".input-box")
  //  userAnswers.forEach(e => e.classList.toggle("hidden"))
  // }

  // const hideItemBtn = document.querySelectorAll(".hide-stuff")
  // hideItemBtn.forEach((btn) => {
  //   btn.addEventListener('click', (e) => {
  //     add()
  //   })
  // })

  // const editFormBtn = document.querySelectorAll(".hide-edit")
  // editFormBtn.forEach((btn) => {
  //   btn.addEventListener('click', (e) => {
  //     onEditItemSelect()
  //     hideShowAddItem()
  //   })
  // })

  const toggleClass = (data) => {
    return data.classList.toggle("hidden")
  }

  const iconGroupItemSelector = document.querySelectorAll('.icon-group-item')
  iconGroupItemSelector.forEach(e => {
    const id = e.dataset.id

    const editItemSelector = document.querySelector(`#edit-item-${id}`)
    const editFormSelector = document.querySelector(`#edit-form-${id}`)
    const itemWrapperSelector = document.querySelector(`#item-wrapper-${id}`)
    
    editItemSelector.addEventListener('click', (e) => {
      // resets everything

      toggleClass(editItemSelector)
      toggleClass(editFormSelector)
      toggleClass(itemWrapperSelector)
    })
  })

  const itemAddEl = document.querySelectorAll('.item-add')
  itemAddEl.forEach(e => {
    // console.log(e.dataset.id)
    const id = e.dataset.id
    
    const addAnotherItemSelector = document.querySelector(`#addItem-${id}`)
    const addItemSelector = document.querySelector(`#submit-item-${id}`)
    const inputBoxSelector = document.querySelector('.input-box')

    console.log(addItemSelector)

    addAnotherItemSelector.addEventListener('click', (e) => {
      // addAnotherItemSelector.classList.toggle("hidden")
      // anything in here will be attached to a single id

      // console.log('click on add item',e)
      toggleClass(addAnotherItemSelector)
      toggleClass(inputBoxSelector)

      // editAdd(addAnotherItemSelector)
      // console.log('hidden add item')
    })

    addItemSelector.addEventListener('click', (e) => {
      toggleClass(addItemSelector)
      toggleClass(addAnotherItemSelector)
    })
  })
}

export { initShow };
