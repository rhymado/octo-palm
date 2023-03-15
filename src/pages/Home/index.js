import React, { Component, Fragment } from "react";
import _ from "lodash";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import withSearchParams from "../../utils/wrapper/withSearchParams";
import withNavigate from "../../utils/wrapper/withNavigate";

import styles from "../../styles/home.module.css";

class Home extends Component {
  handleClick = () => {
    this.props.setSearchParams({
      sort: "cheapest",
      search: "latte",
    });
  };
  componentDidUpdate(prevProps) {
    const prevSearchParams = Object.fromEntries(prevProps.searchParams);
    const currentSearchParams = Object.fromEntries(this.props.searchParams);
    if (!_.isEqual(prevSearchParams, currentSearchParams)) {
      // get data yang terbaru berdasarkan pencarian atau filter
      return console.log(currentSearchParams);
    }
    console.log("No Change");
  }
  render() {
    // console.log(Object.fromEntries(this.props.searchParams));
    return (
      <Fragment>
        <Header />
        <main>
          <section className={styles.branding}>
            <div className={styles.content}>
              <h1 className={styles.title}>Helping brands to stand out</h1>
              <p className={styles.description}>
                I’m Amanda Kerr, an experienced marketing creative, with a strong track record of
                delivering sustainable results or brands across numerous industries.
              </p>
              <button className={`${styles.btn} ${styles.pointer}`} onClick={this.handleClick}>
                Contact me
              </button>
            </div>
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=822,fit=crop/kerriu1rk/image-mxkJZKMVOkcP3lWN.jpg"
              alt="profile"
              onClick={() => this.props.navigate("/")}
            />
          </section>
          <section className="personal">
            <section className="background">
              <h2 className="title">MY BACKGROUND</h2>
              <p className="description">
                While I’ve worked with dozens of companies in all kinds of industries, at my heart
                I’m a storyteller who simply brings out the core features of the brands I work with.
                I aim for honesty and transparency in my work, and rely on strong products and
                services to shine.
              </p>
            </section>
            <section className="services">
              <h2 className="title">MY SERVICES</h2>
              <p className="description-head">What can I do for you?</p>
              <div className="content">
                <div className="card">
                  <h3 className="card-title">Brand development</h3>
                  <p className="card-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ex dolor quo
                    omnis veniam mollitia harum sunt ad ea optio.
                  </p>
                </div>
                <div className="card">
                  <h3 className="card-title">Product rollouts</h3>
                  <p className="card-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugiat minus sed
                    corporis doloribus assumenda veniam, voluptatem praesentium sit officiis.
                  </p>
                </div>
                <div className="card">
                  <h3 className="card-title">Creative marketing</h3>
                  <p className="card-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quo iusto minima.
                    Excepturi molestiae similique aperiam voluptatibus dolor sit. Veritatis!
                  </p>
                </div>
                <div className="card">
                  <h3 className="card-title">Perception management</h3>
                  <p className="card-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sequi consequatur
                    incidunt at impedit a libero, minus soluta numquam deserunt!
                  </p>
                </div>
              </div>
            </section>
          </section>
          <section className="projects">
            <div className="top bar"></div>
            <div className="bottom bar"></div>
            <div className="content">
              <p className="section-title">PROJECTS</p>
              <h1 className="title">Check out my previous work</h1>
              <p className="description">
                Rather than continuing to tell you what I can do, why not take a look for yourself?
                I’m proud of all my previous projects, and believe the success I’ve managed to
                cultivate in the past speaks for itself. Follow the link below to see some of my
                work.
              </p>
              <button className="btn" onClick={() => this.forceUpdate()}>
                See projects
              </button>
            </div>
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=810,fit=crop/kerriu1rk/kerr-d9vXKnbzzDup9y0w.png"
              alt="project-img"
              loading="lazy"
            />
          </section>
          <section className="testimony">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=408,h=384,fit=crop/kerriu1rk/img-mPoynragqKcppX3Q.jpg"
              alt="testimony-subjects"
              loading="lazy"
            />
            <div className="content">
              <p className="testimony-txt">
                Amanda Kerr is a consummate professional who I have had the pleasure working with on
                a number of projects. When you first meet her, you’ll be impressed by how quickly
                she engages with your mission and aligns with your aims. Her approach to marketing
                is nothing short of enlightened, and her novel concepts are a delight to engage
                with.
              </p>
              <p className="subjects">Nicollas Ductorn</p>
              <p className="job">
                Director of Corporate Marketing <br />
                Forge Inc.
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default withNavigate(withSearchParams(Home));
