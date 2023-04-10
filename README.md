# CoderHouse-Backend-32240-DesafioClase30
Aplicación web de Ecommerce de productos.

Para iniciar la aplicación, descargar los paquetes de package.json y, sobre la carpeta del repositorio, ejecutar npm start.

Antes de ejecutar el comando, es necesario crear un archivo .env en el que deben detallarse:
  CONNECTION
  BCRYPTGENSALT
  JWTKEY
  PERSISTENCE
  MAILPASSWORD
  
El proyecto cuenta con varias APIs, las cuales son session, carts, products, tickets y messages, para acceder a cada una de ellas, la URL es /api/nombreApi/metodo

El proyecto puede trabajar tanto con Mongo como con persistencia en archivos, esto se define en el PERSISTENCE del .env y utiliza el patrón Factory para alternar entre estos

La aplicación cuenta con varias secciones, incluyendo un chat para usuarios, un sistema de roles para la creación y modificación de archivos, usuarios con carritos autogenerados para cada usuario, sistema de compras con control y verificación de stock y motor de plantillas con handlebars

El usuario administrador tiene como email coderUser@coderhouse.com y como contraseña coderPassword
