export type Global = {
  name?: any;
  category?: string;
  price?: number | string;
  qtd?: number | string;
  description: string;
  url?: HTMLImageElement | string;
  data?: string | number 
  item?: number;
  handleRemoveItem?: (data: string) => void;
  handleUpdateItem?: (data: string, action: string) => any,
  handleAddItem?: () => void;
  total?: any;
  cartTotal?: any,
  productObject?: any
  onClick?: (data: string, action: string) => void
  calculo?: any;
  produtos?: any;
  map?: any;
};

