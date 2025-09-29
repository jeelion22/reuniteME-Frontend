import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HomeMain = () => {
  const location = useLocation();

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
                <button className="btn btn-primary btn-lg px-4">
                  Contribute Information
                </button>
                <button className="btn btn-outline-primary btn-lg px-4">
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
                <div className="icon-circle mx-auto mb-4">
                  <span className="material-symbols-outlined d-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      class="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                      />
                    </svg>
                  </span>
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
                <div className="icon-circle mx-auto mb-4">
                  <span className="material-symbols-outlined d-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                  </span>
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
                <div className="icon-circle mx-auto mb-4">
                  <span className="material-symbols-outlined d-flex ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      class="bi bi-lock"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"
                      />
                    </svg>
                  </span>
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
      <section class="section" id="contact">
        <div class="container px-4">
          <div class="row justify-content-center text-center mb-5">
            <div class="col-lg-8">
              <h2 class="display-5 fw-bold">Contact Us</h2>
              <p class="lead text-muted mt-3">
                We are here to help. Reach out with any questions or concerns,
                and our team will get back to you as soon as possible.
              </p>
            </div>
          </div>
          <div class="row g-5">
            <div class="col-lg-6">
              <div class="card p-4 p-md-5 h-100">
                <form>
                  <div class="mb-3">
                    <label class="form-label" for="contact-name">
                      Name
                    </label>
                    <input
                      class="form-control"
                      id="contact-name"
                      placeholder="Your Name"
                      type="text"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label" for="contact-email">
                      Email address
                    </label>
                    <input
                      class="form-control"
                      id="contact-email"
                      placeholder="you@example.com"
                      type="email"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label" for="contact-subject">
                      Subject
                    </label>
                    <input
                      class="form-control"
                      id="contact-subject"
                      placeholder="How can we help?"
                      type="text"
                    />
                  </div>
                  <div class="mb-4">
                    <label class="form-label" for="contact-message">
                      Message
                    </label>
                    <textarea
                      class="form-control"
                      id="contact-message"
                      placeholder="Your message..."
                      rows="4"
                    ></textarea>
                  </div>
                  <div class="d-flex gap-2">
                    <button class="btn btn-primary px-4" type="submit">
                      Submit
                    </button>
                    <button class="btn btn-outline-secondary px-4" type="reset">
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="d-flex flex-column h-100">
                <div class="card p-4 mb-4">
                  <h3 class="h5 fw-bold mb-3">Contact Information</h3>
                  <p class="text-muted d-flex align-items-center mb-2">
                    <span class="material-symbols-outlined me-2 text-primary">
                      email
                    </span>
                    contact@reuniteme.org
                  </p>
                  <p class="text-muted d-flex align-items-center mb-2">
                    <span class="material-symbols-outlined me-2 text-primary">
                      phone
                    </span>
                    +1 (555) 123-4567
                  </p>
                  <p class="text-muted d-flex align-items-center mb-0">
                    <span class="material-symbols-outlined me-2 text-primary">
                      location_on
                    </span>
                    123 Hope Avenue, Unity City, 12345
                  </p>
                </div>
                <div class="map-container flex-grow-1">
                  <iframe
                    allowfullscreen=""
                    height="100%"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.610225131481!2d-73.98784408459423!3d40.74844047932801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9a99b2b51%3A0x6b5c2a12b0e68f3!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1684344488888!5m2!1sen!2sus"
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
                <button className="btn btn-primary btn-lg px-4">
                  Contribute Now
                </button>
                <button className="btn btn-outline-primary btn-lg px-4">
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
