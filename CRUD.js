var arr = [
  { id: 1, name: 'Sardor', surname: 'Samijonov' },
  { id: 2, name: 'Fozil', surname: 'Halimov' },
  { id: 3, name: 'Akbar', surname: "Jo'rayev" },
  { id: 4, name: 'Jumavoy', surname: 'Ismoilov' },
  { id: 5, name: 'FerFerro', surname: 'Xolisov' },
];
/////Save
    function getSave(text1, text2) {
        var ObjUser = { id: arr.length + 1, name: text1, surname: text2 }
        arr.push(ObjUser);
        console.log(arr);
    }
getSave("Odil", "Uroqov");

//Delete
function del(text1, text2) {
    return arr.filter((i)=>i.name!==text1)
}
console.log(del('Akbar'));

Update
function update(text1, text2) {
    return arr.map((value)=>value.name==text1 ? {...value,name:text2}:value)

}
console.log(update('Sardor', 'sefae'));


Search
function Search(text1, text2) {
  if (text1 == 'name') {
    return arr.filter((i) =>
      i.name.toLowerCase().includes(text2.toLowerCase())
    );
  }
  if (text1 == 'surname') {
    return arr.filter((i) =>
      i.surname.toLowerCase().includes(text2.toLowerCase())
    );
  }
    if (text1 == 'id') {
        var text3 = text2 + "";
        return arr.filter((i) => i.id == text3)
    }
}
console.log(Search('id', 2));

function Search(key, text) {
    return arr.filter((value) => { 
        var category=value[key]+""
        return category.toLowerCase().includes(text.toLowerCase())
    })
}
console.log(Search("id","5"));
