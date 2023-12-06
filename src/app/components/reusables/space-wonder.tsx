import './styles/SpaceWonder.scss';
import Navbar from '@/app/components/homepage/navbar';

export default function SpaceWonder() {
  return (
    <>
      <Navbar
        showMidPage={false}
        showLeftPage={false}
        showRightPage={false}
      ></Navbar>
      <div className="stars"></div>
    </>
  );
}
