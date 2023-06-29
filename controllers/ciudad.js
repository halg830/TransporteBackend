const httpCiudad = {
    //post
    postCiudades: async (req, res) => {
        try {
            const {nombre, estado} = req.body;
            const Ciudad = new Ciudad({nombre, estado});
            Ciudad.save();

            res.json(Ciudad)
        } catch (error) {
            res.status(400).json({ error });
        }
    }
} 

export default httpCiudad;