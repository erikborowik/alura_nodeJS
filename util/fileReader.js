var fs = require('fs');
var arquivo = process.argv[2];

fs.readFile(arquivo, function (err, buffer) {
    
    fs.writeFile("arquivo-novo.jpg", buffer, function (err) {
        if(err){
            console.log("erro ao comprimir");
        }
        console.log('arquivo comprimido.');

    });

});