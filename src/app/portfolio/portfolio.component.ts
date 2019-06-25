import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  config: any;
  collection = { count: 20, data: [] };

  constructor() { 
    
 
    this.config = {
      itemsPerPage: 8,
      currentPage: 1,
      // totalItems: this.collection.count
    };
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  activeOne = true;

  showWebProjts = false;
  data2=[];
  WebData = [];
  AndroidData = [];
  IosData = [];
  showAllProjects=true;
  showWebProjects =false; 
  showAndroidProjects =false;
  showIosProjects=false;
  showOneItems = true;
  showTwoItems = false;
  showThreeItems = false;
  ngOnInit() {
    this.data2 = [
      {id:1, url: 'assets/images/portfolio/gati-bg.jpg', url1: 'assets/images/portfolio/gati-mobile.png',name:'Gati',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',rlink:"/gati"},
      {id:2, url: 'assets/images/portfolio/mywaycar-bg.jpg', url1: 'assets/images/portfolio/mywaycar-mobie.png',name:'My way car',sm1:'assets/images/portfolio/playstore.png',rlink:"/mywaycar"},
      {id:3, url: 'assets/images/portfolio/dinero-bg.jpg', url1: 'assets/images/portfolio/dinero-dektop.png',name:'Dinero',sm1:'assets/images/portfolio/web.png',rlink:"/dinero"},
      {id:4, url: 'assets/images/portfolio/gohostels-bg.jpg', url1: 'assets/images/portfolio/gohostel-mobie.png',name:'GoHostel',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',sm3:'assets/images/portfolio/web.png',rlink:"/gohostel"},
      {id:5, url: 'assets/images/portfolio/dhukan-bg.jpg', url1: 'assets/images/portfolio/dhukan-mobie.png',name:'Dhukan',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',sm3:'assets/images/portfolio/web.png',rlink:"/dhukan"},
      {id:6, url: 'assets/images/portfolio/tripcare-bg.jpg', url1: 'assets/images/portfolio/tripcarei-mobile.png',name:'Tripcare',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',sm3:'assets/images/portfolio/web.png',rlink:"/tripcare"},
      {id:7, url: 'assets/images/portfolio/ucog-bg.jpg', url1: 'assets/images/portfolio/ucod-mobile.png',name:'UCOD',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',rlink:"/ucod"},
      {id:8, url: 'assets/images/portfolio/goodtimesi-bg.jpg', url1: 'assets/images/portfolio/goodtimes-dektop.png',name:'Goodtimes',sm3:'assets/images/portfolio/web.png',rlink:"/goodtimes"},
      {id:9, url: 'assets/images/portfolio2/al-masaood-bg.jpg', url1: 'assets/images/portfolio2/al-masaood.png',name:'Al-Masaood',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',rlink:"/all-masaood"},
      {id:9, url: 'assets/images/portfolio2/evexpro-bg.jpg', url1: 'assets/images/portfolio2/evexpro.png',name:'Evexpro',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',rlink:"/evexpro"},
      {id:10, url: 'assets/images/portfolio2/india-cme-bg.jpg', url1: 'assets/images/portfolio2/india-cme.png',name:'India-CME',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',rlink:"/india-cme"},
      {id:11, url: 'assets/images/portfolio2/koach-konnect-bg.jpg', url1: 'assets/images/portfolio2/koach-konnect.png',name:'Koach-Konnect',sm3:'assets/images/portfolio/web.png',rlink:"/koach-konnect"},
      {id:12, url: 'assets/images/portfolio2/loha-bg.jpg', url1: 'assets/images/portfolio2/loha.png',name:'LOHA',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',rlink:"/loha"},
      {id:13, url: 'assets/images/portfolio2/mahali-bg.jpg', url1: 'assets/images/portfolio2/mahali.png',name:'Mahali',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',sm3:'assets/images/portfolio/web.png',rlink:"/mahali"},
      {id:14, url: 'assets/images/portfolio2/questi-bg.jpg', url1: 'assets/images/portfolio2/questi.png',name:'Quest',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',rlink:"/quest"},
      {id:15, url: 'assets/images/portfolio2/samatha-bg.jpg', url1: 'assets/images/portfolio2/samatha.png',name:'Samatha',sm1:'assets/images/portfolio/playstore.png',rlink:"/samatha"},
      {id:16, url: 'assets/images/portfolio2/sandal-bg.jpg', url1: 'assets/images/portfolio2/sandals.png',name:'Sandals',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',rlink:"/sandals"},
      {id:17, url: 'assets/images/portfolio2/see-wheelers-bg.jpg', url1: 'assets/images/portfolio2/see-wheelers.png',name:'See-Wheelers',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',rlink:"/see-weeler"},
      {id:18, url: 'assets/images/portfolio2/solista-bg.jpg', url1: 'assets/images/portfolio2/solista.png',name:'Solista',sm3:'assets/images/portfolio/web.png',rlink:"/solista"},
      {id:19, url: 'assets/images/portfolio2/suwaah-bg.jpg', url1: 'assets/images/portfolio2/suwaah.png',name:'Suwaah',sm3:'assets/images/portfolio/web.png',rlink:"/suwaah"}
    ];



    this.WebData = [
      {id:3, url: 'assets/images/portfolio/dinero-bg.jpg', url1: 'assets/images/portfolio/dinero-dektop.png',name:'Dinero',sm1:'assets/images/portfolio/web.png',rlink:"/dinero"},
      {id:4, url: 'assets/images/portfolio/gohostels-bg.jpg', url1: 'assets/images/portfolio/gohostel-mobie.png',name:'GoHostel',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',sm3:'assets/images/portfolio/web.png',rlink:"/gohostel"},
      {id:5, url: 'assets/images/portfolio/dhukan-bg.jpg', url1: 'assets/images/portfolio/dhukan-mobie.png',name:'Dhukan',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',sm3:'assets/images/portfolio/web.png',rlink:"/dhukan"},
      {id:6, url: 'assets/images/portfolio/tripcare-bg.jpg', url1: 'assets/images/portfolio/tripcarei-mobile.png',name:'Tripcare',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',sm3:'assets/images/portfolio/web.png',rlink:"/tripcare"},
      {id:8, url: 'assets/images/portfolio/goodtimesi-bg.jpg', url1: 'assets/images/portfolio/goodtimes-dektop.png',name:'Goodtimes',sm3:'assets/images/portfolio/web.png',rlink:"/goodtimes"},
      {id:11, url: 'assets/images/portfolio2/koach-konnect-bg.jpg', url1: 'assets/images/portfolio2/koach-konnect.png',name:'Koach-Konnect',sm3:'assets/images/portfolio/web.png',rlink:"/koach-konnect"},
      {id:13, url: 'assets/images/portfolio2/mahali-bg.jpg', url1: 'assets/images/portfolio2/mahali.png',name:'Mahali',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',sm3:'assets/images/portfolio/web.png',rlink:"/mahali"},
      {id:18, url: 'assets/images/portfolio2/solista-bg.jpg', url1: 'assets/images/portfolio2/solista.png',name:'Solista',sm3:'assets/images/portfolio/web.png',rlink:"/solista"},
      {id:19, url: 'assets/images/portfolio2/suwaah-bg.jpg', url1: 'assets/images/portfolio2/suwaah.png',name:'Suwaah',sm3:'assets/images/portfolio/web.png',rlink:"/suwaah"}
    ];


    this.AndroidData = [
      {id:1, url: 'assets/images/portfolio/gati-bg.jpg', url1: 'assets/images/portfolio/gati-mobile.png',name:'Gati',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',rlink:"/gati"},
      {id:2, url: 'assets/images/portfolio/mywaycar-bg.jpg', url1: 'assets/images/portfolio/mywaycar-mobie.png',name:'My way car',sm1:'assets/images/portfolio/playstore.png',rlink:"/mywaycar"},
      {id:4, url: 'assets/images/portfolio/gohostels-bg.jpg', url1: 'assets/images/portfolio/gohostel-mobie.png',name:'GoHostel',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',sm3:'assets/images/portfolio/web.png',rlink:"/gohostel"},
      {id:5, url: 'assets/images/portfolio/dhukan-bg.jpg', url1: 'assets/images/portfolio/dhukan-mobie.png',name:'Dhukan',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',sm3:'assets/images/portfolio/web.png',rlink:"/dhukan"},
      {id:6, url: 'assets/images/portfolio/tripcare-bg.jpg', url1: 'assets/images/portfolio/tripcarei-mobile.png',name:'Tripcare',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',sm3:'assets/images/portfolio/web.png',rlink:"/tripcare"},
      {id:7, url: 'assets/images/portfolio/ucog-bg.jpg', url1: 'assets/images/portfolio/ucod-mobile.png',name:'UCOD',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',rlink:"/ucod"},
      {id:9, url: 'assets/images/portfolio2/al-masaood-bg.jpg', url1: 'assets/images/portfolio2/al-masaood.png',name:'Al-Masaood',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',rlink:"/all-masaood"},
      {id:9, url: 'assets/images/portfolio2/evexpro-bg.jpg', url1: 'assets/images/portfolio2/evexpro.png',name:'Evexpro',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',rlink:"/evexpro"},
      {id:10, url: 'assets/images/portfolio2/india-cme-bg.jpg', url1: 'assets/images/portfolio2/india-cme.png',name:'India-CME',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',rlink:"/india-cme"},
      {id:12, url: 'assets/images/portfolio2/loha-bg.jpg', url1: 'assets/images/portfolio2/loha.png',name:'LOHA',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',rlink:"/loha"},
      {id:13, url: 'assets/images/portfolio2/mahali-bg.jpg', url1: 'assets/images/portfolio2/mahali.png',name:'Mahali',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',sm3:'assets/images/portfolio/web.png',rlink:"/mahali"},
      {id:14, url: 'assets/images/portfolio2/questi-bg.jpg', url1: 'assets/images/portfolio2/questi.png',name:'Quest',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',rlink:"/quest"},
      {id:15, url: 'assets/images/portfolio2/samatha-bg.jpg', url1: 'assets/images/portfolio2/samatha.png',name:'Samatha',sm1:'assets/images/portfolio/playstore.png',rlink:"/samatha"},
      {id:16, url: 'assets/images/portfolio2/sandal-bg.jpg', url1: 'assets/images/portfolio2/sandals.png',name:'Sandals',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',rlink:"/sandals"},
      {id:17, url: 'assets/images/portfolio2/see-wheelers-bg.jpg', url1: 'assets/images/portfolio2/see-wheelers.png',name:'See-Wheelers',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',rlink:"/see-weeler"}
    ];

    this.IosData = [
      {id:1, url: 'assets/images/portfolio/gati-bg.jpg', url1: 'assets/images/portfolio/gati-mobile.png',name:'Gati',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',rlink:"/gati"},
      {id:4, url: 'assets/images/portfolio/gohostels-bg.jpg', url1: 'assets/images/portfolio/gohostel-mobie.png',name:'GoHostel',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',sm3:'assets/images/portfolio/web.png',rlink:"/gohostel"},
      {id:5, url: 'assets/images/portfolio/dhukan-bg.jpg', url1: 'assets/images/portfolio/dhukan-mobie.png',name:'Dhukan',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',sm3:'assets/images/portfolio/web.png',rlink:"/dhukan"},
      {id:6, url: 'assets/images/portfolio/tripcare-bg.jpg', url1: 'assets/images/portfolio/tripcarei-mobile.png',name:'Tripcare',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',sm3:'assets/images/portfolio/web.png',rlink:"/tripcare"},
      {id:7, url: 'assets/images/portfolio/ucog-bg.jpg', url1: 'assets/images/portfolio/ucod-mobile.png',name:'UCOD',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',rlink:"/ucod"},
      {id:9, url: 'assets/images/portfolio2/al-masaood-bg.jpg', url1: 'assets/images/portfolio2/al-masaood.png',name:'Al-Masaood',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',rlink:"/all-masaood"},
      {id:9, url: 'assets/images/portfolio2/evexpro-bg.jpg', url1: 'assets/images/portfolio2/evexpro.png',name:'Evexpro',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',rlink:"/evexpro"},
      {id:10, url: 'assets/images/portfolio2/india-cme-bg.jpg', url1: 'assets/images/portfolio2/india-cme.png',name:'India-CME',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',rlink:"/india-cme"},
      {id:12, url: 'assets/images/portfolio2/loha-bg.jpg', url1: 'assets/images/portfolio2/loha.png',name:'LOHA',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',rlink:"/loha"},
      {id:13, url: 'assets/images/portfolio2/mahali-bg.jpg', url1: 'assets/images/portfolio2/mahali.png',name:'Mahali',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',sm3:'assets/images/portfolio/web.png',rlink:"/mahali"},
      {id:14, url: 'assets/images/portfolio2/questi-bg.jpg', url1: 'assets/images/portfolio2/questi.png',name:'Quest',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',rlink:"/quest"},
      {id:16, url: 'assets/images/portfolio2/sandal-bg.jpg', url1: 'assets/images/portfolio2/sandals.png',name:'Sandals',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',rlink:"/sandals"},
      {id:17, url: 'assets/images/portfolio2/see-wheelers-bg.jpg', url1: 'assets/images/portfolio2/see-wheelers.png',name:'See-Wheelers',sm1:'assets/images/portfolio/playstore.png',sm2:'assets/images/portfolio/appstore.png',rlink:"/see-weeler"}
    ];




  }
  showAll(){
    this.showAllProjects=true;
    this.showWebProjects =false; 
    this.showAndroidProjects =false;
    this.showIosProjects=false;
  }
  showWeb(){
    this.showAllProjects=false;
    this.showWebProjects =true; 
    this.showAndroidProjects =false;
    this.showIosProjects=false;
    this.activeOne = false;
  }
showAndroid(){
  this.showAllProjects=false;
  this.showWebProjects =false; 
  this.showAndroidProjects =true;
  this.showIosProjects=false;
  this.activeOne = false;
}
showIos(){
  this.showAllProjects=false;
  this.showWebProjects =false; 
  this.showAndroidProjects =false;
  this.showIosProjects=true;
  this.activeOne = false;
}




}
