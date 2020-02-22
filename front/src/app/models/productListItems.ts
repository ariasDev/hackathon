import { Product } from './producto';

export class ProductListItem extends Product {

    public product: Product;
    public amount: number;

    constructor({ ...props }) {
        super(props.product || {});
        this.amount = props.amount || null;
    }
}
