
let name;
function welcome(name) {
    console.log(name +'welcome in new world ...')
}
function change(name) {
    console.log(name +'welcome in new world ...')
}
document.querySelector('#name').addEventListener('change',(e)=>{
    name = e.target.value
})
document.querySelector('#welcome').addEventListener('click',()=>{
    if (name) {
        document.querySelector('h1').innerHTML='welcome '+name+'to my world'
        
    }
})

