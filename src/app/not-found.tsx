import SpaceWonder from '@/app/components/reusables/space-wonder';
function Page404() {
  return (
    <>
      <SpaceWonder></SpaceWonder>
      <div className="py-5">
        <div className="container mt-5 pt-5" style={{ fontSize: '2.2em' }}>
          <div className="row mt-3 pt-5">
            <div className="col-md-4"></div>
            <div className="col-md-4 text-center">404 | Page not found.</div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page404;
