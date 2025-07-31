import React, { useState, useEffect } from 'react';
import './Style/home.css';

function Home() {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/news/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Backenddan xatolik yuz berdi');
        }
        return response.json();
      })
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch xatosi:', err);
        setError('Backenddan xatolik yuz berdi');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Yuklanmoqda...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }



  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header">
        <div className="header-left">
          <div className="logo">Logo</div>
        </div>
        <nav className="header-nav">
          <ul>
            <li><a href="#about">O kompaniya</a></li>
            <li><a href="#portfolio">Portofolio</a></li>
            <li><a href="#services">Uslugi</a></li>
            <li><a href="#contact">Kontakts</a></li>
          </ul>
        </nav>
        <div className="header-right">
          <div className="contact-info">
            <span className="icon">☀️</span>
            <span>+998 90 777-77-77</span>
            <span>chotatam@gmail.com</span>
          </div>
          <button className="call-button">Zakazat zvonok</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Biz veb-saytlar, ilovalarni ishlab chiqamiz</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <button className="portfolio-button">Portofolio</button>
        </div>
        <div className="hero-image-placeholder">
          <img src="/placeholder.svg?height=400&width=400" alt="Hero graphic" />
        </div>
      </section>

      {/* About Company Section */}
      <section className="about-company-section" id="about">
        <h2>Kompaniya haqida</h2>
        <div className="about-content">
          <p>Agentlik-bu mijozlarga o'z bizneslari uchun sifatli va innovatsion echimlarni taqdim etish maqsadida tashkil etilgan veb-agentlik. Bizning jamoamiz mijozlarga moslashtirilgan va sifatli mahsulotni taklif qilish uchun yaqin hamkorlikda ishlaydigan tajribali veb-dizayn, ishlab chiqish va marketing mutaxassislaridan iborat.</p>
          <p>Biz veb-dizayn, veb-sayt va mobil ilovalarni ishlab chiqish, SEO optimallashtirish, kontent yaratish va reklama kompaniyalarini o'z ichiga olgan keng ko'lamli xizmatlarni taklif etamiz. Biz eng yangi texnologiyalar va innovatsion usullardan foydalangan holda brendni rivojlantirish va sotishni ko'paytirish bilan shug'ullanamiz.</p>
        </div>
        <div className="stats-grid">
          <div className="stat-item">
            <h3>20+</h3>
            <p>Proektov zapustil</p>
          </div>
          <div className="stat-item">
            <h3>4 года</h3>
            <p>Opita razrabotki</p>
          </div>
          <div className="stat-item">
            <h3>12+</h3>
            <p>Professionalov</p>
          </div>
          <div className="stat-item">
            <h3>4 года</h3>
            <p>Opita razrabotki</p>
          </div>
        </div>
      </section>

      {/* Our Advantages Section */}
      <section className="advantages-section">
        <h2>Bizning afzalliklarimiz</h2>
        <div className="advantages-grid">
          <div className="advantage-card">
            <div className="icon-wrapper">💡</div>
            <h3>Individual yondashuv</h3>
            <p>Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz.</p>
          </div>
          <div className="advantage-card">
            <div className="icon-wrapper">📈</div>
            <h3>Ekspertiza</h3>
            <p>Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz.</p>
          </div>
          <div className="advantage-card">
            <div className="icon-wrapper">🚀</div>
            <h3>Professional xizmat</h3>
            <p>Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz.</p>
          </div>
          <div className="advantage-card">
            <div className="icon-wrapper">🤝</div>
            <h3>Hamkorlik</h3>
            <p>Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz.</p>
          </div>
        </div>
      </section>

      {/* Completed Projects Section */}
      <section className="projects-section" id="portfolio">
        <h2>Bajargan loyihalarimiz</h2>
        <div className="project-filters">
          <button className="filter-button active">Barchasi</button>
          <button className="filter-button">Veb sayt</button>
          <button className="filter-button">Veb dizayn</button>
          <button className="filter-button">SMM</button>
          <button className="filter-button">Mobil ilova</button>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <img src="/placeholder.svg?height=200&width=200" alt="Project 1" />
            <div className="project-tag">Mobil ilova</div>
            <p>UYMAKON mobil ilovasi</p>
          </div>
          <div className="project-card">
            <img src="/placeholder.svg?height=200&width=200" alt="Project 2" />
            <div className="project-tag">Veb sayt</div>
            <p>Veb sayt loyihasi</p>
          </div>
          <div className="project-card">
            <img src="/placeholder.svg?height=200&width=200" alt="Project 3" />
            <div className="project-tag">SMM</div>
            <p>SMM kampaniyasi</p>
          </div>
          <div className="project-card">
            <img src="/placeholder.svg?height=200&width=200" alt="Project 4" />
            <div className="project-tag">Veb dizayn</div>
            <p>Veb dizayn loyihasi</p>
          </div>
          <div className="project-card">
            <img src="/placeholder.svg?height=200&width=200" alt="Project 5" />
            <div className="project-tag">Mobil ilova</div>
            <p>Mobil ilova 2</p>
          </div>
          <div className="project-card">
            <img src="/placeholder.svg?height=200&width=200" alt="Project 6" />
            <div className="project-tag">SMM</div>
            <p>Raqamli marketing</p>
          </div>
        </div>
        <div className="carousel-nav">
          <button className="nav-arrow left-arrow">{'<'}</button>
          <button className="nav-arrow right-arrow">{'>'}</button>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="services-section" id="services">
        <h2>Bizning xizmatlar</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="icon-wrapper">🌐</div>
            <h3>Veb saytlar</h3>
            <p>Bizdan eng yaxshi va eng zo'r sifatga ega platforma yarating.</p>
          </div>
          <div className="service-card">
            <div className="icon-wrapper">🎨</div>
            <h3>UI/UX Dizayn</h3>
            <p>Biz UI/UX dizayn xizmatlarini taqdim etamiz.</p>
          </div>
          <div className="service-card">
            <div className="icon-wrapper">📱</div>
            <h3>Mobil ilovalar</h3>
            <p>Biz eng yaxshi dizaynerlar xizmatlarini taqdim etamiz.</p>
          </div>
          <div className="service-card">
            <div className="icon-wrapper">📈</div>
            <h3>SMM</h3>
            <p>Bizdan eng yaxshi va eng zo'r sifatga ega platforma yarating.</p>
          </div>
          <div className="service-card">
            <div className="icon-wrapper">📸</div>
            <h3>Grafik dizayn</h3>
            <p>Biz fotografiya xizmatlarini taqdim etamiz.</p>
          </div>
          <div className="service-card">
            <div className="icon-wrapper">🎬</div>
            <h3>Motion dizayn</h3>
            <p>Bizdan eng yaxshi va eng zo'r sifatga ega platforma yarating.</p>
          </div>
        </div>
      </section>

      <section className="blog-section">
  <h2>Blog yangiliklarimiz</h2>
  <div className="blog-grid">
    {project.length > 0 ? (
      project.map((item) => (
        <div className="blog-card" key={item.id}>
          <img
            src={item.image || "/placeholder.svg?height=200&width=300"}
            alt={item.title}
          />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <div className="blog-meta">
            <span>{item.category || "#yangilik"}</span>
            <span>📅 {item.time || "00:00"}</span>
            <span>{item.date || "00/00/00"}</span>
          </div>
        </div>
      ))
    ) : (
      <p>Yangiliklar mavjud emas.</p>
    )}
  </div>
  <div className="carousel-nav">
    <button className="nav-arrow left-arrow">{'<'}</button>
    <button className="nav-arrow right-arrow">{'>'}</button>
  </div>
