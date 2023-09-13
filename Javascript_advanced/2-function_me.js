function welcomeMessage(fullName) {
return function () {
    alert('welcome ${fullName}');
};

   
}

const guillaume = welcomeMessage("Guillaume");
const alex = welcomeMessage("Alex");
const fred = welcomeMessage("Fred");

guillaume();
alex();
fred();