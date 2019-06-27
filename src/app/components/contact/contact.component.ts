import { Component, OnInit } from '@angular/core';

import { AmChartsService  } from "amcharts3-angular2";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private AmCharts: AmChartsService) { }

  private chart: any;

  ngOnInit() {
    window.scroll(0, 0);




    // this.chart = this.AmCharts.makeChart("chartdiv", {
   
      var map = this.AmCharts.makeChart("chartdiv", {
   
    // var map = AmCharts.makeChart("chartdiv", {
      type: "map",
      // type : 'chart',
      "theme": "light",
      pathToImages: "https://www.amcharts.com/lib/3/images/",
  
      imagesSettings: {
          rollOverColor: "#919191",
          rollOverScale: 3,
          selectedScale: 3,
          selectedColor: "#919191",
          color: "#919191"//#13564e"
      },
  
      zoomControl: {
          buttonFillColor: "#919191"
      },
  
      areasSettings: {
          unlistedAreasColor: "#919191"
      },
  
      dataProvider: {
          map: "worldLow",
            // chart : 'worldLow',
          images: [{
              zoomLevel: 15,
              scale: 0.5,
              title: "INDIA",
              latitude: 27.12,
              longitude: 78.42,
              width: 34,
              height: 34,
              imageURL :'assets/images/7.png'
          },
          {
              zoomLevel: 15,
              scale: 0.5,
              title: "UAE",
              latitude: 27.12,
              longitude: 58.42,
              width: 34,
              height: 34,
              imageURL :'assets/images/8.png'
       
            },
          {
              zoomLevel: 15,
              scale: 0.5,
              title: "SWEDEN",
              latitude: 63.12,
              longitude: 18.42,
              width: 34,
              height: 34,
              imageURL :'assets/images/9.png'
       
          },
          {
              zoomLevel: 15,
              scale: 0.5,
              title: "MALAYSIA",
              latitude: 3.12,
              longitude: 105.42,
              width: 34,
              height: 34,
              imageURL :'assets/images/10.png'
       
          },
          {
              zoomLevel: 15,
              scale: 0.5,
              title: "USA",
              latitude: 63.12,
              longitude: -110.42,
              width: 34,
              height: 34,
              imageURL :'assets/images/11.png'
       
          },
          ]
      }
  });
  
  
  map.addListener("positionChanged", updateCustomMarkers);

    // this.chart.addListener("positionChanged", updateCustomMarkers);

  
  function updateCustomMarkers(event) {
      // get map object
      var map = event.chart;
  
      //  this.chart = event.chart;
  
      // go through all of the images
      for (var x in map.dataProvider.images) {
          // get MapImage object
          // var image = this.chart.dataProvider.images[x];

          var image = map.dataProvider.images[x];

          // check if it has corresponding HTML element
          if ('undefined' == typeof image.externalElement)
              image.externalElement = createCustomMarker(image);
  
          // reposition the element accoridng to coordinates
          image.externalElement.style.top = map.latitudeToY(image.latitude) + 'px';
          image.externalElement.style.left = map.longitudeToX(image.longitude) + 'px';
      }
  }
  
  
  function createCustomMarker(image) {
      // create holder
      var holder = document.createElement('div');
      holder.className = 'map-marker';
      holder.title = image.title;
      holder.style.position = 'absolute';
  
      // maybe add a link to it?
      if (undefined != image.url) {
          holder.onclick = function () {
              window.location.href = image.url;
          };
          holder.className += ' map-clickable';
      }
  
      // create dot
      var dot = document.createElement('div');
      dot.className = 'dot';
      holder.appendChild(dot);
  
      // create pulse
      var pulse = document.createElement('div');
      pulse.className = 'pulse-One';
      holder.appendChild(pulse);
  
      // append the marker to the map container
      image.chart.chartDiv.appendChild(holder);
  
      return holder;
  }
  






  }

}
