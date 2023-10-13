import React from 'react';
import { Formik, Field, Form, ErrorMessage} from 'formik';
import Select from 'react-select';

const cities = [
  { value: 'kyiv', label: 'Київ' },
  { value: 'lviv', label: 'Львів' },
  // Додайте інші міста за необхідністю
];

const Agreement = () => {
    // const [selectedOption, setSelectedOption] = useState(null)

// console.log(selectedOption)


  const initialValues = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    city: { value: '', label: '' }
  };

  const onSubmit = (values) => {
        // Перетворюємо об'єкт міста на рядок
    console.log(values)
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <div>
            <label htmlFor="firstName">Ім'я:</label>
            <Field type="text" id="firstName" name="firstName" required />
            <ErrorMessage name="firstName" component="div" />
          </div>

          <div>
            <label htmlFor="lastName">Фамілія:</label>
            <Field type="text" id="lastName" name="lastName" required />
            <ErrorMessage name="lastName" component="div" />
          </div>

          <div>
            <label htmlFor="phone">Телефон:</label>
            <Field type="tel" id="phone" name="phone" required />
            <ErrorMessage name="phone" component="div" />
          </div>

          <div>
            <label htmlFor="email">Емейл:</label>
            <Field type="email" id="email" name="email" required />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="city">Місто:</label>

            <Field
    as={Select}
    isSearchable={true}
    name="city"
    options={cities}
    placeholder="Виберіть місто"
  />
            
            <ErrorMessage name="city" component="div" />
          </div>

          <div>
            <button type="submit">Відправити</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Agreement;