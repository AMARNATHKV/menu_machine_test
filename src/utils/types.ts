export interface Menu {
    id: string;
    name: string;
    description: string;
  }
  
  export interface MenuItem {
    id: string;
    menuId: string;
    name: string;
    description: string;
    price: number;
  }