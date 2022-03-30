//debes hacer un npm install setimmediate e importaro mediante import 'setimmediate' para evitar el error ReferenceError: setImmediate is not defined al usar el SDK de cloudinary para borrar las imagenes subidas en las pruebas;

import "setimmediate";
import cloudinary from "cloudinary";
import { fileUpload } from "../../../helpers/fileUpload";

//Para la carga de archivos estamos usando cloudinary, por ende debemos instalar dicho paquete como dependencia (npm i cloudinary) para porder acceder a su SDK y poder borrar las imágenes subidas por cada prueba.

//como en el lado de jest estamos usando "node" la documentación debe ser sobre el Server side SDK con node.js: https://cloudinary.com/documentation/node_integration

//la documentacipon para borrar los assets subidos a nuestra cuenta de cloudinary se enciuentran en https://cloudinary.com/documentation/admin_api#delete_resources

cloudinary.config({
  cloud_name: "yanioconjota",
  api_key: "113597742213448",
  api_secret: "_GdYX_x53gUGWMaALEhlhKoJoIM",
});

describe("pruebas con fileUpload helper", () => {
  test("debe cargar un archivo y retornar el URL", async() => {
    //traemos el archivo mediante el método fetch y como es una promesa usamos async y await
    const resp = await fetch("https://static.dw.com/image/61276867_303.jpg");

    const blob = await resp.blob();

    //Creamos el archivo que vamos a subir
    //File necesita File: new (fileBits: BlobPart[], fileName: string, options?: FilePropertyBag)
    const file = new File([blob], "foto.png");

    const url = await fileUpload(file);

    console.log(url);

    expect(typeof url).toBe("string");

    //debemos borrar la imagen subida para la prueba para no saturar nuestra cuenta con basura

    //El método es:
    //cloudinary.v2.api.delete_resources(public_ids, options, callback);

    //Para obtener el public_id hacemois lo giguiente:

    //dividimos la url --> " https://res.cloudinary.com/yanioconjota/image/upload/v1648669728/v94plca3mstud7umhmql.jpg" en segmentos
    const segments = url.split("/");

    //hacemos un replace del id que es el nombre dekl archivo --> "'v94plca3mstud7umhmql.jpg'"
    const imageId = segments[segments.length - 1].replace(".jpg", "");
    console.log(imageId);

    //eliminamos los parámetros opcionales y le pasamos el imageId
    cloudinary.v2.api.delete_resources(imageId);
  });

  test("debe retornar un error", async () => {
    //Al pasar el array sin el blob aseguramos que nos de el error
    const file = new File([], "foto.png");

    const url = await fileUpload(file);

    //Como el fileUpload se manda con un archivo sin dirección, entonces la url es null y ese es nuestro expect
    console.log(url);

    expect(url).toBe(null);
  });
});
