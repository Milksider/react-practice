export function openMenu(){
    if(document.querySelector('.burger-menu')){
    return(document.querySelector('.burger-menu').classList.add('burger-menu--active'))}
}
export function closeMenu(){
    if(document.querySelector('.burger-menu')){
    return(document.querySelector('.burger-menu').classList.remove('burger-menu--active'))}
}