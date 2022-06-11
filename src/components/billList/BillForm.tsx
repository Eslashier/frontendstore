import "../styles/forms.css";

export default function AddProduct() {
    return (
        <div>
            <form className="form" id="addProduct">
                <label >Product name</label>
                <input type="text" id="name" placeholder="Product name..."/>
                <label >Description</label>
                <input type="text" id="description" placeholder="Product description..."/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
  }