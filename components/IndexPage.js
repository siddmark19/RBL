import Link from 'next/link';
export default function IndexPage() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link href="/home" passHref legacyBehavior>
              <a className="navbar-brand">Heart Disease Prediction</a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link href="/predict" passHref legacyBehavior>
                    <a className="nav-link">Predict</a>
                  </Link>
                </li>
                <li className="nav-item">
                <Link href="/view" passHref legacyBehavior>
                    <a className="nav-link">View</a>
                </Link>
                </li>
                <li className="nav-item">
                  <Link href="/" passHref legacyBehavior>
                    <a className="btn btn-primary">Logout</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Rest of your page content */}
      </div>
    );
};
  