<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/app.js"></script>
    <title>Example</title>
</head>
<body>
    <form action="index.php" enctype="multipart/form-data" method="post">
        <label for="name">Nombre:</label>  
        <input type="text" id="name"> 
        <label for="last-name">Apellido:</label>  
        <input type="text" id="lastname"> 
        <input type="button" id="add" value="Agregar">
        <input type="reset" value="Limpiar">
    </form>

    <table id="main_table" cellspacing="0" >
        <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Eliminar</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
</body>
</html>