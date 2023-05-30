import { useLocation, useNavigate } from 'react-router-dom'

import type { Teacher } from '../Main'

import backArrowImg from '../../assets/back-arrow.svg'
import logoImg from '../../assets/logo.svg'

import './styles.css'

export function Detail(): JSX.Element {
  const teacher: Teacher = useLocation().state
  const navigateTo = useNavigate()

  const handleBackwardClick = (): void => {
    navigateTo('/main')
  }

  return (
    <section className="detail-container">
      <img
        className="back-arrow"
        src={backArrowImg}
        onClick={handleBackwardClick}
      />
      <img className="logo" src={logoImg} />
      <div className="detail-card-container">
        <img
          className="avatar"
          src={teacher.avatar}
        />
        <h2>{teacher.name}</h2>
        <span>{teacher.stack}</span>
        <hr />
        <span>Bio</span>
        <p>
          {teacher.bio}
        </p>
      </div>
    </section>
  )
}