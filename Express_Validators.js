// Express Validator !
const { check, validationResult } = require("express-validator");

router.post(
  "/signup",
  [
    // Making the checks

    check("email", "Please Provide a Valid Email").isEmail,
    check("password", "Please Provide a valid password !").isLength({
      min: 6,
    }),
  ],
  (req, res) => {
    const { email, password } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    return res.send(`Validation Passed for ${email}`);
  }
);

module.exports = router;
