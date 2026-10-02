import { INVENTORY } from './data/inventory';
import { STRINGS, localeFromPath } from './i18n';
import './App.css';

// Read once: switching language is a full page load, as on most dealer sites.
const locale = localeFromPath(window.location.pathname);
const t = STRINGS[locale];

const currency = (value: number) =>
  value.toLocaleString(t.numberLocale, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

const miles = (value: number) => `${value.toLocaleString(t.numberLocale)} mi`;

const term = (value: string) => t.terms[value] ?? value;

function App() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="logo" href="#top">
            Summit&nbsp;Motors
          </a>
          <nav className="nav">
            <a href="#inventory">{t.nav.inventory}</a>
            <a href="#financing">{t.nav.financing}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>
          <div className="header-actions">
            <a className="lang-switch" href={t.switchTo.href} hrefLang={t.switchTo.lang} lang={t.switchTo.lang}>
              {t.switchTo.label}
            </a>
            <a className="btn btn-primary" href="#contact">
              {t.getPreApproved}
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="container hero-inner">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.heroTitle}</h1>
            <p className="lede">{t.heroLede}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#inventory">
                {t.viewInventory}
              </a>
              <a className="btn btn-ghost" href="#contact">
                {t.scheduleTestDrive}
              </a>
            </div>
          </div>
          <dl className="stats">
            {t.stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="inventory" className="section">
        <div className="container">
          <h2>{t.featuredTitle}</h2>
          <p className="section-sub">{t.featuredSub}</p>
          <div className="grid">
            {INVENTORY.map((car) => (
              <article className="card" key={car.id}>
                <div className="card-media">
                  {car.badge && <span className="badge">{term(car.badge)}</span>}
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
                    <li>{term(car.fuel)}</li>
                    <li>{term(car.transmission)}</li>
                    <li>{car.color}</li>
                  </ul>
                  <a className="btn btn-outline" href="#contact">
                    {t.checkAvailability}
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
            <h2>{t.financingTitle}</h2>
            <p>{t.financingBody}</p>
            <a className="btn btn-primary" href="#contact">
              {t.startApplication}
            </a>
          </div>
          <ul className="checklist">
            {t.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container about-inner">
          <h2>{t.whyTitle}</h2>
          <div className="grid grid-3">
            {t.reasons.map((reason) => (
              <div key={reason.title}>
                <h3>{reason.title}</h3>
                <p>{reason.body}</p>
              </div>
            ))}
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
          <p className="footer-note">{t.footerNote}</p>
        </div>
      </footer>
    </>
  );
}

export default App;
