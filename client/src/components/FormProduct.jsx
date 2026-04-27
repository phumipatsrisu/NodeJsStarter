import axios from "axios";
import { useState, useEffect } from "react";
import { createData, removeData } from "../../functions/product";
const url = import.meta.env.VITE_API + "product/";
const FormProduct = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({});
  
  const loadData = async () => {
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    loadData();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      createData(form);
      loadData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = async (id) => {
    try {
      removeData(id);
      loadData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="border m-1"
          type="text"
          name="name"
          onChange={(e) => handleChange(e)}
          placeholder="name..."
        />{" "}
        <br />
        <input
          className="border m-1"
          type="text"
          name="detail"
          onChange={(e) => handleChange(e)}
          placeholder="detail..."
        />
        <br />
        <input
          className="border m-1"
          type="text"
          name="price"
          onChange={(e) => handleChange(e)}
          placeholder="price..."
        />
        <button>Submit</button>
      </form>
      <table className="border">
        <thead className="border">
          <tr>
            <th className="border">#</th>
            <th className="border">Name</th>
            <th className="border">Detail</th>
            <th className="border">Price</th>
            <th className="border">Aciton</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((item, index) => (
                <tr key={index}>
                  <td className="border">{index + 1}</td>
                  <td className="border">{item.name}</td>
                  <td className="border">{item.detail}</td>
                  <td className="border">{item.price}</td>
                  <td
                    className="border bg-red-300"
                    onClick={() => handleRemove(item._id)}
                  >
                    delete
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default FormProduct;
