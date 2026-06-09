import express from "express"
import router from "./routers/router.js"

const app = express()

const port = 8000

app.use("/", router)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})