</section>

      {/* Our Team Section */}
      <section className="team-section">
        <h2>Bizning jamoa</h2>
        <div className="team-grid">
          <div className="team-member-card">
            <img src="/placeholder.svg?height=150&width=150" alt="Team member 1" />
            <h3>Saidalixon Sobirov</h3>
            <p>Frontend dasturchi</p>
          </div>
          <div className="team-member-card">
            <img src="/placeholder.svg?height=150&width=150" alt="Team member 2" />
            <h3>Saidalixon Sobirov</h3>
            <p>SMM designer</p>
          </div>
          <div className="team-member-card">
            <img src="/placeholder.svg?height=150&width=150" alt="Team member 3" />
            <h3>Saidalixon Sobirov</h3>
            <p>Project Manager</p>
          </div>
          <div className="team-member-card">
            <img src="/placeholder.svg?height=150&width=150" alt="Team member 4" />
            <h3>Saidalixon Sobirov</h3>
            <p>UX/UI web designer</p>
          </div>
        </div>
        <div className="carousel-nav">
          <button className="nav-arrow left-arrow">{'<'}</button>
          <button className="nav-arrow right-arrow">{'>'}</button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section" id="contact">
        <div className="contact-form-content">
          <h2>Sizni bir finjon qahva ustida loyihangizni batafsil muhokama qilishga mamnuniyat ila taklif qilamiz.</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Ismingiz</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefon raqamingiz</label>
              <input type="text" id="phone" name="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="message">G'oyangiz haqida qisqacha (Muhim emas)</label>
              <textarea id="message" name="message"></textarea>
            </div>

            <h3>Qanday xizmatlardan foydalanishni xoxlaysiz?</h3>
            <div className="checkbox-grid">
              <label><input type="checkbox" name="service" value="backend" /> Backend</label>
              <label><input type="checkbox" name="service" value="frontend" /> Frontend</label>
              <label><input type="checkbox" name="service" value="crm" /> CRM ishlab chiqish</label>
              <label><input type="checkbox" name="service" value="graphic-design" /> Grafik dizayn</label>
              <label><input type="checkbox" name="service" value="internet-shop" /> Internet magazin ishlab chiqish</label>
              <label><input type="checkbox" name="service" value="motion-design" /> Motion dizayn</label>
              <label><input type="checkbox" name="service" value="logotype-brandbook" /> Logotip va Brandbook</label>
              <label><input type="checkbox" name="service" value="mobile-app" /> Mobil ilova ishlab chiqish</label>
              <label><input type="checkbox" name="service" value="portal" /> Portal ishlab chiqish</label>
              <label><input type="checkbox" name="service" value="web-site" /> Veb sayt ishlab chiqish</label>
              <label><input type="checkbox" name="service" value="web-design" /> Veb dizayn</label>
              <label><input type="checkbox" name="service" value="smm-design" /> SMM dizayn</label>
              <label><input type="checkbox" name="service" value="mobilograf" /> Mobilograf</label>
            </div>

            <h3>NIMANI MA'QUL KO'RASIZ?</h3>
            <div className="radio-grid">
              <label className="radio-option">
                <input type="radio" name="drink" value="black-coffee" />
                <img src="/placeholder.svg?height=100&width=100" alt="Achchiq kofe" />
                <span>Achchiq kofe</span>
              </label>
              <label className="radio-option">
                <input type="radio" name="drink" value="milk-coffee" />
                <img src="/placeholder.svg?height=100&width=100" alt="Sutli kofe" />
                <span>Sutli kofe</span>
              </label>
              <label className="radio-option">
                <input type="radio" name="drink" value="water" />
                <img src="/placeholder.svg?height=100&width=100" alt="Suv" />
                <span>Suv</span>
              </label>
              <label className="radio-option">
                <input type="radio" name="drink" value="tea" />
                <img src="/placeholder.svg?height=100&width=100" alt="Choy" />
                <span>Choy</span>
              </label>
            </div>

            <button type="submit" className="submit-button">Mijoz bo'lish</button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-left">
          <div className="logo">LOGO</div>
        </div>
        <div className="footer-center">
          <p>Manzil: Toshkent shahri, Sergeli tumani, Navro'z ko'cha 3-uy.</p>
          <p>Mo'ljal: "ASIA AUTO" avtosalon ichki qismi</p>
        </div>
        <div className="footer-right">
          <div className="contact-numbers">
            <span>📞 +998 99 999 99 99</span>
            <span>📞 +998 99 999 99 99</span>
          </div>
          <div className="social-icons">
            <span>✈️</span>
            <span>📘</span>
            <span>📸</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;