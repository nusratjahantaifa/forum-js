//  function myFunction() {
//   alert("Button was clicked!");
// }
const loadPost = async () =>{
    const res = await fetch(' https://openapi.programming-hero.com/api/retro-forum/posts');
const data = await res.json();
console.log(data);
}
loadPost();


  const viewCount = document.querySelector('.fa-eye').nextSibling;
  let views = 1568;
  setInterval(() => {
    views += Math.floor(Math.random() * 3);
    viewCount.textContent = ` ${views.toLocaleString()}`;
  }, 3000);
const loadCard = async () =>{
  const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
  const data = await res.json();
  console.log(data);
 
  //  const container = document.getElementById('card-container');

}
//handleSearch btn
const handleSearch = () =>{
  // console.log('search handle')
  const searchField = document.getElementById('search');
  const searchText = searchField.value;
  console.log(searchText);
loadCard(search);
}
 loadCard();

