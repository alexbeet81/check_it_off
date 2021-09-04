const inItCreateCategory = () => {
  const meatFish = document.getElementById('meat_fish');

  console.log(meatFish);

  meatFish.addEventListener('click', (e) => {
    console.log(e)
  })
};

export default inItCreateCategory;