// Close window function  
function closeWindowFunc(){
  try {
    if (typeof window === undefined) {
      console.log("WARNING : Window object is not defined, can not close undefined object.");
      return false;
    } else {
      window.close();
      return true;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}

module.exports = closeWindowFunc;
