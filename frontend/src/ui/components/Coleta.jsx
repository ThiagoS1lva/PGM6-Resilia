import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function Coleta(props) {
  const [pontosDeColeta, setPontosDeColeta] = useState([]);
  const [consulta, setConsulta] = useState('');

  useEffect(() => {
    const { google } = props;
    const service = new google.maps.places.PlacesService(map);

    // Lógica para carregar os pontos de coleta
    const request = {
      query: consulta,
      fields: ['name', 'geometry', 'formatted_address'],
    };

    service.findPlaceFromQuery(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        const novosPontosDeColeta = results.map(result => ({
          nome: result.name,
          endereco: result.formatted_address,
          latitude: result.geometry.location.lat(),
          longitude: result.geometry.location.lng(),
        }));

        setPontosDeColeta(novosPontosDeColeta);
      } else {
        setPontosDeColeta([]);
      }
    });
  }, [consulta, props]);

  return (
    <div className={styles.coleta}>
      <h1>Pontos de Coleta Reciclável</h1>
      <input type="text" placeholder="Digite o nome do bairro" value={consulta} onChange={(e) => setConsulta(e.target.value)} />
      <Map google={props.google} zoom={14}>
        {pontosDeColeta.map(ponto => (
          <Marker key={ponto.nome} title={ponto.nome} position={{ lat: ponto.latitude, lng: ponto.longitude }} />
        ))}
      </Map>
    </div>
  );

  
}

export default GoogleApiWrapper({
  apiKey: 'SUA-CHAVE-DE-API-AQUI',
})(Coleta);
