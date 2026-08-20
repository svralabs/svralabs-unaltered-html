import React from 'react';
import '../styles/tokens.css';

const colorSwatches = [
  { name: 'Green', hex: '#58CC02' },
  { name: 'Green Hover', hex: '#4BB200' },
  { name: 'Blue', hex: '#1CB0F6' },
  { name: 'Dark Blue', hex: '#100F3E' },
  { name: 'Red', hex: '#FF4B4B' },
  { name: 'Orange', hex: '#FF9600' },
  { name: 'Golden', hex: '#FFC800' },
  { name: 'Footer Green', hex: '#4EC604' },
  { name: 'Gray Text', hex: '#4B4B4B' },
  { name: 'Gray Light', hex: '#777777' },
  { name: 'Nav Text', hex: '#AFAFAF' },
  { name: 'Border', hex: '#E5E5E5' },
];

const typography = [
  { size: '48px', weight: 'Feather Bold', text: 'Display', className: 't-display' },
  { size: '32px', weight: 'Bold 700', text: 'Heading One', className: 't-h1' },
  { size: '28px', weight: 'Feather Bold', text: 'heading two', className: 't-h2' },
  { size: '18px', weight: 'Medium 500', text: 'Body text for paragraphs and descriptions with comfortable reading line-height.', className: 't-body' },
  { size: '14px', weight: 'Bold 700', text: 'Caption Label', className: 't-caption' },
  { size: '12px', weight: 'Semi 600', text: 'Small utility text for metadata and hints', className: 't-small' },
];

const buttonVariants = [
  { label: 'Primary', buttons: [
    { text: 'Get started', className: 'btn btn-primary' },
    { text: 'Small', className: 'btn btn-primary btn-sm' },
    { text: 'Disabled', className: 'btn btn-primary btn-disabled' },
  ]},
  { label: 'Secondary', buttons: [
    { text: 'Learn more', className: 'btn btn-secondary' },
    { text: 'Small', className: 'btn btn-secondary btn-sm' },
    { text: 'Disabled', className: 'btn btn-secondary btn-disabled' },
  ]},
  { label: 'Danger', buttons: [
    { text: 'Delete', className: 'btn btn-danger' },
    { text: 'Remove', className: 'btn btn-danger btn-sm' },
  ]},
  { label: 'Ghost', buttons: [
    { text: 'View all', className: 'btn btn-ghost' },
  ]},
];

const darkButtons = [
  { text: 'Get started', className: 'btn btn-primary' },
  { text: 'Try 1 week free', className: 'btn btn-white' },
];

const cards = [
  {
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaNWoN7UbMH5vMWfrRJyh_fAWPLmGubJRhslUkKVgPIEHk3N4CQXTa_oKG6GpxaDYYz0rd5PnmqqS-s_hOp6gfGoGSZvo9-Q0tH-Hylmz1L27oqkkDQD-IA158PJ1SUmuZDpJ2IOwXdo2j88t6lXjZcCIQ1-v-aMmulxBEOJ9mXkV5YfvUc6q69fbPQFLISADFVZMxXQLeb9Hfieu09HVqJoZut3Dv9phjQQFd7bfUwi64Rc1Zk5CGZA',
    tag: { text: 'New', className: 'tag tag-green' },
    title: 'Spanish for Beginners',
    desc: 'Start your language journey with interactive lessons designed to build fluency.',
    units: '12 Units',
    action: 'Start',
  },
  {
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDH_Lzps6ZgIE6GsXwmHRXCTG5wDle_Qbz-exulamToZSPbyWoHGbRwuynYL9F6NkzTU1oWDv021v__xBFPmZFdz0O2ze9g7W9d5uoEoXvsR0nLZvLmZFHzpWXchhH6agCfze3xSCtisgqAyc4mBiUoIP3wyw0l9Q_VHtvh1eUSMPxAkE1hskWuB-NU0xTWm9OW4fXg3c4sK2E6RfFVjBsFA-x9AcXDoajVbCjue-3u0E3fhmySmA9C4Q',
    tag: { text: 'Popular', className: 'tag tag-blue' },
    title: 'French for Beginners',
    desc: 'Start your language journey with interactive lessons designed to build fluency.',
    units: '12 Units',
    action: 'Start',
  },
];

export default function StyleGuide() {
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-left">
            <img alt="Duolingo" className="nav-logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaL20lh38drA9uY21-dXUi0vJKBlfrPnTNdwlh_nsVWez6iqfFlh6UAx6s6MlUNZYOq7cNRx9wjAvau0kWdO4r2yXSvw_TGnlCvoe6lap5J09LyoICRc6H7VtWTKobh7vf4LoG2kq3URfUr5rEZhUGwe-Iku5QFuJ1LXyfSt37zqVgpw-3pTOXLOSaIX_8ktncvsL9oRKLmKdh5FaGPFiR6WtacIvjsIOiM6zSHQLAwgmTyPKDNhIboQ" />
            <div className="nav-divider"></div>
            <span className="nav-label">Style Guide</span>
          </div>
          <div className="nav-links">
            <a href="#colors">Colors</a>
            <a href="#type">Type</a>
            <a className="active" href="#buttons">Buttons</a>
            <a href="#cards">Cards</a>
            <a href="#components">Components</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <h1>duolingo design</h1>
        <p>A comprehensive visual reference for the Duolingo design system covering colors, typography, button variants, cards, and UI components.</p>
        <div className="hero-btns">
          <button className="btn btn-primary">Get started</button>
          <button className="btn btn-secondary">I already have an account</button>
        </div>
      </header>

      <main className="grid">
        <section className="panel" id="colors">
          <div className="label">Color Palette</div>
          <div className="swatches">
            {colorSwatches.map((swatch, index) => (
              <div className="sw" key={index}>
                <div className="sw-box" style={{ background: swatch.hex }}></div>
                <div className="sw-name">{swatch.name}</div>
                <div className="sw-hex">{swatch.hex}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="panel" id="type">
          <div className="label">Typography</div>
          <div className="type-stack">
            {typography.map((type, index) => (
              <div className="type-row" key={index}>
                <div className="type-meta">
                  <div className="type-size">{type.size}</div>
                  <div className="type-weight">{type.weight}</div>
                </div>
                <div className={type.className}>{type.text}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="panel" id="buttons">
          <div className="label">Button Variants</div>
          <div className="btn-stack">
            {buttonVariants.map((variant, index) => (
              <div className="btn-row" key={index}>
                <span className="btn-row-label">{variant.label}</span>
                {variant.buttons.map((button, btnIndex) => (
                  <button className={button.className} key={btnIndex}>{button.text}</button>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="panel panel-dark">
          <div className="label">Dark Theme Buttons</div>
          <div className="btn-stack">
            <div className="btn-row">
              {darkButtons.map((button, index) => (
                <button className={button.className} key={index}>{button.text}</button>
              ))}
            </div>
            <div className="btn-row">
              {darkButtons.map((button, index) => (
                <button className={`${button.className} btn-sm`} key={index}>{button.text}</button>
              ))}
            </div>
          </div>
        </section>

        <section className="panel" id="cards">
          <div className="label">Cards</div>
          <div className="cards">
            {cards.map((card, index) => (
              <div className="card" key={index}>
                <img alt="" className="card-img" src={card.imgSrc} />
                <div className="card-body">
                  <span className={card.tag.className}>{card.tag.text}</span>
                  <div className="card-title">{card.title}</div>
                  <div className="card-desc">{card.desc}</div>
                </div>
                <div className="card-foot">
                  <span className="foot-left">{card.units}</span>
                  <span className="foot-right">{card.action}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
