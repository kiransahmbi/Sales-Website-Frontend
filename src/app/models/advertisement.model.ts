export class Advertisement {

    constructor(
        public _id?: string,
        public ProductName?: string,
        public Description?: number,
        public Brand?: string[],
        public Price?: string,
        public Category?: string,
        public Condition?:string,
        public DateEnabled?:Date,
        public Lifetime?:Date,
        public Imagelink?:string
    ){}

}
