'use client';

import Navbar from '@/app/components/homepage/navbar';
import InviteSec from '@/app/components/homepage/invitesec';
import Examples from '@/app/components/homepage/examples';
import CopyRight from '@/app/components/homepage/copyright';

function Home() {
  return (
    <div id="stars">
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <InviteSec />
          </div>
          <div className="col-md-4">
            <Examples />
          </div>
        </div>
      </div>
      <CopyRight />
    </div>
  );
}

export default Home;
