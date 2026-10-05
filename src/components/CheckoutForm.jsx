import { useState } from 'react'
import FormField from './FormField'
import './CheckoutForm.css'

const emptyForm = {
  fullName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  zip: '',
  cardNumber: '',
}

// Checks every field. Returns an object with one message per invalid field.
function validate(values) {
  const errors = {}

  if (values.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name.'
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  const phoneDigits = values.phone.replace(/\D/g, '')
  if (phoneDigits.length < 7 || phoneDigits.length > 15) {
    errors.phone = 'Please enter a valid phone number (7 to 15 digits).'
  }

  if (values.address.trim().length < 5) {
    errors.address = 'Please enter your street address.'
  }

  if (values.city.trim().length < 2) {
    errors.city = 'Please enter your city.'
  }

  if (!/^[A-Za-z0-9 -]{3,10}$/.test(values.zip.trim())) {
    errors.zip = 'Please enter a valid ZIP or postal code.'
  }

  const cardDigits = values.cardNumber.replace(/\s/g, '')
  if (!/^\d{16}$/.test(cardDigits)) {
    errors.cardNumber = 'Card number must be 16 digits.'
  }

  return errors
}

function CheckoutForm({ onSubmit }) {
  const [values, setValues] = useState(emptyForm)
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))

    // Clear this field's error as soon as the user starts fixing it
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  function handleSubmit(e) {
    e.preventDefault() // stop the page from reloading

    const newErrors = validate(values)
    setErrors(newErrors)

    // No keys in the errors object means the form is valid
    if (Object.keys(newErrors).length === 0) {
      onSubmit(values)
    }
  }

  return (
    <form className="checkout-form" onSubmit={handleSubmit} noValidate>
      <h2>Shipping Details</h2>
      <div className="form-grid">
        <div className="span-2">
          <FormField
            label="Full name"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            error={errors.fullName}
            placeholder="Jane Doe"
          />
        </div>
        <FormField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="jane@example.com"
        />
        <FormField
          label="Phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange}
          error={errors.phone}
          placeholder="+1 555 123 4567"
        />
        <div className="span-2">
          <FormField
            label="Street address"
            name="address"
            value={values.address}
            onChange={handleChange}
            error={errors.address}
            placeholder="123 Main Street"
          />
        </div>
        <FormField
          label="City"
          name="city"
          value={values.city}
          onChange={handleChange}
          error={errors.city}
          placeholder="Dubai"
        />
        <FormField
          label="ZIP / Postal code"
          name="zip"
          value={values.zip}
          onChange={handleChange}
          error={errors.zip}
          placeholder="12345"
        />
      </div>

      <h2>Payment</h2>
      <p className="demo-note">
        Demo only. Use the fake number 4242 4242 4242 4242. Never enter a real
        card number.
      </p>
      <div className="form-grid">
        <div className="span-2">
          <FormField
            label="Card number"
            name="cardNumber"
            value={values.cardNumber}
            onChange={handleChange}
            error={errors.cardNumber}
            placeholder="4242 4242 4242 4242"
          />
        </div>
      </div>

      <button type="submit" className="place-order-btn">
        Place Order
      </button>
    </form>
  )
}

export default CheckoutForm