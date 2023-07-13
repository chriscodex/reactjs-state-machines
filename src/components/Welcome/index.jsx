import './styles.css'

function Welcome() {
  return (
    <div className='Welcome'>
      <p className='Welcome__title title'>¡Hoy es el día!</p>
      <p className='Welcome-description description'>¡Bienvenido al espectáculo inolvidable de Coldplay! ¡Consigue tus entradas y únete a la fiesta musical!</p>
      <button className='Welcome-cancel button'>Comenzar</button>
    </div>
  )
}

export { Welcome }