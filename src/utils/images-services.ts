import bag1 from "../assets/images/bag-1.png";
import bag2 from "../assets/images/bag-2.png";
import bag3 from "../assets/images/bag-3.png";
import bag4 from "../assets/images/bag-4.png";
import bag5 from "../assets/images/bag-5.png";
import bag6 from "../assets/images/bag-6.png";
import bag7 from "../assets/images/bag-7.png";
import bag8 from "../assets/images/bag-8.png";

export function getImage(image: keyof typeof images) {
  const images = {
    bag1,
    bag2,
    bag3,
    bag4,
    bag5,
    bag6,
    bag7,
    bag8,
  };
  return images[image];
}
