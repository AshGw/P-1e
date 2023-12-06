import CopyRight from '@/app/components/homepage/copyright';
import Navbar from '@/app/components/homepage/navbar';

function page() {
  return (
    <>
      <Navbar></Navbar>
      <div className="py-5">
        <div
          className="container mt-5 pt-5"
          style={{ fontSize: '1.2em', fontWeight: '400' }}
        >
          <div className="row mt-3">
            <div className="col-md-4"></div>
            <div className="col-md-4 text-center">
              If you see this, it means that there was an error with your
              authentification process.
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
      <CopyRight></CopyRight>
    </>
  );
}

export default page;
