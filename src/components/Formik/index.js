import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { HemaLabel, FormText, FormSelect, FormTextarea, ImageUpload, FormSwitch } from '../../utils';

const Basic = ({ data, cta }) => {
  const [intialValuesFromProp, setIntialValuesFromProp] = useState()
  console.log(data)
  useEffect(() => {
    const initialValues = data?.map(value => {
      return { [value.label]: value.initialValue }
    })
    setIntialValuesFromProp(initialValues.reduce(
      (obj, item) => Object.assign(obj, item), {}));
  }, [data])


  return (
    <div>
      {/* <h1>Anywhere in your app!</h1> */}
      <Formik
        initialValues={intialValuesFromProp}
        enableReinitialize
        validate={values => {
          const errors = {};
          data?.forEach(fields => {
            if (!values?.[fields.label] && fields.required) {
              errors[fields.label] = 'Required';
            }
          })


          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          cta(values)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          isSubmitting,
          /* and other goodies */
        }) => (

          <form onSubmit={handleSubmit} className="max-w-[600px] m-auto flex flex-wrap gap-[16px]">

            {data?.map(fields => {
              return (
                <div className={`${fields.fluid ? "w-full" : "w-[calc(50%-8px)]"} mb-[16px]`}>

                  <HemaLabel className="mb-[10px]" text={fields.label} Icon={fields.Icon} required={fields.required} />
                  {(fields.type === 'text' || fields.type === 'number') &&
                    <FormText
                      type={fields.type}
                      name={fields.label}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.[fields.label]}
                      placeholder={fields.placeholder}
                    />}

                  {(fields.type === 'select') &&
                    <FormSelect
                    setFieldValue={setFieldValue}
                      name={fields.label}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.[fields.label]}
                      placeholder={fields.placeholder}
                      options={fields.options}
                    />}
                  {(fields.type === 'textarea') &&
                    <FormTextarea

                      name={fields.label}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.[fields.label]}
                      placeholder={fields.placeholder}
                      options={fields.options}
                    />}
                  {(fields.type === 'upload-image') &&
                    <ImageUpload

                      name={fields.label}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.[fields.label]}
                      placeholder={fields.placeholder}
                      options={fields.options}
                      setFieldValue={setFieldValue}
                    />}
                  {(fields.type === 'switch') &&
                    <FormSwitch
                      name={fields.label}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.[fields.label]}
                      placeholder={fields.placeholder}
                      options={fields.options}
                      setFieldValue={setFieldValue}
                    />}


                  <div className="error">{errors[fields.label] && touched[fields.label] && errors[fields.label]}</div>
                </div>
              )
            })}




            <button type="submit" >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
};

export default Basic;