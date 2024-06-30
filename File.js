// LVL 1

class File {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  rename(newName) {
    this._name = newName;
  }
}

// LVL2

class Image extends File {
  constructor(pixels, name) {
    super(name);
    this._pixels = pixels;
  }
  get pixels() {
    return this._pixels;
  }
  static supportedTypes(types) {
    return (types = ["jpg", "png", "svg"]);
  }
  static calculateSize(width, height) {
    return (width * height) / 8;
  }
  static validateImageName(name) {
    if (name.endsWith(types)) {
      return name;
    } else {
      throw new Error("Enter valid name");
    }
  }
  rename(name) {
    if (!name.isValidateName(name)) {
      throw new Error("Invalid name!");
    }
    super.rename(newName);
  }
  crop(newWidth, newHeight) {
    const currentHeight = this._pixels.length;
    const currentWidth = this._pixels[0].length;
    if (newWidth < currentWidth && newHeight < currentHeight) {
      let cropped = this._pixels
        .slice(0, newHeight)
        .map((el) => el.slice(0, newWidth));
      return cropped;
    } else {
      throw new Error("Can't crop");
    }
  }
}

const file = new File("MyFile.jpg");
console.log(file);
file.rename("picture.png");
console.log(file);

let pixels = [
  ["a", "b", "c"],
  ["a", "b", "c"],
  ["a", "b", "c"],
  ["a", "b", "c"],
];
const image = new Image(pixels);
const size = Image.calculateSize(1900, 1890);
console.log(size);

let cropped1 = image.crop(3, 3);
let cropped2 = image.crop(2, 2);

console.log(cropped1);
console.log(cropped2);
