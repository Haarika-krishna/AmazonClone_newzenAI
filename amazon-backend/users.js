import bcrypt from "bcryptjs"

export const users =[
    {
        name: "Harika",
        email: "harika123@gmail.com",
        password: bcrypt.hashSync('123456',8),
        isAdmin: true,
    },
    {
        name: "Saiteja",
        email: "saiteja123@gmail.com",
        password: bcrypt.hashSync('1234',8),
        isAdmin: false,
    },
]