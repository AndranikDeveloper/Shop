import nikeLogo from "../assets/carusel-icon/nike-logo.png";
import poloLogo from "../assets/carusel-icon/polo-data.jpg";
import calvinClienLogo from "../assets/carusel-icon/calvin-clien.jpg";
import legoLogo from "../assets/carusel-icon/logo-lego.png";
import allsaintsLogo from "../assets/carusel-icon/allsaints-data.jpg";
import friendsLogo from "../assets/carusel-icon/friends.jpg";
import ashleyLogo from "../assets/carusel-icon/laura-ashley.png";
import lipsyLogo from "../assets/carusel-icon/lipsy-data.png";
import victoriaLogo from "../assets/carusel-icon/victoria-secret.png";
import superdryLogo from "../assets/carusel-icon/superdry-data.jpg";

export function getIcon(icon: keyof typeof icons){
    const icons = {
        nikeLogo,
        poloLogo,
        calvinClienLogo,
        legoLogo,
        allsaintsLogo,
        friendsLogo,
        ashleyLogo,
        lipsyLogo,
        victoriaLogo,
        superdryLogo,
      };
      return icons[icon];
}


