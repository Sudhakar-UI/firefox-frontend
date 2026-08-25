// import Slider from 'bootstrap-slider';
import React, { useEffect, useState } from 'react';
import '../../../public/assets/css/bootstrap-slider.css';
import '../../../public/assets/js/bootstrap-slider.js';
import {Image} from 'react-bootstrap';
import $ from 'jquery';

function Slider() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const $slider = $(".rangeslider").slider({
      min: 0,
      max: 400,
      step: 5,
      ticks: [0, 25, 50, 75, 100],
      ticks_positions: [1, 25, 50, 75, 100],
      ticks_snap_bounds: 1,
      tooltip: 'hide'
    });

    // Update state when slider value changes
    $slider.on('change', (e) => {
      setValue(e.value.newValue);
    });

    return () => {
      $slider.off('change');
    };
  }, []);

  return (
    <div>
      <div className="form-group rangesliderbox">
        <input type="range" className="rangeslider" />
       
      </div>
    </div>
  );
}

export default Slider;
