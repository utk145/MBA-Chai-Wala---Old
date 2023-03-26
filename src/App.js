// Styles
import './style/App.scss';
import './style/intro.scss';
import './style/section.scss';
import './style/footer.scss';
import './style/others.scss';
import './style/responsiveMediaQuery.scss';

// Components
import IntoBannerVideo from './components/IntoBannerVideo';
import Footer from './components/Footer';
import Section from './components/Section';
import Others from './components/Others';


// Images
import FreshTopicImg from './assets/academy.png';
import StoryImg from './assets/story.png';
import TedTalksImg from './assets/in-the-news.gif';
import FranchiseImg from './assets/franchise.gif';
import MapImg from './assets/locations.png';
import CourseImg from './assets/image2.png';
import AlbumImg from './assets/mba-cares.gif';
import BaratImg from './assets/image1.png';
import ChaiImg from './assets/image3.png';


// Data
import data from './datas/data.json';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';



// Variables 
const yellow = '#fff100', pink = '#ed1e79', red = '#d20120', white = '#fff', brown = '#6d3d0f', text = '"Montserrat", sans-serif', heading = '"Bangers", cursive';



function App() {


  // Destructuring
  const { freshTopic, freshTopic2, tedTalks, franchise, map, courses, album, barat, chaiwala } = data;  /* using destructuring assignment to extract the value of freshTopic from the imported data and assign it to a constant also called freshTopic. This allows you to use the freshTopic value in the current file without having to reference the imported data object every time. */



  const [loading, setLoading] = useState(true);

  const CursorMover = (e) => {
    const cursor = document.querySelector(".cursor");
    // console.log(e);
    cursor.style.top = `${e.pageY - 14}px`;
    cursor.style.left = `${e.pageX - 14}px`;

    const element = e.target;

    if (element.getAttribute("data-cursorpointer")) {
      // console.log("Yes");
      cursor.classList.add("cursorHover");
    } else if (element.getAttribute("data-cursorpointermini")) {
      cursor.classList.add("cursorHoverMini");
    } else {
      cursor.classList.remove("cursorHover");
      cursor.classList.remove("cursorHoverMini");
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", CursorMover);

    setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      window.removeEventListener("mousemove", CursorMover);
    };
  }, []);

  /* Above Code Explanation
  
  This code is a React component that defines a function called CursorMover, which is called whenever the mouse moves on the webpage. The function first selects the HTML element with the class name cursor (which presumably represents a custom cursor for the webpage). It then updates the top and left CSS properties of this element to match the position of the mouse cursor on the webpage.

  The function also checks the data-cursorpointer and data-cursorpointermini attributes of the HTML element that triggered the mousemove event. If the element has the data-cursorpointer attribute, the cursorHover class is added to the cursor element, which presumably changes the appearance of the custom cursor to indicate that the element is clickable. If the element has the data-cursorpointermini attribute, the cursorHoverMini class is added to the cursor element, which presumably changes the appearance of the custom cursor to indicate that the element is hoverable. If the element doesn't have either of these attributes, the cursorHover and cursorHoverMini classes are removed from the cursor element.

  The component also defines a state variable loading using the useState hook, which is initialized to true. It then defines an effect using the useEffect hook, which adds an event listener for the mousemove event when the component mounts. The effect also sets a timeout of 3 seconds, after which the loading state variable is set to false. Finally, the effect returns a cleanup function that removes the mousemove event listener when the component unmounts.
  */
  return (
    <>
      {loading && <Loader />}
      <IntoBannerVideo />


      <Section h3={freshTopic.heading} text={freshTopic.text} btnTxt={freshTopic.btn} imgSrc={FreshTopicImg} hasBtn={true} bgColor={pink} headingColor={yellow} textColor={yellow} btnbgColor={yellow} btnColor={pink} />
      <Section h3={freshTopic2.heading} text={freshTopic2.text} btnTxt={freshTopic2.btn} imgSrc={StoryImg} hasBtn={true} bgColor={pink} headingColor={yellow} textColor={yellow} btnbgColor={yellow} btnColor={pink} />
      <Section h3={tedTalks.heading} text={tedTalks.text} btnTxt={tedTalks.btn} imgSrc={TedTalksImg} hasBtn={true} bgColor={yellow} headingColor={pink} textColor={pink} btnbgColor={pink} btnColor={yellow} />
      <Section h3={franchise.heading} text={franchise.text} btnTxt={franchise.btn} imgSrc={FranchiseImg} hasBtn={true} bgColor={white} headingColor={pink} textColor={brown} btnbgColor={brown} btnColor={yellow} />
      <Section h3={map.heading} text={map.text} btnTxt={map.btn} imgSrc={MapImg} hasBtn={false} bgColor={pink} headingColor={yellow} textColor={yellow} />
      <Section h3={courses.heading} text={courses.text} btnTxt={courses.btn} imgSrc={CourseImg} hasBtn={true} bgColor={yellow} headingColor={pink} textColor={pink} btnbgColor={pink} btnColor={yellow} imgSize={"24%"} />
      <Section h3={album.heading} text={album.text} btnTxt={album.btn} imgSrc={AlbumImg} hasBtn={true} bgColor={white} headingColor={pink} textColor={brown} btnbgColor={brown} btnColor={yellow} />
      <Section h3={barat.heading} text={barat.text} btnTxt={barat.btn} imgSrc={BaratImg} hasBtn={true} bgColor={pink} headingColor={yellow} textColor={yellow} btnbgColor={yellow} btnColor={pink} />
      <Section h3={chaiwala.heading} text={chaiwala.text} btnTxt={chaiwala.btn} imgSrc={ChaiImg} hasBtn={true} bgColor={white} headingColor={pink} textColor={brown} btnbgColor={brown} btnColor={yellow} />


      <Footer />

      <Others />

    </>
  );
}

export default App;
