import { ProductListItem } from './productListItems'

export class Factura {

    idFactura: number;
    fecha: Date;
    ValorTotal: number;
    Productos: ProductListItem[];

    constructor({ ...props }) {
        this.idFactura = props.idFactura || null;
        this.fecha = props.fecha || null;
        this.ValorTotal = props.ValorTotal || null;
        this.Productos = props.Productos || new ProductListItem({});
    }
}
