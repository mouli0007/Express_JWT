
const JWT = require("jsonwebtoken");

JWT ()=>{

  1st Parameter = > our user credentials
  2nd Parameter => our secret key,
3rd Parameter => expiry time

}

const hashedPassword = await bcrypt.hash(password, 10);

    // Pushing our credentials to DB
    users.push({
      email,
      password: hashedPassword,
    });

    const token = await JWT.sign(
      {
        email,
      },
      "ijiwdjwijdiwjdijdiwjidlpondzvvus",
      {
        expiresIn: 3600,
      }
    );
    return res.json({ token });
  }
);
