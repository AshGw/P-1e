import Loading from '../reusables/loading';
import './styles/InviteSec.scss';

export default function InviteSec() {
  const Black = { backgroundColor: 'black', border: 0 };

  return (
    <div className="py-5" id="invite-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="list-group">
              <a
                href="#"
                className="list-group-item list-group-item-action flex-column align-items-start active"
                style={Black}
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">BE YOUR OWN ARTIST</h5>
                  <small>
                    <Loading></Loading>
                  </small>
                </div>
                <p className="mb-1">
                  Create unique AI-generated images with precision by providing
                  a single word as prompt. Our advanced process uses
                  refined&nbsp; techniques guaranteeing your prompts are
                  meticulously tuned for exceptional output every time.
                </p>
              </a>
              <a className="btn btn-light" href="/dashboard">
                START FOR FREE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
