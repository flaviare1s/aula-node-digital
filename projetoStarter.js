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

fs.writeFileSync('index.html', `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`)




 






