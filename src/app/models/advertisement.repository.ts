
import { Injectable } from "@angular/core";
import { Advertisement } from "./advertisement.model";
import { RestDataSource } from "./rest.datasource";
import { ResponseModel } from "./response.model";

@Injectable()
export class AdvertisementRepository {

    private Advertisement: Advertisement[] = [];
    

    constructor(private dataSource: RestDataSource) {
        dataSource.getAdvertisementList().subscribe(data => {
            this.Advertisement = data;
        });
    }

    getAdvertisement(): Advertisement[] {
        console.log(this.Advertisement.filter(item => {
            console.log(new Date(item.Lifetime), new Date(), );
            return item.Lifetime < new Date();

            
        }));
        return (this.Advertisement.filter(item => new Date(item.Lifetime) > new Date()).concat(this.Advertisement.filter(item => new Date(item.Lifetime) < new Date())));
    }

    getUserAdvertisement(username: string): Advertisement[] {
        this.Advertisement.filter(item => item.owner.username === username)
        return (this.Advertisement.filter(item => item.owner.username === username));
    }

    getItem(id: string): Advertisement {
        return (this.Advertisement.find(item => item._id === id));
    }

    //This also works to push a new advertisement
    async saveAdvertisement(item: Advertisement) {

        // If it does not have id, then create a new item.
        if (item._id == null || item._id == "") {
            this.dataSource.insertAdvertisement(item)
                .subscribe(response => {
                    if(response._id) // If API created
                    {
                        this.Advertisement.push(response);
                    }
                    else{ // If API send error.
                        // Convert into ResponseModel to get the error message.
                        let error = response as ResponseModel;  
                        alert(`Error: ${error.message}`);
                    }
                });
        } else {
            // If it has id, then update a existing item.
            this.dataSource.updateAdvertisement(item).subscribe(response => {
                if (response.success) {
                    this.Advertisement.splice(this.Advertisement.
                        findIndex(i => i._id == item._id), 1, item);
                }
                else{
                    alert(`Error: ${response.message}`);
                }        
            });
        }
    }

    deleteAdvertisement(id: string) {
        this.dataSource.deleteAdvertisement(id).subscribe(response => {
            if (response.success) {
                this.Advertisement.splice(this.Advertisement.
                    findIndex(item => item._id == id), 1);                                
            }
            else{
                alert(`Error: ${response.message}`);
            }
        })
    }

}