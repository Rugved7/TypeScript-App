import ListItem from "./ListItem";

interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(itemObj: ListItem): void;
  removeItem(id: string): void;
}

export default class FullList implements List {
  static instance: FullList = new FullList();
  private constructor(private _list: ListItem[] = []) {}

  get list(): ListItem[] {
    return this._list;
  }
  // Load method ---> created after remove method

  load(): void {
    const storedList: string | null = localStorage.getItem("mylist");
    if (typeof storedList !== "string") return;

    const parsedList: { _id: string; _item: string; _checked: boolean }[] =
      JSON.parse(storedList);

    parsedList.forEach((itemObj) => {
      const newListItem = new ListItem(
        itemObj._id,
        itemObj._item,
        itemObj._checked
      );
      FullList.instance.addItem(newListItem);
    });
  }

  // save method
  save(): void {
    localStorage.setItem("mylist", JSON.stringify(this._list));
  }

  // clearing list
  clearList(): void {
    this._list = [];
    this.save();
  }
  // Adding Item to the List
  addItem(itemObj: ListItem): void {
    this.list.push(itemObj);
    this.save();
  }
  // removing the item from the list
  removeItem(id: string): void {
    this._list = this._list.filter((item) => (item.id! = id));
    this.save();
  }
}
