'use client';

import React, { useEffect } from 'react';
import '../../../public/assets/css/bootstrap-slider.css';
import '../../../public/assets/js/bootstrap-slider.js';
import $ from 'jquery';

function Slider() {
  useEffect(() => {
    const $slider = $(".rangeslider"); // ✅ define the $slider variable

    $slider.slider({
      ticks: [0, 25, 50, 75, 100],
      ticks_labels: ['0x', '25x', '50x', '75x', '100x'],
      ticks_snap_bounds: 1,
      value: 0,
      tooltip: 'hide'
    });

    // Fix tick label width issue
    setTimeout(() => {
      $slider.slider('relayout'); // ✅ now it will work
    }, 200);
  }, []);

  return (
    <div>
      <div className="form-group rangesliderbox">
        <input type="text" className="rangeslider" />
      </div>
    </div>
  );
}

export default Slider;
