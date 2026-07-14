import bcrypt from "bcrypt";

let password = "abc";


//basic hashing method
//"10" is called sat
let hashPassword = await bcrypt.hash(password,10);

console.log(hashPassword)

let isMatch = await bcrypt.compare("abc",hashPassword);

console.log(isMatch);
