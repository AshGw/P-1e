function CopyRight() {
  return (
    <div className="py-3">
      <div className="container ">
        <div className="row ">
          <div className="col-md-12 text-center d-md-flex justify-content-between align-items-center">
            <ul className="nav d-flex justify-content-center ">
              <li className="nav-item">
                {' '}
                <a className="nav-link" href="/faq">
                  FAQ
                </a>{' '}
              </li>
              <li className="nav-item">
                {' '}
                <a className="nav-link" href="/legal/privacy-policy">
                  Privacy
                </a>{' '}
              </li>
              <li className="nav-item">
                {' '}
                <a className="nav-link" href="/legal/terms-of-service">
                  Terms
                </a>{' '}
              </li>
              <li className="nav-item">
                {' '}
                <a className="nav-link" href="/contact">
                  Contact
                </a>{' '}
              </li>
            </ul>
            <p className="mb-0 py-1" style={{ color: '#939ca4' }}>
              © 2023 Rovxr LLC. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CopyRight;
