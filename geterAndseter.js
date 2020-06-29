let user = {
  birth: 2020,
  get age() {
    return 2020 - `${this.birth}`;
  },
  set age(value) {
    this.birth = 2020 - value;
  },
};

user.age = 22;
console.log(user.birth);
user.age = 20;
console.log(user.birth);
