class Art {
  constructor(frame, art_url){
    this.frame= frame;
    this.art_url= art_url;

  }

  render(){
    //do things to the DOM here

  }
}

class Classical extends Art {
  constructor(){
    super();
  }

}
first  = new Art("https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg.")
console.log(first)

let newElement = document.CreateElement('myImg');
 newElement.src =
"https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg.";

let momma = document.getElement("myImg");
console.log(momma);
