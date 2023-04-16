import styles from '../styles/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerLinks}>
        <li>
          <Link href="/politica-privacidad">Política de Privacidad</Link>
        </li>
        <li>
          <Link href="/terminos-y-condiciones">Términos y Condiciones</Link>
        </li>
        <li>
          <Link href="/seguridad">Política de Seguridad</Link>
        </li>
      </ul>
      <ul className={styles.footerLinks}>
        <li>
          <Link href="/redes-sociales">Redes Sociales</Link>
        </li>
        <li>
          <Link href="/ubicacion">Ubicación</Link>
        </li>
        <li>
          <Link href="/contacto">Contacto</Link>
        </li>
      </ul>
      <ul className={styles.footerLinks}>
        <li>
          <Link href="/empresa-1">Empresa 1</Link>
        </li>
        <li>
          <Link href="/empresa-2">Empresa 2</Link>
        </li>
        <li>
          <Link href="/empresa-3">Empresa 3</Link>
        </li>
      </ul>
    </footer>
  )
}
