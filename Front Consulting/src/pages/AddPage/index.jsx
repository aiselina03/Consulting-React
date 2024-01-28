import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.scss"
import { useNavigate } from "react-router-dom";

function AddPage() {
  const navigate = useNavigate();
  function handleAdd(val) {
    fetch("http://localhost:7000/", {method:"Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(val)
  })
    .then((res) => res.json())
    navigate("/");
  }
  return (
    <>
    <div className="addPage">
      
            <Formik 
        initialValues={{ name: "", desc: "", image: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          desc: Yup.string().required("Required"),
          image: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleAdd(values)
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="form">
       
          <label htmlFor="name"></label>
          <Field className="field" name="name" type="text" placeholder="name"/>
          <ErrorMessage name="name" />

          <label htmlFor="desc"></label>
          <Field className="field" name="desc" type="text"  placeholder="desc"/>
          <ErrorMessage name="desc" />

          <label htmlFor="image"></label>
          <Field className="field" name="image" type="text"  placeholder="image"/>
          <ErrorMessage name="image" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>

    </>
  );
}

export default AddPage;
