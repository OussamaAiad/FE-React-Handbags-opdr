import React from 'react';
import './App.css';
import Buttons from "./components/Buttons";
import Products from "./components/Products";
import Tiles from "./components/Tiles";
import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"
import brand from "./assets/brand.png"
import story from "./assets/our_story.png"

function App() {

  return (
      <>
        <nav>
          <h1>Handbags & Purses</h1>
          <Buttons knopje="button" waarde={false} naam="to the collection"/>
          <Buttons knopje="button" waarde={false} naam="shop all bags"/>
          <Buttons knopje="button" waarde={true} naam="pre-orders"/>
        </nav>
        <main>
          <Products name="Best seller" bag={bag1} description="The handy bag" price="€400,-"/>
          <Products name="Best seller" bag={bag2} description="The stylish bag" price="€250,-"/>
          <Products name="New collection" bag={bag3} description="The simple bag" price="€300,-"/>
          <Products name="Best seller" bag={bag4} description="The handy bag" price="€400,-"/>

        </main>
        <footer>
          {/*<Tiles  title="THE BRAND" />*/}
          {/*<Tiles  text={<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
          {/*    At culpa delectus dolor eaque,*/}
          {/*    error esse exercitationem inventore quia tenetur voluptas.</p>}/>*/}
          {/*<Tiles  image={brand}/>*/}

          {/*<Tiles  title="OUR STORY "/>*/}
          {/*<Tiles  text={<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
          {/*    At culpa delectus dolor eaque,*/}
          {/*    error esse exercitationem inventore quia tenetur voluptas.</p>}/>*/}
          {/*<Tiles  image={story}/>*/}




          <section>
            <h2> THE BRAND </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Atque earum eius,
              esse fuga hic illum in ipsam nesciunt pariatur provident. </p>
          </section>
          <section>
            <img src={story}/>
          </section>
          <section>
            <h2> OUR STORY </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores assumenda deleniti
              distinctio dolore ducimus iusto labore laborum minus quis unde. </p>
          </section>
          <section>
            <img src={brand}/>
          </section>
        </footer>
      </>
  );
}

export default App;



