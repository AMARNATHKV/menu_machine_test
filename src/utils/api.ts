export async function fetchMenus() {
    const res = await fetch('/api/menus');
    return res.json();
  }
  
  export async function fetchMenuItems(menuId: string) {
    const res = await fetch(`/api/items?menuId=${menuId}`);
    return res.json();
  }