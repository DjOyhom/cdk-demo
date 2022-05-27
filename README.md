# Sin Fronteras

### Pre-reqs 

Para este ejemplo, es necesario tener este stack de tools instaladas!

| Tool | Link de descarga |
|------|------------------|
| NodeJs| https://nodejs.org/es/download/ |
| AWS CLI | https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html|
| CDK CLI | https://docs.aws.amazon.com/cdk/v2/guide/cli.html |

### Steps

##### Config AWS cli (Este no estoy totalmente seguro si es necesario, pero por las dudas les dejo un poco de info)

Se debe hacer el login a la consola de aws para poder desplegar nuestra infraestructura

https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html

##### Config CDK cli

Es necesario hacer el proceso de Bootstrap para poder configurar la region y la cuenta que va a usar CDK para poder desplegar nuestros recursos

https://docs.aws.amazon.com/cdk/v2/guide/bootstrapping.html


##### Instalar las dependencias de este proyecto

Tenemos que instalar las dependencias y las librerias necesarias de este ejemplo

`npm install`

##### Ahora a desplegar todo!

Con el siguiente comando, el indicamos a CDK que debe desplegar nuestro proyecto!

`cdk deploy`

### Docu

- https://docs.aws.amazon.com/cdk/v2/guide/serverless_example.html
- https://www.youtube.com/watch?v=zOwYSX6ExSY

# Nota importante!
### Esto no es mio, es de todos! Si alguien siente que puede brindarle valor, mejorando cualquier parte de este repositorio, esta guia, el codigo de ejemplo, lo que sea, sientase libre de hacerlo! La idea de esto es que todo puedamos utilizar esto para aprender, y si por alguna razon esto tiene algun defecto y alguien es capaz de correjirlo, do it! Si no lo mantenemos, de nada sirve tener codigo inutil! Gracias y cualquier cosa, el equipo de DevOps esta a las ordenes!!