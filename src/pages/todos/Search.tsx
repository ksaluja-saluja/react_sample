import { useState } from "react";
import * as yup from "yup";
import { useGetTodos } from "../hooks/useGetTodos";
import ResultTODOs from "./Result";
import { useFormik } from "formik";
import { ErrorContainer } from "../../components/Styles";

const SearchTODOs = () => {
  const [todoId, setTodoId] = useState<number | undefined>(undefined);

  const { loading, todos } = useGetTodos({
    url: "https://jsonplaceholder.typicode.com/todos",
    id: todoId,
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    todoId: undefined,
  };

  const schema = yup.object({
    firstName: yup.string().required("first name is required"),
    lastName: yup.string().required("last name is required"),
    todoId: yup.number().required("id is required"),
  });
  const fetchTODO = (values: any) => {
    if (values?.todoId) {
      setTodoId(values.todoId);
    }
  };

  const form = useFormik({
    initialValues: initialValues,
    onSubmit: fetchTODO,
    validationSchema: schema,
  });

  const displayResults = () => {
    const todoToReturn = !!todos
      ? Array.isArray(todos)
        ? todos[0]
        : todos
      : null;

    return <ResultTODOs todo={todoToReturn}></ResultTODOs>;
  };

  return (
    <>
      <p>Search TODOs</p>
      <form onSubmit={form.handleSubmit}>
        <input
          id="firstName"
          name="firstName"
          placeholder="first name"
          value={form.values.firstName}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        ></input>
        <input
          id="lastName"
          name="lastName"
          placeholder="last name"
          value={form.values.lastName}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        ></input>
        <input
          id="todoId"
          name="todoId"
          placeholder="id to search"
          value={form.values.todoId}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        ></input>
        <ErrorContainer>
          {form.errors.firstName &&
            form.touched.firstName &&
            form.errors.firstName}
        </ErrorContainer>
        <button type="submit">Click here to search</button>
      </form>

      {loading && <p>Fetching todo - {todoId} ..</p>}
      {!loading && displayResults()}
    </>
  );
};

export default SearchTODOs;
