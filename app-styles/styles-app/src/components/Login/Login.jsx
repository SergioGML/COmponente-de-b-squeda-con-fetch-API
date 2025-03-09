import styles from '../Login/Login.module.css';

function Login({ theme = "dark" }) {
  return (
    <section className={`${styles.card} ${styles[theme]}`}>
      <h2 className={styles[theme]}>Login Cripto</h2>
      <input className={styles.input} type="text" placeholder="email" />
      <input className={styles.input} type="password" placeholder="contraseña" />
      <input className={`${styles.submit} ${styles[theme]}`} type="submit" />
      <p className={styles.p_dark}>¿Has olvidado la contraseña?</p>
      <button className={`${styles.button} ${styles[theme]}`}>Recuperar contraseña</button>
    </section>
  );
}

export default Login;



