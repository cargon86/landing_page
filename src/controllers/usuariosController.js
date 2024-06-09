const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuarios', (err, usuarios) => {
            if (err){
                res.json(err);
            }
            console.log(usuarios);
            res.render('usuarios', {
                data: usuarios
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO usuarios set ?', [data], (err, usuarios) => {
            console.log(usuarios);
            res.redirect('/');
        });
    });
};

module.exports = controller;