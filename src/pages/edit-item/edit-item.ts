import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Data } from '../../providers/data/data';
import { HomePage } from '../../pages/home/home';


@IonicPage()
@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})
export class EditItemPage {

	selectedItem: any;

  constructor(public alertCtrl: AlertController, public view: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  	this.selectedItem = this.navParams.get('selectedItem');
  }

  doPrompt(){
  	let prompt = this.alertCtrl.create ({
  	title: 'Edit Saved',
  	message: "The Item you edit has been save",

  	buttons: [
  		{
  			text: 'Okay',
  			handler: data => {
  				this.navCtrl.push(HomePage, {
  					val: 'homelang'
  				})

  				console.log ('Saved Clicked');
  			}
  		}
  	]
  	}); 

  	prompt.present();
  } 

  /*ionViewDidLoad(){
  	this.title = this.navParams.get ('title');
  	this.description = this.navParams.get('description');
  }*/

  saveItem() {
    console.log('saved item: ', this.selectedItem);
    this.doPrompt();
   	this.view.dismiss(this.selectedItem);

  }

  close(){
  	this.view.dismiss();
  }
}
