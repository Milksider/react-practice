const mailPattern = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
const passPattern = new RegExp(/^.*(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/)
const phonePattern = new RegExp(/^[7-8]/)


export {mailPattern, passPattern, phonePattern}
