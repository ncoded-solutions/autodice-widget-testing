import { INVENTORY } from './data/inventory';
import './App.css';

const currency = (value: number) =>
  value.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

const miles = (value: number) => `${value.toLocaleString('en-US')} mi`;

function App() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="logo" href="#top">
            Summit&nbsp;Motors
          </a>
          <nav className="nav">
            <a href="#inventory">Inventory</a>
            <a href="#financing">Financing</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="btn btn-primary" href="#contact">
            Get Pre-Approved
          </a>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="container hero-inner">
          <div>
            <p className="eyebrow">Family owned since 1998</p>
            <h1>Quality used cars, honest prices.</h1>
            <p className="lede">
              Browse our hand-inspected inventory of sedans, SUVs, trucks and EVs. Every vehicle
              comes with a free 100-point inspection and a 7-day exchange guarantee.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#inventory">
                View Inventory
              </a>
              <a className="btn btn-ghost" href="#contact">
                Schedule Test Drive
              </a>
            </div>
          </div>
          <dl className="stats">
            <div>
              <dt>26</dt>
              <dd>Years in business</dd>
            </div>
            <div>
              <dt>4.9★</dt>
              <dd>Average rating</dd>
            </div>
            <div>
              <dt>3,200+</dt>
              <dd>Cars sold</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="inventory" className="section">
        <div className="container">
          <h2>Featured Inventory</h2>
          <p className="section-sub">A few of the vehicles currently on our lot.</p>
          <div className="grid">
            {INVENTORY.map((car) => (
              <article className="card" key={car.id}>
                <div className="card-media">
                  {car.badge && <span className="badge">{car.badge}</span>}
                  <span className="card-media-label">
                    {car.year} {car.make} {car.model}
                  </span>
                </div>
                <div className="card-body">
                  <h3>
                    {car.year} {car.make} {car.model}
                  </h3>
                  <p className="card-trim">{car.trim}</p>
                  <p className="card-price">{currency(car.price)}</p>
                  <ul className="card-specs">
                    <li>{miles(car.mileage)}</li>
                    <li>{car.fuel}</li>
                    <li>{car.transmission}</li>
                    <li>{car.color}</li>
                  </ul>
                  <a className="btn btn-outline" href="#contact">
                    Check Availability
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="financing" className="section section-alt">
        <div className="container financing-inner">
          <div>
            <h2>Financing made simple</h2>
            <p>
              We work with a network of local and national lenders to get you a competitive rate,
              regardless of credit history. Get pre-approved in minutes without affecting your
              credit score.
            </p>
            <a className="btn btn-primary" href="#contact">
              Start Application
            </a>
          </div>
          <ul className="checklist">
            <li>Soft credit check only</li>
            <li>All credit types welcome</li>
            <li>Trade-ins accepted</li>
            <li>Terms up to 72 months</li>
          </ul>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container about-inner">
          <h2>Why buy from Summit Motors?</h2>
          <div className="grid grid-3">
            <div>
              <h3>100-point inspection</h3>
              <p>Every vehicle is inspected bumper to bumper before it hits the lot.</p>
            </div>
            <div>
              <h3>7-day exchange</h3>
              <p>Not the right fit? Swap it for another vehicle within a week, no questions asked.</p>
            </div>
            <div>
              <h3>No hidden fees</h3>
              <p>The price on the tag is the price you pay. Always.</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="site-footer">
        <div className="container footer-inner">
          <div>
            <p className="logo">Summit Motors</p>
            <p>482 Ridgeline Ave, Springfield, IL</p>
            <p>(555) 019-4488 · sales@summitmotors.example</p>
          </div>
          <p className="footer-note">
            This is a demo dealership site used for widget integration testing.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
