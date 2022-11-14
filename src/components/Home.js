import '../styles/home.scss';

export default function Home() {
  return (
    <main className="home">
      <div className="hero">
        <div className="hero-text">
          <p className="big-text">So, you want to travel to </p>
          <h1>Space</h1>
          <p className="text">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>

        <button className="main-button">Explore</button>
      </div>
    </main>
  );
}
