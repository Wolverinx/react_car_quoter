import React, {useState} from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './Resultado';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {

  const [ resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const [ cargando, guardarCargando] = useState(false);

  // extraer datos
  const { cotizacion, datos } = resumen;

  return (
    <Contenedor>
      <Header
        titulo="Insurance Quoter"
      />

      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />

        { cargando ? <Spinner /> : null }

        { !cargando ? 
          <Resumen 
            datos={datos}
          />
          : null 
        }

        { !cargando ? 
          <Resultado 
            cotizacion={cotizacion}
          />
          : null 
        }
        
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
