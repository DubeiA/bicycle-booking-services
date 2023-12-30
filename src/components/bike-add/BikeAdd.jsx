import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import css from './bikeAdd.module.css';

const BikeAdd = ({ addBike, bikes }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      type: '',
      color: '',
      wheel_size: '',
      price: '',
      id: '',
      description: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'Must be at less 5 characters')
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      type: Yup.string()
        .min(5, 'Must be at less 5 characters')
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      color: Yup.string()
        .min(3, 'Must be at less 3 characters')
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      wheel_size: Yup.number()
        .positive()
        .min(1, 'min 1 and have to be positive')
        .max(100, 'max 100')
        .required('Required'),
      price: Yup.number()
        .positive()
        .min(1, 'min 1 and have to be positive')
        .max(999999, 'max 999999')
        .required('Required'),
      description: Yup.string()
        .min(5, 'Must be at less 5 characters')
        .required('Required'),
      id: Yup.string()
        .matches(/^Bike-2024-\d{3}$/, { message: 'example - Bike-2024-001' })
        .required('Required'),
    }),
    onSubmit: values => {
      const availableID = bikes.find(bike => bike.id === values.id);
      console.log(availableID);
      if (availableID) {
        alert('ID already in used ');
        return;
      }
      addBike(values);
      formik.resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={css.form}>
      <div className={css.wrapperInput}>
        <input
          className={css.input}
          id='name'
          name='name'
          placeholder='Name'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name.trim()}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className={css.errorName}>{formik.errors.name}</div>
        ) : null}

        <input
          className={css.input}
          id='type'
          name='type'
          placeholder='Type'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.type.trim()}
        />
        {formik.touched.type && formik.errors.type ? (
          <div className={css.errorType}>{formik.errors.type}</div>
        ) : null}

        <input
          className={css.input}
          id='color'
          name='color'
          type='text'
          placeholder='Color'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.color.trim()}
        />
        {formik.touched.color && formik.errors.color ? (
          <div className={css.errorColor}>{formik.errors.color}</div>
        ) : null}

        <input
          className={css.input}
          id='wheel_size'
          name='wheel_size'
          type='number'
          placeholder='Wheel size'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.wheel_size}
        />
        {formik.touched.wheel_size && formik.errors.wheel_size ? (
          <div className={css.errorWheel}>{formik.errors.wheel_size}</div>
        ) : null}

        <input
          className={css.input}
          id='price'
          name='price'
          type='number'
          placeholder='Price'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
        />
        {formik.touched.price && formik.errors.price ? (
          <div className={css.errorPrice}>{formik.errors.price}</div>
        ) : null}

        <input
          className={css.input}
          id='id'
          name='id'
          type='text'
          placeholder='ID (slug):Bike-2024-ХХХ'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.id.trim()}
        />
        {formik.touched.id && formik.errors.id ? (
          <div className={css.errorId}>{formik.errors.id}</div>
        ) : null}
      </div>
      <div className={css.wrapperArea}>
        <textarea
          className={css.textarea}
          name='description'
          id='description'
          cols='30'
          rows='10'
          placeholder='Description'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />
        {formik.touched.description && formik.errors.description ? (
          <div className={css.errorArea}>{formik.errors.description}</div>
        ) : null}
        <div className={css.wrapperBtn}>
          <button className={css.btn} type='submit'>
            Save
          </button>
          <button className={css.btn} type='button' onClick={formik.resetForm}>
            Clear
          </button>
        </div>
      </div>
    </form>
  );
};

export default BikeAdd;
