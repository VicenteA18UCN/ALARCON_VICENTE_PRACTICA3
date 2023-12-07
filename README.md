# Introducción

Para la instalación del proyecto se necesita:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Xampp 8.2.4](https://www.apachefriends.org/es/index.html)
- [Composer 2.6.5](https://getcomposer.org/)
- [Node.js 20.9.0 LTS](https://nodejs.org/en)
- [MySQLWorkbench](https://dev.mysql.com/downloads/workbench/)
- [Git](https://git-scm.com/)
- [Expo Go](https://expo.dev/client)

  Clonar el repositorio con el siguiente comando en la consola de comnados:

```bash
    git clone https://github.com/VicenteA18UCN/ALARCON_VICENTE_PRACTICA3.git
```

# Instalación Backend

**Importante:**
Abrir el proyecto en el Visual Studio Code, copiar el _".env.example"_ y pegarlo en el proyecto. O cambiar el nombre de _".env.example"_ a _".env"_.

Una vez hecho eso, proceder a abrir la consola y ejecutar los siguientes comandos en orden:

```bash
    cd backend
    composer install
    php artisan key:generate
```

Luego de eso, modificar las credenciales de la base de datos:

```bash
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT="puerto"
    DB_DATABASE="nombre de la base de datos"
    DB_USERNAME=root
    DB_PASSWORD="contraseña"
```

Finalmente en la consola ejecutan el siguiente comando para migrar la base de datos junto con las semillas:

```bash
    php artisan migrate --seed
```

Y para ejecutar el proyecto:

```bash
   php artisan serve
```

# Instalación Frontend

Para la instalación del frontend es necesario tener instalado Node.js, una vez instalado proceder a lo siguiente en una consola de comandos en la carpeta raíz del proyecto:

```bash
    cd frontend
    npm install
    npx expo start
```

Finalmente, a través de la aplicación de [Expo Go](https://expo.dev/client), escanear el código QR que aparece en la consola de comandos. Esto se puede realizar a través de un dispositivo móvil (iOS o Android) o un emulador.
