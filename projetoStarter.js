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


fs.writeFileSync('./meuprojeto/index.html', `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./meuprojeto/assets/css/style.css">
    <title>Document</title>
</head>
<body>
    
</body>
<script src="meuprojeto/assets/js/script.js"></script>
</html>`)

fs.writeFileSync('./meuprojeto/assets/js/script.js', 'alert("Deu certo!")')

fs.writeFileSync('./meuprojeto/assets/css/style.css', `
* {
    margin: '0px';
    padding: '0px';
}
`)











 






