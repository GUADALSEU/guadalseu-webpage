import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import './Formulario.css'
export const Formulario = () => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [asunto, setAsunto] = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleChangeNombre = (e) => setNombre(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangeAsunto = (e) => setAsunto(e.target.value);
  const handleChangeMensaje = (e) => setMensaje(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    Email.send({
      SecureToken: process.env.TOKEN_SMTPJS,
      To: 'administracion@guadalseu.com',
      From: "axelurizarmartin@gmail.com",
      Subject: "Nuevo contacto desde la web",
      Body: `Nombre: ${nombre}` + `<br/> Email: ${email}` + `<br/> Asunto: ${asunto}` + `<br/> Mensaje: ${mensaje}`
    })
      .then((msg) => {
        if (msg === 'OK') toast.success('Gracias por contactar con nosotros!', {
          style: {
            border: '2px solid #a83468'
          },
          iconTheme: {
            primary: '#a83468'
          }
        })
        else toast.error('Algo ha ido mal', {
          style: {
            border: '2px solid #a83468'
          },
          iconTheme: {
            primary: '#a83468',
          }
        })
      })
  }

  return (
    <form onSubmit={handleSubmit} method='post' className='d-flex flex-column w-75 align-items-center justify-content-center py-5'>
      <div className='d-flex justify-content-center align-items-center w-100 pb-4'>
        <div className='d-flex flex-column w-50 mx-3 cajaInputs'>
          <fieldset>
            <legend className='fw-bold color-secundario'>Nombre y apellido</legend>
            <input className='mb-2 w-100' type="text" id='nombre' required onChange={handleChangeNombre} />
          </fieldset>
          <fieldset>
            <legend className='fw-bold color-secundario'>Email</legend>
            <input className='mb-2 w-100' type="email" id='email' required onChange={handleChangeEmail} />
          </fieldset>
          <fieldset>
            <legend className='fw-bold color-secundario'>Asunto</legend>
            <input className='mb-2 w-100' type="text" id='Asunto' required onChange={handleChangeAsunto} />
          </fieldset>
        </div>
        <fieldset className='w-50 mx-3 cajaInputs'>
          <legend className='fw-bold color-secundario'>Mensaje</legend>
          <textarea className='mb-2 w-100' id='mensaje' placeholder='Escribe tu mensaje...' rows="6" cols="30" resize='none' required onChange={handleChangeMensaje}></textarea>
        </fieldset>
      </div>
      <label className='mb-4 ms-3 align-self-start'><input type='checkbox' required /> He leído y acepto la <Link to='/politicaPrivacidadFormulario' target='_blank'>Política de Privacidad.</Link></label>
      <button type='submit' id='boton' className='rounded-pill p-3 px-4'>Enviar</button>
    </form>
  )
}
