import React from "react";
import porteDroite from "../../Assets/porte-gauche.jpg";
import porteGauche from "../../Assets/porte-droite.jpg";
import "./Connexion.css";
import { Tween, TimelineLite, TimelineMax } from "gsap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.btnEnter = null;
    this.porteD = null;
    this.porteG = null;
    this.portes = null;
    this.myTween = new TimelineLite({ paused: true });
  }

  componentDidMount() {
    this.myTween.to(this.btnEnter, 0.75, { opacity: 0 });
    this.myTween.to(this.portes, 1.25, { scale: 1.25 }, "+=0.4");
    this.myTween.fromTo(
      this.porteD,
      { x: 0, opacity: 1 },
      { duration: 1, x: -300 },
      "portes-=1.25"
    );

    this.myTween.fromTo(
      this.porteG,
      { x: 0, opacity: 1 },
      { duration: 1, x: 300 },
      "portes-=1.25"
    );
    this.myTween.to(this.portes, 0.5, { opacity: 0, onComplete: function(){} }, "-=0.5");
  }

  render() {
    return (
      <div className="door">
        <div className="portes" ref={div => (this.portes = div)}>
          <img
            className="porteDroite"
            src={porteDroite}
            ref={div => (this.porteD = div)}
          />
          <img
            className="porteGauche"
            src={porteGauche}
            ref={div => (this.porteG = div)}
          />
        </div>
        <btn
          className="enter"
          onClick={() => this.myTween.play()}
          ref={div => (this.btnEnter = div)}
        >
          Enter
        </btn>
      </div>
    );
  }
}

export default App;
