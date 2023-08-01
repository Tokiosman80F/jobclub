const addToDB = (id) => {
  // 1- Create an empty object (jobCart) to stored the data
  /* 
    2- Check weather the job-cart is empty or not
    3- If not empty
    3.1-Check quantity
    3.2-If new product is added quantity will be 1
    3.3- If same product is added multiple time quantity will increase by 1   
    */
  let jobCart = {};
  const storedCart = localStorage.getItem("job-cart");
  if (storedCart) {
    jobCart = JSON.parse(storedCart);
  }
  const quantity = jobCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    jobCart[id] = newQuantity;
  } else {
    jobCart[id] = 1;
  }
  localStorage.setItem("job-cart", JSON.stringify(jobCart));
};

//a function to get the data from local storage
const getStoredCart = () => {
  let jobCart = {};
  const storedCart = localStorage.getItem("job-cart");
  if (storedCart) {
    jobCart = JSON.parse(storedCart);
  }
  return jobCart;
};
const removeFromDB = (id) => {
  const storedCart = localStorage.getItem("job-cart");
  if (storedCart) {
    let jobCart = JSON.parse(storedCart);
    if (id in jobCart) {
      delete jobCart[id];
      localStorage.setItem("job-cart", JSON.stringify(jobCart));
    }
  }
};
const deletejobCart = () => localStorage.removeItem("job-cart");
export { addToDB, getStoredCart, removeFromDB, deletejobCart };
