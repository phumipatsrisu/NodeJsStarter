import axios from "axios";
import { useState, useEffect } from "react";
const FormProduct = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/product");
        setData(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    loadData();
  }, []);

  return (
    <div>
      <table className="border">
        <thead className="border">
          <tr>
            <th className="border">#</th>
            <th className="border">Name</th>
            <th className="border">Detail</th>
            <th className="border">Price</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((item, index) => (
                <tr key={index}>
                  <td className="border">{index+1}</td>
                  <td className="border">{item.name}</td>
                  <td className="border">{item.detail}</td>
                  <td className="border">{item.price}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default FormProduct;
