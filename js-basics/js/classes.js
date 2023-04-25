class User {
  constructor(userName, age) {
    this.userName = userName;
    this.age = age;
    this.hobbies = [];
  };

  greeting() {
    console.log(`Welcome ${this.userName}, today is your day!`);
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
    return this.hobbies;
  }
}

const user1 = new User('Ricky Bobby', 33);
user1.greeting();
user1.addHobby('coding');
user1.addHobby('skateboarding');


class Admin extends User {
  constructor(userName, age, zone) {
    super(userName, age);
    this.zone = zone;
  };

  createUser(userName) {
    console.log(`Created new user: ${userName}`);
  }
}

const admin1 = new Admin('superAdmin', 45, 4)

admin1.addHobby('skiing');
admin1.addHobby('yelling');
admin1.createUser('Boomer');