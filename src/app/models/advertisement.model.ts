export class Advertisement {

    constructor(
        public _id?: string,
<<<<<<< Updated upstream
        public ProductName?: string,
        public Description?: number,
        public Brand?: string[],
        public Price?: string,
        public Category?: string,
        public Condition?:string,
        public DateEnabled?:Date,
        public Lifetime?:Date,
        public Imagelink?:string
=======
        public productName?: string,
        public description?: string,
        public brand?: string,
        public price?: number,
        public category?: string,
        public condition?: string,
        public date?: Date,
        public lifetime?: Date,
        public imageLink?: string
>>>>>>> Stashed changes
    ){}

}
