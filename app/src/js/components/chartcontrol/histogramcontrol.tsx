import React, { useState, useEffect, useRef } from 'react';

import SeriesSelect from '../seriesselect'; // can't destructure for some reason
import { getSeries } from '../sqlload';
import { Histogram } from '../charts/histogram';

import { getBBSize } from '../plotdimensions';
import { ViewWrapper } from '../viewwrapper';
import { ControlsWrapper } from '../controlswrapper';
import { ControlsContent } from '../controlscontent';
import { BinControl } from '../bincontrol';
import { CopySave } from '../copysave';

const HistogramControl = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [series, setSeries] = useState([]);
  const [minRange, setMinRange] = useState(0);
  const [maxRange, setMaxRange] = useState(0);
  const [minData, setMinData] = useState(0);
  const [maxData, setMaxData] = useState(1);
  const [numBins, setNumBins] = useState(20);
  const [plotdims, setPlotdims] = useState({ width: 50, height: 50 });
  const plotContainer = useRef(null);

  useEffect(() => {
    function handleResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(
        () => setPlotdims(getBBSize(plotContainer)),
        250
      );
    }
    let resizeTimer;
    window.addEventListener('resize', handleResize);
    setPlotdims(getBBSize(plotContainer));
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSeriesSelect = (e, v) => {
    setIsLoading(true);

    getSeries(props.seriesLookupObj[v], props.units).then(d => {
      setSeries(d);
      const getMaxMin = series => {
        const valkey = props.units == 'ip' ? 'value_ip' : 'value_si';
        let min = Math.min(...series.map(d => d[valkey]));
        let max = Math.max(...series.map(d => d[valkey]));
        return [min, max];
      };
      let [min, max] = getMaxMin(d);
      setMinRange(min);
      setMaxRange(max);
      setMinData(min);
      setMaxData(max);
      setIsLoading(false);
    });
  };

  let numbins = 10;

  const handleRangeChange = v => {
    setMinRange(v[0]);
    setMaxRange(v[1]);
  };

  const handleNumBinChange = v => {
    setNumBins(v);
  };

  return (
    <>
      <ViewWrapper plotContainer={plotContainer} isLoading={isLoading}>
        <Histogram
          files={props.files}
          plotdims={plotdims}
          series={series}
          units={props.units}
          binmin={minRange}
          binmax={maxRange}
          numbins={numBins}
        ></Histogram>
      </ViewWrapper>

      <ControlsWrapper>
        <ControlsContent tag="tab-series" tabname="Series Select">
          <SeriesSelect
            seriesCallback={handleSeriesSelect}
            series={props.seriesOptions}
          />
        </ControlsContent>
        <ControlsContent tag="tab-options" tabname="Options">
          <BinControl
            rangeCallback={handleRangeChange}
            binCallback={handleNumBinChange}
            defaultRange={[minData, maxData]}
            numBins={numBins}
          ></BinControl>
        </ControlsContent>

        <ControlsContent tag="tab-export" tabname="Export">
          <CopySave
            array={series}
            arraytype="single"
            units={props.units}
            files={props.files}
          ></CopySave>
        </ControlsContent>
      </ControlsWrapper>
    </>
  );
};

export { HistogramControl };
