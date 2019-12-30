function user(id)
{
    this.id = id;
}

function generateUserId()
{
    return Math.random()*999;
}

function createAdminUser( User = new user(generateUserId()) )
{
    User.admin = true;
    return User;
}  

User = new user(generateUserId(18));
console.log(createAdminUser(User));