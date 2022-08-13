import { Injectable } from "@angular/core";
import { QuestionAnswer } from "./questionAnswer.model";
import { RestDataSource } from "./rest.datasource";
import { ResponseModel } from "./response.model";

@Injectable()
export class QuestionAnswerRepository {

    private QuestionAnswer: QuestionAnswer[] = [];

    constructor(private dataSource: RestDataSource) {
        dataSource.getQuestionAnswerList().subscribe(data => {
            this.QuestionAnswer = data;
        });
    }

    getQuestionAnswer(id: string): QuestionAnswer[] {
        return (this.QuestionAnswer.filter(item => item.AdvertisementID === id));
    }

    getItem(id: string): QuestionAnswer {
        return (this.QuestionAnswer.find(item => item._id === id)!);
    }

    //This also works to push a new advertisement
    async saveQuestionAnswer(item: QuestionAnswer) {

        // If it does not have id, then create a new item.
        if (item._id == null || item._id == "") {
            this.dataSource.insertQuestionAnswer(item)
                .subscribe(response => {
                    if(response._id) // If API created
                    {
                        this.QuestionAnswer.push(response);
                    }
                    else{ // If API send error.
                        // Convert into ResponseModel to get the error message.
                        let error = response as ResponseModel;  
                        alert(`Error: ${error.message}`);
                    }
                });
        } else {
            // If it has id, then update a existing item.
            this.dataSource.updateQuestionAnswer(item).subscribe(response => {
                if (response.success) {
                    this.QuestionAnswer.splice(this.QuestionAnswer.
                        findIndex(i => i._id == item._id), 1, item);
                }
                else{
                    alert(`Error: ${response.message}`);
                }        
            });
        }
    }

    deleteQuestionAnswer(id: string) {
        this.dataSource.deleteQuestionAnswer(id).subscribe(response => {
            if (response.success) {
                this.QuestionAnswer.splice(this.QuestionAnswer.
                    findIndex(item => item._id == id), 1);                                
            }
            else{
                alert(`Error: ${response.message}`);
            }
        })
    }

}