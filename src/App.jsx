import { useEffect, useRef, useState } from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import './App.css'

import boseMain from './assets/Bose_QuietComfort-Ultra-Headphones-2nd-Gen_Midnight-Violet_06.webp'
import boseAlt from './assets/Bose_QuietComfort_Ultra_Headphones_2nd_Gen_White_Smoke_05.webp'
import sennheiserMain from './assets/Sennheiser Momentum 4.webp'
import sennheiserAlt from './assets/Sennheiser Momentum 4 2.webp'
import bowersMain from './assets/Bowers & Wilkins PX7 S3.webp'
import bowersAlt from './assets/Bowers & Wilkins PX7 S3 2.webp'
import moreMain from './assets/1More Sonoflow Pro HQ51.webp'
import moreAlt from './assets/1More Sonoflow Pro HQ51 2.webp'
import rodeMain from './assets/Rode NTH-100.webp'
import rodeAlt from './assets/Rode NTH-100 2.webp'

const products = [
  {
    id: 'bose-qc-ultra',
    brand: 'Bose',
    name: 'QuietComfort Ultra Headphones',
    variation: '2nd Gen',
    title: 'Best for Comfort and ANC',
    price: '$429',
    summary:
      'Deep comfort, premium silence, and a beautifully balanced sound profile for long listening sessions.',
    image: boseMain,
    altImage: boseAlt,
    accent: 'violet',
    details: {
      highlight: 'Best for Comfort and ANC',
      description:
        'The Bose QuietComfort Ultra Headphones (2nd Gen) provide top-tier comfort and advanced noise-canceling capabilities. Newer design with premium metal finish and plush earcups makes it especially appealing for travel and extended listening.',
      notes: [
        'Newest generation with a $449 list price but often discounted to about $399 on Amazon and Best Buy.',
        'Premium metal finish and plush earcups deliver an elevated feel and excellent long-session comfort.',
        'A very strong pick for commuters, frequent flyers, and anyone who values quiet isolation over everything else.',
      ],
    },
  },
  {
    id: 'sennheiser-momentum-4',
    brand: 'Sennheiser',
    name: 'Momentum 4',
    variation: 'Audiophile sound',
    title: 'Best for Sound Quality',
    price: '$349',
    summary:
      'A rich, detailed listening experience with clean staging and warmth that feels studio-ready.',
    image: sennheiserMain,
    altImage: sennheiserAlt,
    accent: 'steel',
    details: {
      highlight: 'Best for Sound Quality',
      description:
        'The Sennheiser Momentum 4 is preferred by audiophiles for its professional-level audio fidelity. Its 60-hour battery is roughly double what most rivals offer, giving it a major all-day advantage.',
      notes: [
        'Delivering highly detailed, spacious, and revealing sound for music lovers and critical listeners.',
        'Around 60 hours of battery life makes it ideal for multi-day, all-day use without worrying about charging.',
        'Stronger if you prioritize sound quality and endurance over the absolute strongest ANC performance.',
      ],
    },
  },
  {
    id: 'bowers-px7-s3',
    brand: 'Bowers & Wilkins',
    name: 'PX7 S3',
    variation: 'Slimline design',
    title: 'Best Premium/Design',
    price: '$399',
    summary:
      'Slim, elegant, and dynamic, this pair blends luxe visual design with articulate, immersive sound.',
    image: bowersMain,
    altImage: bowersAlt,
    accent: 'silver',
    details: {
      highlight: 'Best Premium/Design',
      description:
        'The Bowers & Wilkins PX7 S3 offers a slimline design with detailed, dynamic sound. It also brings aptX Lossless support, which is a major upgrade for compatible devices.',
      notes: [
        'Redesigned to be slimmer than the previous generation while maintaining premium build quality.',
        'aptX Lossless support is a key advantage for those with compatible audio sources.',
        'A premium pick for listeners who value design, sound detail, and modern wireless convenience.',
      ],
    },
  },
  {
    id: '1more-sonoflow-pro',
    brand: '1More',
    name: 'Sonoflow Pro HQ51',
    variation: 'Affordable value',
    title: 'Best Budget',
    price: '$179',
    summary:
      'Customizable tuning and a satisfying sound signature that punches above its price point.',
    image: moreMain,
    altImage: moreAlt,
    accent: 'copper',
    details: {
      highlight: 'Best Budget',
      description:
        'The 1More Sonoflow Pro HQ51 delivers customizable, satisfying sound at an affordable price point. It stands out as the value pick thanks to ANC, LDAC hi-res audio, and huge battery life.',
      notes: [
        'One of the best cheap options thanks to ANC and LDAC support for hi-res audio playback.',
        'Huge value for the price, especially for users who want premium features without a flagship budget.',
        'Some reviewers note that ANC can slightly muddy the sound at times, but the price-to-performance ratio is excellent.',
      ],
    },
  },
  {
    id: 'rode-nth-100',
    brand: 'Rode',
    name: 'NTH-100',
    variation: 'Wired option',
    title: 'Best Wired',
    price: '$249',
    summary:
      'Eloquent, revealing, and precise, delivering a classic wired listening experience without compromise.',
    image: rodeMain,
    altImage: rodeAlt,
    accent: 'graphite',
    details: {
      highlight: 'Best Wired',
      description:
        'The Rode NTH-100 is rated as the best overall wired option for its eloquent and revealing sound. It is designed for studio-style listening and creator use rather than active portability.',
      notes: [
        'No battery or Bluetooth, so it is a wired-only option focused on fidelity and purity.',
        'Ideal for podcasters, creators, and listeners who prefer a more classic, accurate sound setup.',
        'The odd one out if you need portability, wireless connection, or active noise reduction.',
      ],
    },
  },
]

