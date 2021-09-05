const inItCategoryModal = () => {
  // get categoryModal element
  const categoryModal = document.getElementById('categoryModal');

  // get open category modal button
  const modalBtn = document.getElementById('modalBtn');

  // listen for the click on + category and open the modal
  if (modalBtn != null){
    modalBtn.addEventListener('click', (e) => {
      categoryModal.style.display = 'block';
    });
  }

  // if the click is equal to the area outside of the
  // content the modal will close
  window.addEventListener('click', (e) => {
    if (e.target == categoryModal){
      categoryModal.style.display = 'none';
    }
  })
}

export default inItCategoryModal;