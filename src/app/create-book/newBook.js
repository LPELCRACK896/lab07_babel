const books_availables = [
  {
    author: "Carlos Ruiz Zafon",
    title: "La Sombra Del Viento",
    description: "La Sombra del Viento es sobre todo una trágica historia de amor cuyo eco se proyecta a través del tiempo. Con gran fuerza narrativa, el autor entrelaza tramas y enigmas a modo de muñecas rusas en un inolvidable relato sobre los secretos del corazón y el embrujo de los libros cuya intriga se mantiene hasta la última página.", 
    category: "Aventura-Misterio-Romance",
    image: "libro1.jpg"
  },
  {
    author: "Carlos Ruiz Zafon",
    title: "El juego del angel",
    description: "En la turbulenta Barcelona de los años 20 un joven escritor obsesionado con un amor imposible recibe la oferta de un misterioso editor para escribir un libro como no ha existido nunca, a cambio de una fortuna y, tal vez, mucho más.", 
    category: "Aventura-Misterio-Romance",
    image: "libro2.jfif"

  },
  {
    author: "Carlos Ruiz Zafon",
    title: "El Prisionero Del Cielo",
    description: "Daniel Sempere, ya un hombre casado y padre de un hijo, recibe la visita de un misterioso hombre que busca a Fermín Romero de Torres. Entonces será cuando descubra la dura historia de su amigo y lo muy unidos que están uno y otro.", 
    category: "Aventura-Misterio-Romance", 
    image: "libro3.jpg"
  },
  {
    author: "Carlos Ruiz Zafon",
    title: "El laberinto de los espíritus",
    description: "Justo cuando Daniel cree que está a un paso de resolver el enigma, una conjura mucho más profunda y oscura de lo que nunca podría haber imaginado despliega su red desde las entrañas del Régimen. Es entonces cuando aparece Alicia Gris, un alma nacida de las sombras de la guerra, para conducirlos al corazón de las tinieblas y desvelar la historia secreta de la familia… aunque a un terrible precio.", 
    category: "Aventura-Misterio-Romance", 
    image: "libro4.jpg"
  },
  {
    author: "Patrick Rothfuss",
    title: "El nombre del viento",
    description: "En una posada en tierra de nadie, un hombre se dispone a relatar, por primera vez, la auténtica historia de su vida. Una historia que únicamente él conoce y que ha quedado diluida tras los rumores, las conjeturas y los cuentos de taberna que le han convertido en un personaje legendario a quien todos daban ya por muerto: Kvothe# músico, mendigo, ladrón, estudiante, mago, héroe y asesino. Ahora va a revelar la verdad sobre sí mismo", 
    category: "Aventura-Misterio-Medieval", 
    image: "libro5.jfif"
  },
  {
    author: "Patrick Rothfuss",
    title: "El temor de un hombre sabio",
    description: "Músico, mendigo, ladrón, estudiante, mago, héroe y asesino. Kvothe es un personaje legendario, el héroe o el villano de miles de historias que circulan entre la gente. Todos le dan por muerto, cuando en realidad se ha ocultado con un nombre falso en una aldea perdida. Allí simplemente es el taciturno dueño de Roca de Guía, una posada en el camino. Hasta que hace un día un viajero llamado Cronista le reconoció y le suplicó que le revelase su historia, la auténtica, la que deshacía leyendas y rompía mitos, la que mostraba una verdad que sólo Kvothe conocía. A lo que finalmente Kvothe accedió, con una condición: había mucho que contar, y le llevaría tres días.", 
    category: "Aventura-Misterio-Medieval", 
    image: "libro6.jfif"
  },
  {
    author: "Patrick Rothfuss",
    title: "La música del silencio",
    description: "La música del silencio está protagonizada por Auri, uno de los personajes más queridos y rodeados de misterio que aparecen en El nombre del viento y El temor de un hombre sabio. Hasta ahora la conocíamos a través de Kvothe. Este nuevo libro nos permitirá ver el mundo a través de Auri y nos dará la oportunidad de aprender lo que hasta ahora únicamente ella sabía... La música del silencio es una historia lírica, evocadora, sugestiva y rica en detalles. Una novela que arroja algo más de luz sobre la historia de Kvothe y el universo de la Crónica del Asesino de Reyes. Una muestra más del brillante talento de Patrick Rothfuss como narrador.", 
    category: "Aventura-Misterio-Romance", 
    image: "libro7.jfif"
  },
  {
    author: "Patrick Rothfuss",
    title: "Las puertas de piedra",
    description: "Sinópsis pendiente", 
    category: "Aventura-Misterio-Romance", 
    image: "libro8.jpg"
  },
  {
    author: "Stephen King",
    title: "Mr. Mercedez",
    description: "Mr. Mercedes, primera novela de la «Trilogía Bill Hodges», es la historia de una guerra entre el Bien y el Mal. Un retrato inolvidable de la mente de un asesino obsesionado y demente.", 
    category: "Novela Negra-Crimen-Misterio-Contemporaneo", 
    image: "libro9.jpg"
  },
  {
    author: "Stephen King",
    title: "El pistolero",
    description: "La historia se centra en Roland Deschain, el último pistolero, quien ha estado persiguiendo a su adversario, el \"hombre de negro\", por muchos años. La novela sigue el viaje de Roland a través de un vasto desierto y más allá, en busca del hombre de negro", 
    category: "Aventura-Acción", 
    image: "libro10.jpg"
  }
]

export const newBook = (num) =>{ 
  const book_id = "libro_"+num 
  const container = "container_"+num 
  var book_to_add = books_availables[books_availables.length-1]
  books_availables.pop()

  var book_image_element = document.getElementById(book_id)


  document.getElementById('descripcion_'+container+"p").innerHTML = book_to_add.description

  document.getElementById(container).innerHTML = "";
  var salto_de_linea = document.createElement("br")

  var parent_container = document.getElementById('padre_'+container)

  
  var newBookSpace = document.getElementById(container)
  
  

  parent_container.appendChild(newBookSpace)

  newBookSpace.appendChild(book_image_element)

  var overlay = document.createElement("div")
  overlay.setAttribute("class", "overlay_portada")
  var div_txt_in_overlay = document.createElement("div")
  div_txt_in_overlay.setAttribute("class", "text")
  var p_element_in_overlay = document.createElement("p")
  var title_bold_element = document.createElement("b")
  title_bold_element.innerHTML = book_to_add.title
  var author_element = document.createElement("p")
  
  author_element.innerHTML = book_to_add.author
  

  p_element_in_overlay.appendChild(title_bold_element)
  p_element_in_overlay.appendChild(salto_de_linea)
  p_element_in_overlay.appendChild(author_element)
  div_txt_in_overlay.appendChild(p_element_in_overlay)
  overlay.appendChild(div_txt_in_overlay)
  newBookSpace.appendChild(overlay)
}