import service from "../service/service.js"

async function teste(req, res) {

    const request = await service.teste()

    res.send(request)
    
}

export default { teste }