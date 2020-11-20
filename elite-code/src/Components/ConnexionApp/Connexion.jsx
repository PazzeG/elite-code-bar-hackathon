import React from "react";
import porteDroite from "../../Assets/porte-gauche.jpg";
import porteGauche from "../../Assets/porte-droite.jpg";
import "./Connexion.css";
import { TimelineLite } from "gsap";

class Connexion extends React.Component {
  constructor(props) {
    super(props);
    this.btnEnter = null;
    this.porteD = null;
    this.porteG = null;
    this.portes = null;
    this.header = null;
    this.myTween = new TimelineLite({ paused: true });
  }

  componentDidMount() {
    this.myTween.to(this.btnEnter, 0.75, { opacity: 0 });
    this.myTween.to(this.portes, 1.25, { scale: 1.25 }, "+=0.4");
    this.myTween.fromTo(
      this.porteD,
      { x: 0, opacity: 1 },
      { duration: 1, x: -800 },
      "portes-=1.25"
    );

    this.myTween.fromTo(
      this.porteG,
      { x: 0, opacity: 1 },
      { duration: 1, x: 800 },
      "portes-=1.25"
    );
    this.myTween.to(this.portes, 0.5, { opacity: 0 }, "-=0.5");
    this.myTween.fromTo(
      this.header,
      { opacity: 0, scale: 0.75 },
      {
        duration: 1.5,
        opacity: 1,
        scale: 1,
        ease: "power1.inOut",
        onComplete: () => (this.portes.style.display = "none")
      }
    );
  }

  render() {
    return (
      <div className="App">
        <div className="portes" ref={div => (this.portes = div)}>
          <img
          alt="porteDroite"
            className="porteDroite"
            src={porteDroite}
            ref={div => (this.porteD = div)}
          />
          <img
          alt="porteGauche"
            className="porteGauche"
            src={porteGauche}
            ref={div => (this.porteG = div)}
          />
        </div>
        <div className="id">
            <label htmlFor="firstname">Firstname</label>
            <input
              type="text"
              id="id"
              name="id"
              placeholder="*****"
              value={this.state.id}
              onChange={this.handleChangeId}
            />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="*****"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </div>
        <btn
          className="enter"
          onClick={() => this.myTween.play()}
          ref={div => (this.btnEnter = div)}
        >
          Enter
        </btn>
        <header className="App-header" ref={div => (this.header = div)}>
        </header>
      </div>
    );
  }
}

export default Connexion;
