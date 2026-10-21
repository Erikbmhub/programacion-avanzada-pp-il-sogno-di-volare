const civilAircrafts = [
  "assets/avion-civil-1.jpg",
  "assets/avion-civil-2.jpg",
  "assets/avion-civil-3.jpg",
  "assets/avion-civil-4.jpg",
  "assets/avion-civil-5.jpg",
];

const militaryAircrafts = [
  "assets/avion-militar-1.jpg",
  "assets/avion-militar-2.jpg",
  "assets/avion-militar-3.jpg",
  "assets/avion-militar-4.jpg",
  "assets/avion-militar-5.jpg",
];

const civilHelicopters = [
  "assets/helicoptero-civil-1.jpg",
  "assets/helicoptero-civil-2.jpg",
  "assets/helicoptero-civil-3.jpg",
  "assets/helicoptero-civil-4.jpg",
  "assets/helicoptero-civil-5.jpg",
];

const militaryHelicopter = [
  "assets/helicoptero-militar-1.jpg",
  "assets/helicoptero-militar-2.jpg",
  "assets/helicoptero-militar-3.jpg",
  "assets/helicoptero-militar-4.jpg",
  "assets/helicoptero-militar-5.jpg",
];

class Gallery {
  constructor(civilImages, militaryImages) {
    this.civilImages = civilImages;
    this.militaryImages = militaryImages;
  }

  getRandomCivil() {
    const indice = Math.floor(Math.random() * this.civilImages.length);
    return this.civilImages[indice];
  }

  getRandomMilitary() {
    const indice = Math.floor(Math.random() * this.militaryImages.length);
    return this.militaryImages[indice];
  }

  getAll() {
    const todasImagenenes = [];
    for (let i = 0; i < this.civilImages.length; i++) {
      todasImagenenes.push(this.civilImages[i]);
     // console.log("for1"+this.civilImages[i]);
      
  
      
    }
    for (let i = 0; i < this.militaryImages.length; i++) {
      todasImagenenes.push(this.militaryImages[i]);
    }
    todasImagenenes.forEach(item => {
    //console.log("foreach"+item);
    });
    console.log(todasImagenenes);   
    return todasImagenenes;
  }
}
class Painter {
  constructor() {
    this.createGallery();
  }
  createGallery() {
    this.gallery = document.createElement("section");
    document.body.appendChild(this.gallery);
  }
  createImageTag(imageUrl) {
    const picture = document.createElement("picture");
    const img = document.createElement("img");
    img.src = imageUrl;
    picture.appendChild(img);
    return picture;
  }
  paintSingleImage(imageUrl) {
    const image = this.createImageTag(imageUrl);
    this.gallery.appendChild(image);
  }
  paintMultipleImages(arrayOfImages) {
   for ( let i = 0; i < arrayOfImages.length; i ++) {
    this.paintSingleImage(arrayOfImages[i]);
   }
  }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();

//return [...this.civilImages,...this.militaryImages]
//console.log(aircrafts.getRandomCivil());
//console.log(aircrafts.getRandomMilitary())
//aircrafts.getAll()
//painter.paintMultipleImages(civilAircrafts);
/*   Mi razonamiento para sacar el random civil 

const tipo = Math.floor(Math.random() * 2);
        if (tipo ===0 ) {
            const indice = Math.floor(Math.random() * this.civilImages.length);
            return this.civilAircrafts[indice];
        } else {
            const indice = Math.floor(Math.random() * this.civilHelicopters.length);
            return this.civilHelicopters[indice];
        }

        */
