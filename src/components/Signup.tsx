import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup";

const Signup = () => {
    return (
        <>
            <Formik
                initialValues={{ name: "", email: "" }}
                validationSchema={Yup.object({
                    name: Yup.string().required("Tên không được để trống"),
                    email: Yup.string()
                        .email('Email không hợp lệ')
                        .required('Email không được để trống')
                })}

                onSubmit={(values: any) => {
                    console.log("Dữ liệu submit: ", values);
                }}
            >
                <Form>
                    <label htmlFor="">Tên</label>
                    <Field name="name" />
                    <ErrorMessage name="name" component="div" className="text-red-500" />
                    <label htmlFor="">Email</label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" component={"div"} className="text-red-500" />
                    <button type="submit">Đăng ký</button>
                </Form>
            </Formik>
        </>
    )
}

export default Signup