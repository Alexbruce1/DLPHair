import React from 'react';
import './Home.css';
import star from '../../images/star.svg';
import dev1 from '../../images/dev1.jpg';
import dlpWood from '../../images/dlp-wood.jpg';
import dev from '../../images/dev.jpg';
import mag1 from '../../images/mag1.png';
import mag2 from '../../images/mag2.png';
import mag3 from '../../images/mag3.png';
import mag4 from '../../images/mag4.png';
import mag5 from '../../images/mag5.png';
import mag6 from '../../images/mag6.png';
import mag7 from '../../images/mag7.png';
import mag8 from '../../images/mag8.png';

const Home = () => {
  return(
    <div className='home-main'>
      <div className='bottom-blur'></div>
      {/* <h1 className='home-name'>Devyne Petersen</h1> */}
      <div className='home-image-container'>
        <img 
          alt=''
          className='home-main-image'
          src={dev1}
        />
        <img
          alt=''
          className='home-main-image'
          src={dlpWood}
        />
        <img
          alt=''
          className='home-main-image'
          src={dev}
        />
      </div>
      <div className='review-container'>
        <h2>Reviews</h2>
        <div className='inner-review-container'>
          <div className='review'>
            <img src={star} alt='' className='star-img' />
            <img src={star} alt='' className='star-img' />
            <img src={star} alt='' className='star-img' />
            <img src={star} alt='' className='star-img' />
            <img src={star} alt='' className='star-img' />
            <p className='review-text'>
              Shout out to Devyne for doing a great job! I absolutely love my hair and she encouraged me to try balayage and now I’m obsessed! Thank you so much Devyne. I have been going to this studio for 1.5 years now and it’s my absolute favorite place.
          </p>
          </div>

          <div className='review'>
            <img src={star} alt='' className='star-img' />
            <img src={star} alt='' className='star-img' />
            <img src={star} alt='' className='star-img' />
            <img src={star} alt='' className='star-img' />
            <img src={star} alt='' className='star-img' />
            <p className='review-text'>
              In life I’m a loyal person... except when it comes to hairstylists. I moved to Denver a few years ago and haven’t settled on one just yet, until now!
            <br />
              Devyne is awesome and super creative. She will give you what you want or let her do her thing and you’ll love it. I’ve loved every cut and color I had by her and the salon is great. Super clean and friendly.
            <br />
              I always leave here feeling great!
          </p>
          </div>

          <div className='review'>
            <img src={star} alt='' className='star-img' />
            <img src={star} alt='' className='star-img' />
            <img src={star} alt='' className='star-img' />
            <img src={star} alt='' className='star-img' />
            <img src={star} alt='' className='star-img' />
            <p className='review-text'>
              I found Devyne a few years ago after moving to the area. She was at a different salon then. When she told me she was leaving, I never hesitated following her! She has the best personality and I love how she does my hair every time! Allure just has a cool vibe to it and everyone is very friendly and welcoming! Love this place.
          </p>
          </div>
        </div>
      </div>
      <div className='publications'>
        <h2 className='publications-title'>Publications</h2>
        <div className='publication-image-container'>
          <a href='http://www.magcloud.com/browse/issue/1483131'>
            <img alt='' className='publication-image' src={mag1} />
          </a>
          <a href='http://www.magcloud.com/browse/issue/1508216'>
            <img alt='' className='publication-image' src={mag2} />
          </a>
          <a href='http://www.magcloud.com/browse/issue/1508076'>
            <img alt='' className='publication-image' src={mag3} />
          </a>
          <a href='http://www.magcloud.com/browse/issue/1481577'>
            <img alt='' className='publication-image' src={mag4} />
          </a>
          <a href='http://www.magcloud.com/browse/issue/1478718'>
            <img alt='' className='publication-image' src={mag5} />
          </a>
          <a href='http://www.magcloud.com/browse/issue/1443608'>
            <img alt='' className='publication-image' src={mag6} />
          </a>
          <a href='http://www.magcloud.com/browse/issue/1482641'>
            <img alt='' className='publication-image' src={mag7} />
          </a>
          <a href='http://www.magcloud.com/browse/issue/1477163'>
            <img alt='' className='publication-image' src={mag8} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;