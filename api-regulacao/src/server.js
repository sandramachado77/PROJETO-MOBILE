import { app } from "./app.js";
import { prisma } from "./lib/prisma.js";

app
    .listen({
        host: "0.0.0.0",
        port: 8080,
    })
    .then(() => {
        console.log("Servidor ligado na porta 8080")
    })


app.post("/login", async (request, reply) => {

    const { user, password } = request.body

    console.log(user, password)

    // Fazer validações de usuário (Se já existe um mesmo usuário criado, se a senha está certa...)

    const newUser = await prisma.user.create({
        data: {
            user,
            password,
            expertise: ""
        }
    })

    return reply.code(200).send(`Login efetuado com sucesso! Olá ${newUser.user}`)
})