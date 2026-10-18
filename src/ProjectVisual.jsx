// Abstract, CSS-only UI mockups so each project card has a visual
// without needing screenshots. Colours come from the card's --accent.

function Browser({ children, label }) {
  return (
    <div className="pv-window">
      <div className="pv-bar">
        <i />
        <i />
        <i />
        <span className="pv-url">{label}</span>
      </div>
      <div className="pv-screen">{children}</div>
    </div>
  );
}

function Lines({ count = 2 }) {
  return (
    <div className="pv-lines">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} />
      ))}
    </div>
  );
}

const variants = {
  mealji: () => (
    <Browser label="mealji · order">
      <div className="pv-hero-strip">
        <span className="pv-pill" />
        <Lines />
      </div>
      <div className="pv-cards pv-cards-3">
        {["🍛", "🥘", "🍜"].map((e) => (
          <div key={e} className="pv-food">
            <span className="pv-emoji">{e}</span>
            <Lines />
          </div>
        ))}
      </div>
    </Browser>
  ),
  erp: () => (
    <Browser label="erp · dashboard">
      <div className="pv-dash">
        <div className="pv-side">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i === 1 ? "on" : ""} />
          ))}
        </div>
        <div className="pv-main">
          <div className="pv-kpis">
            <span />
            <span />
            <span />
          </div>
          <div className="pv-chart">
            {[40, 65, 50, 80, 58, 92, 70].map((h, i) => (
              <span key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    </Browser>
  ),
  "khush-studios": () => (
    <Browser label="khush studios">
      <div className="pv-editorial">
        <div className="pv-big" />
        <div className="pv-stack">
          <div className="pv-tile" />
          <div className="pv-tile alt" />
        </div>
      </div>
    </Browser>
  ),
  khush: () => (
    <Browser label="khushpehno.com">
      <div className="pv-cards pv-cards-4">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="pv-product">
            <div className="pv-img" />
            <Lines count={1} />
          </div>
        ))}
      </div>
    </Browser>
  ),
  "khush-admin": () => (
    <Browser label="admin.khushpehno.com">
      <div className="pv-table">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="pv-row">
            <span />
            <span />
            <span className="pv-badge" />
          </div>
        ))}
      </div>
    </Browser>
  ),
  vibgyor: () => (
    <Browser label="vibgyor.love">
      <div className="pv-chat">
        <span className="pv-bubble" />
        <span className="pv-bubble me" />
        <span className="pv-bubble short" />
        <span className="pv-bubble me short" />
      </div>
    </Browser>
  ),
};

export default function ProjectVisual({ id }) {
  const Variant = variants[id];
  return (
    <div className="pv" aria-hidden="true">
      {Variant ? <Variant /> : <Browser label={id} />}
    </div>
  );
}
