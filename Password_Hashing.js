const bcrypt = require("bcrypt");


    let hashedPassword = await bcrypt.hash(password, 10);


    console.log(hashedPassword);

and Save the credentials in the database !
