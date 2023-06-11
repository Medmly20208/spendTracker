export const getCurrentDate = ()=>{
    const date = new Date();
  
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  
  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${year}-${month}-${day}`;
  
  return currentDate
  
  }


export  const addDays = (dateString,numberOfDays) => {
    const date = new Date(dateString);
    
    date.setDate(date.getDate() + numberOfDays+1);
    return date.toISOString().split("T")[0];
  };