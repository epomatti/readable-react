export default find

const find = (id, array) => array.filter(element => element.id === id)[0]