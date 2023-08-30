import {Hero, Services,SuperQuality,PopularProducts,CustomerReviews, SpecialOffer, Footer, Subscribe} from "./sections"
import Navbar from "./components/Navbar";
const App = () =>(
  <main className="relative">
    <Navbar/>
    <section className="xl:padding-l wide:padding-r padding-p ">
     <Hero/>
    </section>
     <section className="padding">
      <PopularProducts/>
     </section>
     <section className="padding">
      <SuperQuality/>
     </section>
     <section className="padding-x py-10">
      <Services/>
     </section>
     <section className="padding">
      <SpecialOffer/>
     </section>
     <section className="bg-pale-blue padding">
      <CustomerReviews/>
     </section>
     <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
     </section>
     <section className="bg-black padding-x padding-t py-8">
      <Footer/>
     </section>

  </main>
);

export default App;
