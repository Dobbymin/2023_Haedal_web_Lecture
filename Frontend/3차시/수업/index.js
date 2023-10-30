const dobby = {
    name: 'Gangmin',
    age: 25,
};

/** 존재하는지 안하는지 알 수 있다. */
// true, false를 반환
console.log('age' in dobby);

for (let key in dobby) {
    console.log(key); //"name", "age"
    console.log(dobby[key]); //superMan[name], superMan[age]
}
