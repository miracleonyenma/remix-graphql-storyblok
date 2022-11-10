// ./app/components/SiteHeader.tsx

const SiteHeader = () => {

  return (
    <header className="site-header">
      <div className="wrapper">
        <div className="logo">
          <h1>My site</h1>
        </div>

        <nav className="site-nav">
          <ul className="links">
            <li className="link">
              <a href="/">
                Home
              </a>
            </li>
            <li className="link">
              <a href="/articles">
                Articles
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader