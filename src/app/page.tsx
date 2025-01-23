import HeaderAnnouncement from '@/pages/header-announcement';
import Header from '@/app/header';
import Card from '@/pages/card';
// import LandingContent from '@/pages/landing-content';
import Footer from '@/app/footer';

export default function Home() {

  return (
    <div>
      <HeaderAnnouncement />
      {/* <br></br> */}
      <Header />
      <Card />
      {/* <LandingContent /> */}
      <Footer />

    </div>
  );
}
