export class Product {
    productId: number;
    name: string;
    precio: number;

    constructor({ ...props }) {
        this.productId = props.productId || null;
        this.name = props.name || null;
        this.precio = props.precio || null;
    }
}
