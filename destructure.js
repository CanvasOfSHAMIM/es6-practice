const person  = { name: 'Shamim Ashraf', age: 17, Job: 'thinker', gfName: 'Ishra', phone: '01292929293', address: "greenland", friends: ['Shuvoo Ahmed', 'Shahed Islam', 'Sheikh Abdullah', 'Arifur Rahman']};

const {phone, gfName, address} = person;
// const gfName = person.gfName
// const phone = person.phone
// console.log(gfName, phone);
console.log(gfName, phone, address);

const friends = [ 'Yasha Khan', 'Reehmy Khan', 'Hiqrah Khan', 'Simsy Khan'];
const [littelFriend, nextFriend, ...restFriend] = friends;
console.log(...restFriend);

const complexObject = {
    name = 'abc',
    info = {
        address2: 'russia',
        leader: 'putin'
    }
}
const {leader} = complexObject.info
