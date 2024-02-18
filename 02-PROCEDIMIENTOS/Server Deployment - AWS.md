# Server Deployment para EC2 - AWS

## Instancia EC2

1. En el dashboard principal de AWS navegar hacia el servicio de EC2.
2. Buscar la opción de "Launch instance".
3. Nombrar el recurso.
4. Seleccionar el sistema operativo.
5. Seleccionar el tipo de instancia (t2.micro).
6. Seleccionar proceder sin key pair.
7. Validar que esté seleccionada la opción de "Allow SSH traffic from" y que el valor sea "Anywhere"
8. Seleccionar la opción de "Allow HTTPS traffic from the internet"
9. Seleccionar la opción de "Allow HTTP traffic from the internet".
10. Definir 30GB para el disco.
11. Click en "Launch instance"
12. Verificar que el estado de la instancia sea "Running" si no toca esperar.

## IP Estática

Las IP estáticas se llaman "Elastic IPs" y nos permiten asociar una dirección que no cambie a nuestra nueva instancia de EC2.

Para asociarla a la instancia que tenemos corriendo se debe navegar a "Elastic IPs" en la sección de "Network & Security" y seleccionar la opción de "Allocate Elastic IP Address"

Cuando tengamos alocada la dirección estática podemos procesder a asociarla a la instancia que creamos en el paso anterior.

## Cambiar la clave del root

En el detalle de la instancia existe la posibilidad de conectarse directamente al servidor. Podemos usar esa terminar virtual para conectarnos.

Con el siguiente comando podemos cambiar la clave del root:

```
sudo passwd root
```

Introducimos una clave _apropiada_ y la confirmamos.

Luego cambiamos la clave del usuario default:

```
sudo passwd ubuntu
```

Introducimos una clave _apropiada_ y la confirmamos.

## Mejorar la configuración de SSH

el archivo de configuración para el SSH lo podemos encontrar en:

```
/etc/ssh/sshd_config
```

En este archivo está la configración del servicio.

Buscar dentro de este archivo la línea

```
PasswordAuthentication no
```

y cambiarla a:

```
PasswordAuthentication yes
```

Ya que se han producido cambios en la configuración del servicio se debe reiniciar para que esos cambios tomen efecto, para hacer eso corremos:

```
service sshd restart
```

Para conectarnos a nuestra nueva instancia de EC2 debemos utilizar el comando SSH desde nuestra terminal o cliente se SSH (PuTTy, Terminus, Terminal, etc.)

```
ssh <user>@<ip>
```

Por ejemplo:

```
ssh root@127.0.0.1
```

Para mejorar la seguridad es recomendado cambiar el puerto de SSH para que no sea el default 22. Para hacer esto nuevamente modificamos el archivo

```
vi /etc/ssh/sshd_config
```

pero ahora buscamos la llave "Port" y asignamos el nuevo valor

```
Port 30
```

y nuevamente reiniciamos el servicio:

```
service sshd restart
```

Finalmente en la sección de configuración del AWS buscamos la pestaña de seguridad buscamos el grupo de seguridad y hacemos click sobre el nombre.

Ahora ya podemos conectarnos definiendo el puerto y el flag -p

```
ssh <user>@<ip> -p <puerto>
```

Por ejemplo:

```
ssh root@127.0.0.1 -p 30
```

## Instalar Nginx

Antes de instalar paquetes, primero es recomendado actualizar, para hacer eso podemos usar el comando:

```
apt update
```

Al tener los repocitorios actualizados podemos instalar Nginx corriendo:

```
apt install nginx -y
```

Luego de instalarlo debemos levantar el servicio corriendo:

```
service nginx start
```

para verificar el estado del servicio podemos utilizar:

```
service nginx status
```

Para verificar que funcionó la instalación podemos navegar a la IP de la instancia y debemos ver un mensaje de Nginx.

El root del web server está en:

```
/var/www/html
```

### Permitir ver directorios

Para que nos permita ver directorios el Nginx es necesario modificar el archivo de configuración del servicio:

```
vi /etc/nginx/nginx.conf
```

y dentro de la llave de http agregamos lo siguiente:

```
autoindex on;
```

Y como cada vez que hacemos cambios a un archivo de config, debemos reiniciar el servicio:

```
service nginx restart
```
