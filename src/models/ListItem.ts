export interface Item {
  id: string;
  item: string;
  checked: boolean;
}

export default class ListItem implements Item {
  constructor(
    private _id: string = "",
    private _item: string = "",
    private _checked: boolean = false
  ) {}
// getter keyword
  get id(): string {
    return this._id;
  }
  // setter keyword
  set id(id:string){
    this.id = id 
  }

// for item
  get item(): string {
    return this._item;
  }
  // setter keyword
  set item(item:string){
    this.item = item 
  }

// for checked
  get checked(): boolean {
    return this._checked;
  }
  // setter keyword
  set checked(checked:boolean){
    this.checked = checked 
  }

  
}
