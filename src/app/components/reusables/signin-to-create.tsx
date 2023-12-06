'use client';

import { signIn } from 'next-auth/react';

function CreatePage() {
  return (
    <>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="px-5 col-md-8 text-center mx-auto">
              <div
                className="text-primary display-4"
                style={{ width: '100%', height: '2rem' }}
              ></div>
              <h1 className="my-3" style={{ fontWeight: '700' }}>
                Sign in to create
              </h1>
              <p className="mb-3">
                We specialize in creating unique AI-generated art based on your
                input. For a personalized experience. Your email and profile
                picture help us tailor the artwork to you.
              </p>
              <button
                className="btn btn-light"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  signIn('google')
                }
              >
                Continue with Google
              </button>
              <p className="mt-2">
                <small>
                  By continuing, you agree to our{' '}
                  <a
                    style={{ color: '#17a2b8' }}
                    href="/legal/terms-of-service"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a
                    style={{ color: '#17a2b8' }}
                    href="/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                  .
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePage;
