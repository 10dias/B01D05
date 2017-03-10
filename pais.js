/**
 * @author Thassio Victor <tvmcarvalho@gmail.com>
    * @desc Informações básicas de um país
    * @license MIT
    */
'use strict';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const msg = 'Insira o código do país a ser verificado (ISO 3166-1 alpha-2 code)';
rl.question(msg, function(ans) {
    rl.close();
    const pais = ans.toLowerCase().trim();
    console.log(pais);
});

