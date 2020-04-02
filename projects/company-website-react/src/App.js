import React, {Fragment, useState, useEffect} from 'react';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/layers.css';
import './css/navigation.css';
import './css/owl.carousel.min.css';
import './css/responsive.css';
import './css/style.css';

import Header from './components/header';

function App() {
    const [data, setData] = useState([]);

    async function fetchUrl() {
        const response = await fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations");
        const json = await response.json();
        
        function removeDuplicates(originalArray, prop) {
            var newArray = [];
            var lookupObject  = {};
       
            for(var i in originalArray) {
               lookupObject[originalArray[i][prop]] = originalArray[i];
            }
       
            for(i in lookupObject) {
                newArray.push(lookupObject[i]);
            }
             return newArray;
        }
       
        var uniqueArray = removeDuplicates(json.locations, "country");
        console.log(JSON.stringify(uniqueArray));
        console.log(uniqueArray.length);    

        setData(uniqueArray);
      }

    useEffect(() => {
        fetchUrl();
      }, []
    );

  return (
    <Fragment>
        <Header />
        <select>
        {
            data.map(({ id, country}) => (
                <option key={id}>{country}</option>
              ))
        }
        </select>
        <section className="main_slider_area">
                <div id="main_slider" className="rev_slider" data-version="5.3.1.6">
                    <ul>
                        <li data-index="rs-1587" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="default" data-easeout="default" data-masterspeed="300" data-rotate="0"  data-saveperformance="off"  data-title="Creative" data-param1="01" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                            <div className="slider_text_box">
                                <div className="tp-caption tp-resizeme first_text" 
                                data-x="['left','left','left','left','30','center']" 
                                data-hoffset="['0','80','80','0']" 
                                data-y="['top','top','top','top']" 
                                data-voffset="['350','350','350','250','180','180']" 
                                data-fontsize="['50','50','50','42','42','32']"
                                data-lineheight="['62','62','62','52','52','42']"
                                data-width="['none']"
                                data-height="none"
                                data-whitespace="nowrape"
                                data-type="text" 
                                data-responsive_offset="on" 
                                data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;y:[175%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]"
                                data-textalign="['left','left','left','left','left','center']">We help businesses <br />create unique online <br />experiences</div>

                                <div className="tp-caption tp-resizeme single_img" 
                                data-x="['right','right','right','right','right','right']" 
                                data-hoffset="['0','0','0','0']" 
                                data-y="['top','top','top','top']" 
                                data-voffset="['180','180','180','180','0']" 
                                data-fontsize="['65','65','60','40','25']"
                                data-lineheight="['75','75','75','50','35']"
                                data-width="[none]"
                                data-height="none"
                                data-whitespace="normal"
                                data-type="text" 
                                data-responsive_offset="on" 
                                data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;y:[175%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]"
                                data-textalign="['left','left','left','left','left','center']">
                                    <img src="img/home-slider/slider-1.svg" alt="" />
                                </div>
                            </div>
                        </li>
                        <li data-index="rs-1588" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="default" data-easeout="default" data-masterspeed="300" data-rotate="0"  data-saveperformance="off"  data-title="Creative" data-param1="01" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                            <div className="slider_text_box">
                                <div className="tp-caption tp-resizeme first_text" 
                                data-x="['left','left','left','left','30','center']" 
                                data-hoffset="['0','80','80','0']" 
                                data-y="['top','top','top','top']" 
                                data-voffset="['350','350','350','250','180','180']" 
                                data-fontsize="['50','50','50','42','42','32']"
                                data-lineheight="['62','62','62','52','52','42']"
                                data-width="['none']"
                                data-height="none"
                                data-whitespace="nowrape"
                                data-type="text" 
                                data-responsive_offset="on" 
                                data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;y:[175%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]"
                                data-textalign="['left','left','left','left','left','center']">Crafting beautiful <br />brands & engaging <br />websites</div>
                                <div className="tp-caption tp-resizeme single_img" 
                                data-x="['right','right','right','right','right','right']" 
                                data-hoffset="['0','0','0','0']" 
                                data-y="['top','top','top','top']" 
                                data-voffset="['180','180','180','180','0']" 
                                data-fontsize="['65','65','60','40','25']"
                                data-lineheight="['75','75','75','50','35']"
                                data-width="['none']"
                                data-height="none"
                                data-whitespace="normal"
                                data-type="text" 
                                data-responsive_offset="on" 
                                data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;y:[175%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]"
                                data-textalign="['left','left','left','left','left','center']">
                                    <img src="img/home-slider/slider-2.svg" alt="" />
                                </div>
                            </div>
                        </li>
                        <li data-index="rs-1589" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="default" data-easeout="default" data-masterspeed="300" data-rotate="0"  data-saveperformance="off"  data-title="Creative" data-param1="01" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                            <div className="slider_text_box">
                                <div className="tp-caption tp-resizeme first_text" 
                                data-x="['left','left','left','left','30','center']" 
                                data-hoffset="['0','80','80','0']" 
                                data-y="['top','top','top','top']" 
                                data-voffset="['350','350','350','250','180','180']" 
                                data-fontsize="['50','50','50','42','42','32']"
                                data-lineheight="['62','62','62','52','52','42']"
                                data-width="['none']"
                                data-height="none"
                                data-whitespace="nowrape"
                                data-type="text" 
                                data-responsive_offset="on" 
                                data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;y:[175%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]"
                                data-textalign="['left','left','left','left','left','center']">Bringing brands <br />to life digitally</div>
                                <div className="tp-caption tp-resizeme single_img" 
                                data-x="['right','right','right','right','right','right']" 
                                data-hoffset="['0','0','0','0']" 
                                data-y="['top','top','top','top']" 
                                data-voffset="['180','180','180','180','0']" 
                                data-fontsize="['65','65','60','40','25']"
                                data-lineheight="['75','75','75','50','35']"
                                data-width="['none']"
                                data-height="none"
                                data-whitespace="normal"
                                data-type="text" 
                                data-responsive_offset="on" 
                                data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;y:[175%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]"
                                data-textalign="['left','left','left','left','left','center']">
                                    <img src="img/home-slider/slider-3.svg" alt="" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
    </Fragment>
  );
}

export default App;
