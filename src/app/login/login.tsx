import { Input } from "@/components/input";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        await axios({
          url: "https://fakestoreapi.com/auth/login",
          method: "POST",
          data: values,
        });
        resetForm();
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    },
  });
  const { handleChange, values, handleSubmit } = formik;
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[400px] mx-auto-border rounded px-4"
    >
      <Input
        label="Username"
        name="username"
        id="username"
        onChange={handleChange}
        value={values.username}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        id="password"
        onChange={handleChange}
        value={values.password}
      />
      <button
        disabled={loading}
        className="bg-blue-500 rounded text-white px-4 py-2"
      >
        {loading ? "Loading" : "Login"}
      </button>
    </form>
  );
}
