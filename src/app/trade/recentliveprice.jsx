import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const recentliveprice = () => {
  const responsive = {
    superLargeDesktop: {
      // The naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1000, min: 600 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 600, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="recentliveprice">
      <div>
        <span className="favicon">
          <FontAwesomeIcon icon={faStar} />
        </span>
      </div>
      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000} className='rc-flex livefav'>
        <div className="item">
          <Link className="rcpricet" href="/">BTCETH <span className="t-red">-0.90%</span> 43756</Link>
        </div>
        <div className="item">
          <Link className="rcpricet" href="/">TRXETH <span className="t-green">+0.90%</span> 43756</Link>
        </div>
        <div className="item">
          <Link className="rcpricet" href="/">XRPETH <span className="t-red">-0.90%</span> 43756</Link>
        </div>
        <div className="item">
          <Link className="rcpricet" href="/">BNBETH <span className="t-green">+0.90%</span> 43756</Link>
        </div>
      </Carousel>
    </div>
  );
};

export default recentliveprice;
