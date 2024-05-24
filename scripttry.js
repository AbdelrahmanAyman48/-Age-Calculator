const inputElements = document.querySelectorAll('.card__input');
const submitButton = document.querySelector('.card__button');

const calculateAge = (year,month,day) => {
  
  const today = new Date();
  const birthDate = new Date(year, month-1, day);
  
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  console.log(today.getDate())
  if(monthDiff<0)
  return age;
}

const onClickHandler = () =>{
  console.log("clicked")


}

submitButton.addEventListener('click', onClickHandler)