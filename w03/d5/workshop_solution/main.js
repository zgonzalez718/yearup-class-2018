class Classic {
  constructor(art_url){
    this.art_url = art_url;
    this.frame = "black-border";
    this.container = document.querySelector("#art");
    this.element = document.createElement("img");
    this.element.addEventListener("click", this.remove.bind(this));
  }

  render(){
    this.element.src = this.art_url;
    this.element.className = this.frame;
    this.container.appendChild(this.element);
  }

  remove(){
    this.container.removeChild(this.element);
  }

}

class Meme extends Classic {
  constructor(art_url){
    super(art_url);
    this.frame = "red-border";
  }
}

let art1 = new Classic("http://simpleabstract.com/assets/images/Oil-On-Canvas-Abstract-Art.jpg");
art1.render();
var meme1 = new Meme("https://www.ecolutionhome.com/wp-content/uploads/2018/02/C-Cooking-Memes-1.png")
meme1.render();
let art2 = new Classic("http://simpleabstract.com/assets/images/Oil-On-Canvas-Abstract-Art.jpg");
art2.render();
var meme2 = new Meme("https://www.ecolutionhome.com/wp-content/uploads/2018/02/C-Cooking-Memes-1.png")
meme2.render();