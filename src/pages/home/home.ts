import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { Data } from '../../providers/data/data';
import { EditItemPage } from '../../pages/edit-item/edit-item';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public items = [];

   constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
 	this.dataService.getData().then((todos) => {
 
      if(todos){
        this.items = todos;
      }
 
    });
  }

  ionViewDidLoad(){

 
  }

  	addItem(){
  		let addModal = this.modalCtrl.create(AddItemPage);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();
  	}

  	saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }
  	viewItem(item){
  		this.navCtrl.push(ItemDetailPage, {
    	item: item
  });
  	}

  	deleteItem(item){
  		for(var i = 0; i < this.items.length; i++) {
 
      if(this.items[i] == item){
        this.items.splice(i, 1);
        this.dataService.save(this.items);
      }
 
    }
  	}

  	editItem(item){
  	console.log('picked item: ', item);
    let addModal = this.modalCtrl.create(EditItemPage, {
      selectedItem: item });

    addModal.onDidDismiss((item) => {
      if(item){
        this.dataService.save(this.items);
        console.log('returned item: ', item)
      }
    });
 addModal.present();
  }
  
}
