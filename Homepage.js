import React from "react";
import TomNook from "./img/TomNook.png"
import Video from "./img/Sample.mp4"
import Virus from "./img/Virus.png"
import Title from "./img/ContentTitle.png"
import Title2 from "./img/ContentTitle-2.png"
import Title3 from "./img/ContentTitle-3.png"
import Title4 from "./img/ContentTitle-4.png"
import Orville from "./img/Orville.png"
import Daisy from "./img/Daisy.png"
import Tommy from "./img/Tommy.png"
import Saharah from "./img/Saharah.png"
import Dodo from "./img/Dodo.png"
import Raddle from "./img/Raddle.png"
import Mystery from "./img/Mystery.png"

function Homepage() {
  return (
  <div>

    <div className="homepage-top">
      <div className="sampleBackground">
      <div className="content">
      <h1>Welcome to Nook Foundation!</h1>
      <h3>To spread our blessings far, and to eagerly serve.</h3>
      </div>
        <video autoPlay muted loop id="sampleVideo">
          <source src={Video} type="video/mp4" />
        </video>
    </div>
      <div className="covid-19">
        <img src={Virus} alt="Virus" />
          <div className="covid-text">
            <h2>Please donate and help WHO against</h2>
            <h1>COVID-19</h1>
            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate">Read more</a>
          </div>
      </div>
      <section className="mission">
        <h6>Our mission to achieve our vision</h6>
        <div className="divider divider-heading">
          <span className="divider-line"></span>
          <span className="divider-arrow divider-down"></span>
          <span className="divider-line"></span>
        </div>
        <article id="mission-article" className="mission-content">
          <div id="mission-background" className="circle-background"></div>

              <div className="mission-content-title-animation">
                <div className="mission-content-title-holder">
                  <h2>Deliveries quick and easy!</h2>
                  <h4>Ensuring total confidentiality and satisfaction</h4>
                  <p className="content-text">Having access to materials can be quite the struggle for newer players of the franchise.
                  Our vision is to jumpstart any adventure and ensure their journey into the new horizons is a pleasant one.
                  We also prioritize total confidentiality, that way, your island and it’s decor remain untouched and unsullied.
                  We also try to make deliveries on time, and although we are not totally perfect, we are always eager to serve you wherever it may be.
                  That is what the foundation stands for. </p>
                </div>
              <img src={Title} alt="Content Image" className="mission-content-img" />
          </div>
        </article>
      </section>


      <section className="mission">
        <article className="mission-content mission-content-judy">
          <div className="circle-background circle-background-judy"></div>

            <div className="mission-content-title-animation mission-content-title-animation-judy">
              <div className="mission-content-title-holder mission-content-title-holder-judy">
                <h4>A safe haven for all to thrive in!</h4>
                <p className="content-text content-text-judy">The foundation strives to provide sanctuary for all members around the globe.
                Not only do we provide materials and services to the members of the franchise,
                but we attempt to go far and beyond as to ensure that your experience here is a pleasant one.
                We all know how hard it can be for traders and players alike to gain materials,
                and the last thing we ever want is to have the unfortunate encounter that may prove troublesome for some players. </p>
              </div>
              <img src={Title2} alt="Content Image" className="mission-content-img" />
              </div>
        </article>
      </section>


      <section className="mission">
        <article className="mission-content">
          <div className="circle-background circle-background-shiba"></div>

            <div className="mission-content-title-animation mission-content-title-animation-shiba">
              <div className="mission-content-title-holder mission-content-title-holder-shiba">
                <h4>Inspiring others to take the path of servitude</h4>
                <p className="content-text content-text-shiba">The sooner we act the further we can go.
                This foundation is but the collective efforts of the beloved ACNH community combined to forge a unique service which caters to those who need it.
                We wish our actions and our services inspire you to do the same to your beloved community wherever it may be. . </p>
              </div>
              <img src={Title3} alt="Content Image" className="mission-content-img" />

              </div>
        </article>
      </section>


      <section className="mission">
        <article className="mission-content">
          <div className="circle-background circle-background-kk"></div>

            <div className="mission-content-title-animation mission-content-title-animation-kk">
              <div className="mission-content-title-holder mission-content-title-holder-kk">
                <h4>Join our Discord!</h4>
                <button className="discordbutton" onClick={() => window.open("https://discord.gg/nookfoundation")}>Our Discord</button>
                <p className="content-text content-text-kk">We’d love to have you around!
                We give away materials fairly frequently and we also have much in store for newer members of our community! </p>
              </div>
              <img src={Title4} alt="Content Image" className="mission-content-img" />

              </div>
        </article>
      </section>

    </div>
    <section className="support">
        <div className="donate">
        <div className="donate-background"></div>
          <h2>Please!</h2>
          <p>Consider helping the relief workers currently tackling this deadly epidemic.
          Though the battle is far from over, every help counts.
          Let us all contribute and save the lives 'affected by the deadly virus.
          Every. Dollar. Counts.</p>
          <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate">Donate here</a>
          <img src={Raddle} alt="Raddle" className="raddle" />

        </div>
        <div className="giveaway">
        <div className="giveaway-background"></div>
          <h2>Mystery Giveaway!</h2>
          <img src={Mystery} alt="Mystery Giveaway" className="mystery-giveaway" />
          <p>Disclaimer: A three day cooldown will be imposed.
          It is also recommended to sign up to make more specific giveaways!</p>
        </div>
        <div className="dodo-code">
        <div className="dodo-code-background"></div>
        <h2>Enter your Dodo Code here for a mystery giveaway!</h2>
        <img src={Dodo} alt="Dodo Code" className="dodo" />
        <button className="dodo-code" type="submit">Submit</button>
        <input placeholder="BHAK2" maxlength="5"></input>
        <p>Caution: Please fence your airport before putting your dodo code in.
        You might be bombarded with users that will give you random materials.</p>
        </div>
    </section>

    <section className="footer">
      <div className="footer-left">
        <h2>Created by</h2>
        <p>@ Davide #Shu9176</p>
        <p>@ Mojojo</p>
        <p>Beff Jezos</p>
      </div>

      <div className="footer-center">
      <h2>Support Us!</h2>
      <button>Patreon</button>
      <button>Merchandise</button>
      <p>Note: Proceeds go to the WHO initiative to combat COVID-19 and other deadly
      diseases and also to our website to better our services!</p>
      </div>

      <div className="footer-right">
        <h2>Please visit these guys too!</h2>
        <li>
          <a href="https://www.gatesfoundation.org">Gates Foundation</a>
        </li>
        <li>
          <a href="https://www.unicef.org">Unicef</a>
        </li>
      </div>

      <div className="footer-bottom">
        <p>Notice:</p>
        <p>This site and it's services are in no way affiliated with Nintendo or any of its reigning parties.
        This site is a fan site created to promote a cause during these troubling times.
        Please contact us if you have any issues whatsoever.</p>
      </div>
    </section>
    </div>

  );
}

export default Homepage;
