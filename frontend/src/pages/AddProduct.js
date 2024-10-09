// src/components/AddProduct.js

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/AddProduct.css'; // Asegúrate de que este archivo exista y esté en la ruta correcta

const AddProduct = () => {
  // Valores iniciales del formulario
  const initialValues = {
    nombre: '',
    descripcion: '',
    cantidad: '',
    precio: '',
    categoria: '',
  };

  // Esquema de validación usando Yup
  const validationSchema = Yup.object({
    nombre: Yup.string()
      .required('El nombre es obligatorio'),
    descripcion: Yup.string()
      .required('La descripción es obligatoria'),
    cantidad: Yup.number()
      .typeError('La cantidad debe ser un número')
      .required('La cantidad es obligatoria')
      .min(1, 'La cantidad debe ser al menos 1'),
    precio: Yup.number()
      .typeError('El precio debe ser un número')
      .required('El precio es obligatorio')
      .min(0.01, 'El precio debe ser mayor que 0'),
    categoria: Yup.string()
      .required('Selecciona una categoría'),
  });

  // Función que maneja el envío del formulario
  const onSubmit = (values, { resetForm }) => {
    // Aquí puedes manejar el envío de los datos, por ejemplo, enviarlos a un servidor
    console.log('Producto agregado:', values);
    alert('Producto agregado exitosamente.');
    resetForm();
  };

  return (
    <div className="form-container">
      <h2>Agregar Nuevo Producto</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {formik => (
          <Form className="form-horizontal">
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <Field
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ingresa el nombre del producto"
                autoComplete="off"
              />
              <ErrorMessage name="nombre" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="descripcion">Descripción</label>
              <Field
                type="text"
                id="descripcion"
                name="descripcion"
                placeholder="Ingresa la descripción"
                autoComplete="off"
              />
              <ErrorMessage name="descripcion" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="cantidad">Cantidad</label>
              <Field
                type="number"
                id="cantidad"
                name="cantidad"
                placeholder="Ingresa la cantidad"
                min="1"
                autoComplete="off"
              />
              <ErrorMessage name="cantidad" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="precio">Precio</label>
              <Field
                type="number"
                id="precio"
                name="precio"
                placeholder="Ingresa el precio"
                min="0.01"
                step="0.01"
                autoComplete="off"
              />
              <ErrorMessage name="precio" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="categoria">Categoría</label>
              <Field as="select" id="categoria" name="categoria">
                <option value="">Selecciona una categoría</option>
                <option value="Electrónica">Electrónica</option>
                <option value="Ropa">Ropa</option>
                <option value="Hogar">Hogar</option>
                <option value="Juguetes">Juguetes</option>
                {/* Añade más categorías según sea necesario */}
              </Field>
              <ErrorMessage name="categoria" component="div" className="error-message" />
            </div>

            <div className="form-group full-width">
              <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>
                Agregar Producto
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddProduct;
