import { ContextExclusionPlugin } from "webpack"

const initShow = () => {
    const addItemBtn = document.querySelectorAll(".item-add")
  addItemBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
    add()
    })
  })

  const editItemBtn = document.querySelectorAll("#edit-item")
  editItemBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
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
      add()
    })
  })

  const editFormBtn = document.querySelectorAll(".hide-edit")
  editFormBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      editAdd()
      hideShowAddItem()
    })
  })

  const hideShowAddItem = (e) => {
    console.log(e)
    const hideAdd = document.querySelectorAll(`#addItem-${id}`)
    hideAdd.forEach(e => e.classList.toggle("hidden"))
    console.log('hidden class added')
  }

  const itemAddEl = document.querySelectorAll('.item-add')
  itemAddEl.forEach(e => {
    console.log(e.dataset.id)
    const id = e.dataset.id
    
    const hideEventBtn = document.querySelector(`#addItem-${id}`)
    
    hideEventBtn.addEventListener('click', (e) => {
      console.log(e)
      // hideShowAddItem(e)
      // console.log(hideEventBtn)
      // console.log('hidden add item')
    })
  })
}

export { initShow };
