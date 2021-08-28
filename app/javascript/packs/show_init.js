const initShow = () => {
    const addItemBtn = document.querySelectorAll(".item-add")
  addItemBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
    console.log(e)
    add()
    })
  })

  const editItemBtn = document.querySelectorAll("#edit-item")
  editItemBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      console.log(e)
      editAdd()
    })
  })

  const add = () => {
   const userAnswers = document.querySelectorAll(".input-box")
   userAnswers.forEach(e => e.classList.toggle("hidden"))
  }

  const editAdd = () => {
    const showEditForm = document.querySelectorAll(".edit-form")
    showEditForm.forEach(e => e.classList.toggle("hidden"))
  }

  const hideItemBtn = document.querySelectorAll(".hide-stuff")
  hideItemBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      console.log(e)
      add()
    })
  })

  const editFormBtn = document.querySelectorAll(".hide-edit")
  editFormBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      console.log(e)
      editAdd()
      hideShowAddItem()
    })
  })

  // const hideShowAddItem = () => {
  //   const hideAdd = document.querySelectorAll("#addItem")
  //   hideAdd.forEach(e => e.classList.toggle("hidden"))
  //   console.log('hidden class added')
  // }

  // const hideEventBtn = document.querySelectorAll("#addItem")
  // hideEventBtn.forEach((btn) => {
  //   btn.addEventListener('click', (e) => {
  //     hideShowAddItem()
  //     console.log('hidden add item')
  //   })
  // })

  const itemAddEl = document.querySelectorAll('.item-add')
  itemAddEl.forEach(e => {
    console.log(e.dataset.id)
  })
}

export { initShow };
