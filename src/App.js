import Cabecera from './componentes/Cabecera';
import Menu from './componentes/Menu';
import Principal from './componentes/Principal';
import Anuncios from './componentes/Anuncios';
import Pie from './componentes/Pie';

import ANUNCIOS from './constantes/ANUNCIOS';
import OPCIONES from './constantes/OPCIONES';

function App() {
  return (
    <>
      <Cabecera texto="Prueba"/>
      <Menu opciones={OPCIONES}/>
      <Principal/>
      <Anuncios anuncios={ANUNCIOS} />
      <Pie/>
    </>
  );
}

export default App;
