type PurchaseTypeModel = {
    id: string;
    nama: "sewa" | "angsuran";
  };
  
  export const purchaseTypeData: PurchaseTypeModel[] = [
    { id: "1", nama: "sewa" },
    { id: "2", nama: "angsuran" },
  ];
  