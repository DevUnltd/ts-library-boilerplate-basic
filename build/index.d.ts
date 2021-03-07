declare module "index" {
    import "./index.css";
    class MyLibrary {
        constructor();
        myMethod: () => boolean;
    }
    export default MyLibrary;
}
declare module "tests/index.test" { }
