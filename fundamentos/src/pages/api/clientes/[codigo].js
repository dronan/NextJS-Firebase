export default function handler(req, res) {
    const codigo = req.query.codigo

    res.status(200).json({
        codigo: codigo,
        nome: `Maria ${codigo}`,
        email: `maria${codigo}@xpto.com`,
    })
}