function ScrollReveal({ children, delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={visible ? 'reveal visible' : 'reveal'}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function HomePage() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-block">
          <span className="brand-mark">A</span>
          <span className="brand-name">AUDIO SELECT</span>
        </div>

        <nav className="nav">
          <a href="#top-picks">Top picks</a>
          <a href="#compare">Compare</a>
          <a href="#reviews">Reviews</a>
        </nav>
      </header>

      <main>
        <ScrollReveal delay={80}>
          <section className="hero-section" id="top-picks">
            <div className="hero-copy">
              <p className="eyebrow">Best over-ear picks 2026</p>
              <h1>Find your perfect sound companion.</h1>
              <p className="subtitle">
                Premium wireless headphones built for comfort, focus, and immersive audio.
                Explore the best over-ear choices for commuting, listening, and daily focus.
              </p>

              <div className="hero-actions">
                <button type="button" className="primary-btn">
                  Shop picks
                </button>
                <button type="button" className="ghost-btn">
                  Watch review
                </button>
              </div>

              <ul className="highlights">
                <li>ANC performance</li>
                <li>Premium comfort</li>
                <li>Studio-quality sound</li>
              </ul>
            </div>

            <div className="hero-visual">
              <div className="hero-image-wrap">
                <img src={boseMain} alt="Bose QuietComfort Ultra headphones" />
              </div>
              <div className="floating-card">
                <span>Editor’s Pick</span>
                <strong>Bose QC Ultra</strong>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <section className="metrics-panel" id="reviews">
            <div>
              <strong>4.9/5</strong>
              <span>Average rating</span>
            </div>
            <div>
              <strong>5 models</strong>
              <span>Top over-ear options</span>
            </div>
            <div>
              <strong>40 hrs+</strong>
              <span>Battery life</span>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <section className="comparison-section" id="compare">
            <div className="section-head">
              <p className="eyebrow">Best overall headphones</p>
              <h2>Top 5 over-ear picks for every listener.</h2>
            </div>

            <div className="product-grid">
              {products.map((product) => (
                <article key={product.id} className={`product-card ${product.accent}`}>
                  <div className="card-badge">{product.title}</div>
                  <div className="image-stack">
                    <img src={product.image} alt={product.name} className="main-image" />
                    <img src={product.altImage} alt={`${product.name} alternative view`} className="hover-image" />
                  </div>

                  <div className="card-body">
                    <div className="topline">
                      <span className="brand">{product.brand}</span>
                      <span className="price">{product.price}</span>
                    </div>
                    <h3>{product.name}</h3>
                    <p className="variation">{product.variation}</p>
                    <p className="summary">{product.summary}</p>
                    <Link to={`/product/${product.id}`} className="learn-more">
                      View details
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <section className="feature-banner">
            <div className="feature-copy">
              <p className="eyebrow">Why these stand out</p>
              <h2>Choose comfort, clarity, and detail without compromise.</h2>
            </div>

            <div className="feature-list">
              <div>
                <strong>ANC</strong>
                <span>Quiet and focused.</span>
              </div>
              <div>
                <strong>Sound</strong>
                <span>Balanced and immersive.</span>
              </div>
              <div>
                <strong>Design</strong>
                <span>Refined and premium.</span>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>
    </div>
  )
}

function ProductPage() {
  const { slug } = useParams()
  const product = products.find((item) => item.id === slug)

  if (!product) {
    return (
      <div className="detail-shell empty-state">
        <h1>Product not found</h1>
        <Link to="/" className="back-link">Back to homepage</Link>
      </div>
    )
  }

  return (
    <div className="detail-shell">
      <Link to="/" className="back-link">← Back to products</Link>

      <div className="detail-header">
        <div className="detail-image-wrap">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="detail-copy">
          <p className="eyebrow">{product.brand}</p>
          <h1>{product.name}</h1>
          <p className="detail-title">{product.details.highlight}</p>
          <p className="detail-description">{product.details.description}</p>

          <div className="detail-meta">
            <span>{product.price}</span>
            <span>{product.variation}</span>
          </div>

          <button type="button" className="primary-btn">Buy now</button>
        </div>
      </div>

      <div className="detail-notes">
        <h2>Why it stands out</h2>
        <ul>
          {product.details.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:slug" element={<ProductPage />} />
    </Routes>
  )
}

export default App
