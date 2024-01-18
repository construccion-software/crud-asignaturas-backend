const metodo = require('./operacion/subjects');
const exp = require('express');
const router = exp.Router();

router.get('/', (req, res) => {
    metodo.getSubjects(res);
})

router.post('/', (req, res) => {
    metodo.insertSubject(req, res);
})

router.delete('/', (req, res) => {
    metodo.deleteSubject(req, res);
})

module.exports = router;