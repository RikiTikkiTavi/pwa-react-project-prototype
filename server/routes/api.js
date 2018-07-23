const express = require('express');

const router = express.Router();

/* GET LIST OF SERVICES */
router.get('/get_list_of_services', (req, res) => {
    /* TEMPORARY TIMER FOR PRELAOD */
    const list_of_services = [{"id":1,"name":"Общий план поступления","description":"Поэтапный план поступления основанный на ваших данных.","size":"big"},{"id":2,"name":"Special title treatment","description":"With supporting text below as a natural lead-in to additional content.","size":"small"},{"id":3,"name":"Special title treatment","description":"With supporting text below as a natural lead-in to additional content.","size":"small"},{"id":4,"name":"Special title treatment","description":"With supporting text below as a natural lead-in to additional content.","size":"small"}]
    setTimeout(() => {
        res.send(list_of_services)
    }, 2000);
});

/* HANDLE INDEX */
router.get('/', (req, res) => {
    res.send('/api');
});

module.exports = router;