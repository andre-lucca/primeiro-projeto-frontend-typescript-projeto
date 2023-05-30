import { useNavigate } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'

import './styles.css'

export function Login(): JSX.Element {
  const navigateTo = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    navigateTo('/main')
  }

  return (
    <section className="login-container">
      <form
        className="login-form"
        onSubmit={handleSubmit}
      >
        <img src={logoImg} />
        <input type="e-mail" placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <p className="">
          Não tem cadastro?{' '}
          <a href="">
            Clique aqui!
          </a>
        </p>
        <button
          type="submit"
        >
          Login
        </button>
      </form>
    </section>
  )
}