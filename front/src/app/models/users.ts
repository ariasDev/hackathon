export class User {
    usuario: string;
    profile: string;

    constructor({ ...props }) {
        this.usuario = props.usuario || null;
        this.profile = props.profile || null;
    }
}
