import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HomeMain = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleContribution = () => {
    navigate("/users/login");
  };

  const handleSearch = () => {
    navigate("/users/signup");
  };

  useEffect(() => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const selectionId = location.pathname.replace("/", "");
      const element = document.getElementById(selectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero soft-gradient" id="about-us">
        <div className="container px-4 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <h1 className="display-4">
                Help Reunite Missing Persons with Their Families
              </h1>

              <p className="lead text-muted my-4">
                A humanitarian initiative dedicated to reconnecting loved ones
                through a secure, community-driven platform. Your information
                can make a world of difference.
              </p>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                <button
                  className="btn btn-primary btn-lg px-4"
                  onClick={handleContribution}
                >
                  Contribute Information
                </button>
                <button
                  className="btn btn-outline-primary btn-lg px-4"
                  onClick={handleSearch}
                >
                  Search Missing Persons
                </button>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-5 pt-lg-4">
            <div className="col-lg-10">
              <div
                className="w-100 h-auto rounded-4 shadow-lg"
                style={{
                  aspectRatio: "2 / 1",
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBWFgVVjPxYkagf8pTzopEPBHleSYLxmpsHYRBT2O6gMt50wbXDN7n-TCn0Q9ZaAk_Q_zhYzTZsvvGI7Zq0vXfIfd6H5-WI3ZHZtsOPcYOkeEbKW_KjCVS5MGVKb2kJjcPz7WKa7trQgov7lq8merzScNIYOk4oWDQdmUBMlbi4djd-A5DRXu9zn9qzFAIIV7Lwe41k1zt2M19N_Z3aVv63J0V-Z7Dn2VZZ9J4u9xcTN1Wko4mdkaKwFmqyRWjDuOjlFio4MywKRjFr')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section" id="how-it-works">
        <div className="container px-4">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold">How It Works</h2>
              <p className="lead text-muted mt-3">
                A simple, secure, and effective process to bring families
                together.
              </p>
            </div>
          </div>

          <div className="row g-4 g-lg-5">
            <div className="col-md-4">
              <div className="card h-100 text-center p-4">
                <div class="icon-circle mx-auto mb-4">
                  <span class="material-symbols-outlined">edit_document</span>
                </div>
                <h3 className="h5 fw-bold">Contribute Details</h3>
                <p className="text-muted">
                  Share vital information about missing persons—photos,
                  descriptions, and last known locations—to build our database.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 text-center p-4">
                <div class="icon-circle mx-auto mb-4">
                  <span class="material-symbols-outlined">search</span>
                </div>
                <h3 className="h5 fw-bold">Search Our Database</h3>
                <p className="text-muted">
                  Utilize our comprehensive search with powerful filters to look
                  for potential matches and find your loved ones.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 text-center p-4">
                <div class="icon-circle mx-auto mb-4">
                  <span class="material-symbols-outlined">lock</span>
                </div>
                <h3 className="h5 fw-bold">Reconnect Securely</h3>
                <p className="text-muted">
                  Once a match is confirmed, we facilitate a secure, private,
                  and compassionate reconnection process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why ReUniteME */}
      <section
        className="section"
        id="why-reuniteme"
        style={{ backgroundColor: "var(--white)" }}
      >
        <div className="container px-4">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold">Why ReUniteME</h2>
              <p className="lead text-muted mt-3">
                Built on trust, community, and the power of technology to do
                good.
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div
                className="p-4 rounded-4"
                style={{ backgroundColor: "var(--background-light)" }}
              >
                <h3 className="h5 fw-bold">Community-Driven</h3>
                <p className="text-muted">
                  Our strength lies in the collective effort of volunteers,
                  families, and individuals like you. Every piece of information
                  is a step towards a reunion.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="p-4 rounded-4"
                style={{ backgroundColor: "var(--background-light)" }}
              >
                <h3 className="h5 fw-bold">Secure &amp; Private</h3>
                <p className="text-muted">
                  We prioritize the security and privacy of all user data,
                  ensuring personal information is protected with the highest
                  standards.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="p-4 rounded-4"
                style={{ backgroundColor: "var(--background-light)" }}
              >
                <h3 className="h5 fw-bold">Impactful Results</h3>
                <p className="text-muted">
                  With a proven track record, ReUniteME has been instrumental in
                  numerous successful reunions, bringing hope and closure to
                  families.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section soft-gradient" id="impact">
        <div className="container px-4">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold">Our Impact in Numbers</h2>
              <p className="lead text-muted mt-3">
                The growing power of a community united for one cause.
              </p>
            </div>
          </div>

          <div className="row g-4 justify-content-center text-center">
            <div className="col-md-4 col-lg-3">
              <div className="impact-card p-4">
                <p className="display-4">12,000+</p>
                <p className="lead text-muted mb-0">Contributors</p>
              </div>
            </div>

            <div className="col-md-4 col-lg-3">
              <div className="impact-card p-4">
                <p className="display-4">50,000+</p>
                <p className="lead text-muted mb-0">Searches Performed</p>
              </div>
            </div>

            <div className="col-md-4 col-lg-3">
              <div className="impact-card p-4">
                <p className="display-4">500+</p>
                <p className="lead text-muted mb-0">Families Reunited</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact Section */}
      <section className="section" id="contact">
        <div className="container px-4">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold">Contact Us</h2>
              <p className="lead text-muted mt-3">
                We are here to help. Reach out with any questions or concerns,
                and our team will get back to you as soon as possible.
              </p>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="card p-4 p-md-5 h-100">
                <form>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="contact-name">
                      Name
                    </label>
                    <input
                      className="form-control"
                      id="contact-name"
                      placeholder="Your Name"
                      type="text"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="contact-email">
                      Email address
                    </label>
                    <input
                      className="form-control"
                      id="contact-email"
                      placeholder="you@example.com"
                      type="email"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="contact-subject">
                      Subject
                    </label>
                    <input
                      className="form-control"
                      id="contact-subject"
                      placeholder="How can we help?"
                      type="text"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label" htmlFor="contact-message">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="contact-message"
                      placeholder="Your message..."
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="d-flex gap-2">
                    <button className="btn btn-primary px-4" type="submit">
                      Submit
                    </button>
                    <button
                      className="btn btn-outline-secondary rounded-pill  px-4"
                      type="reset"
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex flex-column h-100">
                <div className="card p-4 mb-4">
                  <h3 className="h5 fw-bold mb-3">Contact Information</h3>
                  <p className="text-muted d-flex align-items-center mb-2">
                    <span className="material-symbols-outlined me-2 text-primary">
                      email
                    </span>
                    jeelion22@gmail.com
                  </p>
                  <p className="text-muted d-flex align-items-center mb-2">
                    <span className="material-symbols-outlined me-2 text-primary">
                      phone
                    </span>
                    +91-9677061448
                  </p>
                  <p className="text-muted d-flex align-items-center mb-0">
                    <span className="material-symbols-outlined me-2 text-primary">
                      location_on
                    </span>
                    Dharmapuri, Tamilnadu
                  </p>
                </div>
                <div className="map-container flex-grow-1">
                  <iframe
                    allowFullScreen=""
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6361.4953704565!2d78.54387882001204!3d12.18253163386553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac6743e8aabd5d%3A0x8e3ba9340f9f55c0!2sHanumantheertham%2C%20Tamil%20Nadu%20636902!5e0!3m2!1sen!2sin!4v1759240806221!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    width="100%"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container px-4">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold">
                Your small action can bring families back together.
              </h2>
              <p className="lead text-muted my-4">
                Join our community and be a part of the solution. Start now.
              </p>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                <button
                  className="btn btn-primary btn-lg px-4"
                  onClick={handleContribution}
                >
                  Contribute Now
                </button>
                <button
                  className="btn btn-outline-primary btn-lg px-4"
                  onClick={handleSearch}
                >
                  Start a Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeMain;
