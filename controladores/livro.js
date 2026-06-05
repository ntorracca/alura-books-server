function getLivros(req, res) {
    try {
        res.send("Olá mundo da alura")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
}

module.exports = { getLivros }