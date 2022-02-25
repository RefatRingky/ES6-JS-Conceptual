const loadDog = () =>{
    fetch('https://api.thedogapi.com/v1/breeds')
    .then (res => res.json())
    .then (data => displayDog(data))
}

const displayDog = (dogList) =>{
    const main = document.getElementById('main');
    const first10Data = dogList.slice(0,10);
    console.log(first10Data);

}