import axios from "axios";
const url = import.meta.env.VITE_API + "product/";

export const removeData = async (id) => await axios.delete(url + id);
export const createData = async (form) => await axios.post(url, form);
export const getData = async () => await axios.get(url);
