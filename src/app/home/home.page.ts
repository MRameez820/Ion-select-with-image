import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
		selectedcurrency = "aud";
currencies = [
{"name" : "aud" ,"capital": "AUD" ,"imagesrc" :"assets/currency/aud.png"},
  {"name" :"cad", "capital": "CAD", "imagesrc" :"assets/currency/cad.png"},
{"name" : "chf" , "capital": "CHF", "imagesrc" :"assets/currency/chf.png"},
  {"name" :"czk", "capital": "CZK" , "imagesrc" :"assets/currency/czk.png"},
{"name" : "dkk" , "capital": "DKK", "imagesrc" :"assets/currency/dkk.png"},
  {"name" :"eur", "capital": "EUR", "imagesrc" :"assets/currency/eur.png"},
  {"name" :"nok", "capital": "NOK", "imagesrc" :"assets/currency/nok.png"},
  {"name" :"pln", "capital": "PLN", "imagesrc" :"assets/currency/pln.png"},
  {"name" :"rub", "capital": "RUB", "imagesrc" :"assets/currency/rub.png"},
  {"name" :"sek", "capital": "SEK", "imagesrc" :"assets/currency/sek.png"},
  {"name" :"usd", "capital": "USD", "imagesrc" :"assets/currency/usd.png"}
  ];
  constructor() {}


    loadcurrency() {
    setTimeout (() => {
     var radios= document.getElementsByClassName('alert-radio-label');
		for (let index = 0; index < radios.length; index++) {
        let singrad = radios[index];
		singrad.innerHTML = singrad.innerHTML.concat('<img src='+this.currencies[index].imagesrc+' style="width:30px; position:absolute; right:20px;"/>');
	(singrad as HTMLElement).style.fontSize  = "22px";
     (singrad as HTMLElement).style.textTransform  = "uppercase";
	 }
  }, 200);
}
  
  }
