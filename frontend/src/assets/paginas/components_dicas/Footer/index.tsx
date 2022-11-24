import './styles.css'

function Footer() {
    return (
        <footer className='footer1'>
            <div>
                <a href='#/creditos'> Desenvolvido por </a>
                <img className='face' />
            </div>

            <div>
                <a href='#/' className='paginaprincipal'>Página Principal</a>
                <a href='#/o-que-fazemos' className='oqfazemos'>O Que Fazemos</a>
                <a href='#/como-fazemos' className='comofazemos'>Como Fazemos</a>
                <a href='#/crescemos' className='crescemos'>Crescemos</a>
                <a href='#/onde-estamos' className='ondeestamos'>Onde Estamos</a>
            </div>
        </footer>


    )
}

export default Footer