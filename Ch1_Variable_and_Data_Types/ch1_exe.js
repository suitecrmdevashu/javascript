//Exercise

let person = {
  name: 'Asha Sharma',
  dob: '02-10-1970',
  isMarried: true,

  address: {
    city: 'Delhi',
    state: 'Delhi',
    pincode: 110092
  },

  friendsList: ['Ranjana', 'Ram Kumari', 'Lalu']
};

console.log(person);
console.log(person.dob);
console.log(person.address.city);
console.log(person['address']['pincode']);
console.log(person.friendsList);
console.log(person.friendsList[1]);