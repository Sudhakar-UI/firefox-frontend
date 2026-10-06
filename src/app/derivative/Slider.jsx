// import Slider from 'bootstrap-slider';
import React from 'react';
import { useEffect} from 'react';
import '../../../public/assets/css/bootstrap-slider.css';
import '../../../public/assets/js/bootstrap-slider';
// import '../../../../public/assets/css/bootstrap-slider.css';
// import '../../../../public/assets/js/bootstrap-slider.js';
import $ from 'jquery';


function Slider() {
  useEffect(() => {
    $(".rangeslider").slider({
          min: 0,
          max: 400,
          step: 5, 
          ticks: [0, 25, 50, 75, 100],
          ticks_labels: ["1x", "25x", "50x", "75x", "100x"],
          ticks_positions: [1, 25, 50, 75, 100], // Adjusted for better spacing
          ticks_snap_bounds: 1,
          tooltip: 'hide'
         });
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