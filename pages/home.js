import Link from 'next/link';

export default function Home() {
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
      <div className="container mt-4">
        <h1>Welcome to Heart Disease Prediction</h1>
        <h3>Symptoms of Heart Disease</h3>
        <p>
          Common symptoms of heart disease include chest pain or discomfort, shortness of breath,
          fatigue, dizziness, and irregular heartbeat. If you experience any of these symptoms,
          it's important to consult a healthcare professional.
        </p>

        <h3>Prevention of Heart Disease</h3>
        <p>
          Taking steps to prevent heart disease is crucial for maintaining good heart health. Some
          preventive measures include adopting a healthy lifestyle, eating a balanced diet,
          engaging in regular physical activity, managing stress, avoiding tobacco and excessive
          alcohol consumption, and getting regular check-ups.
        </p>

        <h3>Causes of Heart Disease</h3>
        <p>
          Heart disease can have various causes, including high blood pressure, high cholesterol,
          smoking, diabetes, obesity, family history of heart disease, sedentary lifestyle, and
          unhealthy diet. Understanding the risk factors can help in taking necessary precautions
          and making lifestyle changes to reduce the risk of heart disease.
        </p>

        <div className="text-center">
          <Link href="/predict" passHref legacyBehavior>
            <a className="btn btn-primary">Predict Heart Disease</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
