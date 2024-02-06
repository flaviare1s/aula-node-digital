const fs = require('node:fs')

const diretorios = [
    './meuprojeto/assets/css',
    './meuprojeto/assets/js',
    './meuprojeto/assets/images'
]

diretorios.forEach(diretorio => {
    fs.mkdir(diretorio, { recursive: true }, (err) => {
        if (err) throw err;
      })
})


 






