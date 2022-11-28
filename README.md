# MCGA_Recuperatorio_Consigna_A
Consigna A:
Crear un servidor web usando Node.js, NPM y Express.js respetando la arquitectura API REST. Debe contar
con una serie de endpoints que contemple las acciones básicas de un CRUD de usuarios. Los datos de los
usuarios afectados deben estar persistidos en un base de datos NoSQL, usando Mongoose como ODM y
Mongo Atlas como servicio en la nube en donde alojar la base de datos.

Crear un esquema de mongoose para los usuarios el cual tenga las siguientes propiedades. Cada una debe
contar con al menos la validación de tipo de dato:
- id
- nombre
- apellido
- fecha de nacimiento
- dni
- edad
- nacionalidad
- email
- contraseña

Crear 6 endpoints respetando los métodos HTTP para manejar el CRUD:
- GET: para obtener la lista entera de usuarios
- GET: para obtener un usuario por DNI
- GET: para obtener un usuario por EMAIL
- POST: para agregar un usuario a la BD
- DELETE: para eliminar un usuario de la BD
- PATCH: para editar alguna propiedad de un usuario

El proyecto debe manejar variables de entorno utilizando la librería dotEnv, en donde deben ir los valores
sensibles que no deben ser subidos al repositorio, como por ejemplo el string de conexión a la base de
datos. La cuenta de MongoAtlas utilizada para la base de datos debe ser del alumno. Es necesario tener
acceso a la base de datos para visualizarla al momento de exponer el parcial.
