import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { read, update } from "../../functions/product";

const FormEditProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    detail: "",
    price: "",
  });

  const loadData = async (id) => {
    try {
      const res = await read(id);

      setData(res.data);
    } catch (error) {
      console.log("Error จ้า:", error);
    }
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadData(params.id);
  }, [params.id]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      update(params.id, data);
      navigate("/");
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
          value={data.name}
          onChange={(e) => handleChange(e)}
          placeholder="name..."
        />{" "}
        <br />
        <input
          className="border m-1"
          type="text"
          name="detail"
          value={data.detail}
          onChange={(e) => handleChange(e)}
          placeholder="detail..."
        />
        <br />
        <input
          className="border m-1"
          type="text"
          name="price"
          value={data.price}
          onChange={(e) => handleChange(e)}
          placeholder="price..."
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormEditProduct;
