//estados filtros:
  //agente:
  const [sistema, setSistema] = useState('');
  const [desenvolvimento, setDesenvolvimento] = useState('');
  //descrição:
  const [offline, setOffline] = useState('');
  const [imposicao, setImposicao] = useState('');
  const [perdaComunicacao, setPerdaComunicacao] = useState('');
  const [faltaEnergia, setFaltaEnergia] = useState('');
  const [subtensao, setSubtensao] = useState('');
  const [normal, setNormal] = useState('');
  //tipo:
  const [operacao, setOperacao] = useState('');
  const [status, setStatus] = useState('');
  //data:
  const [dataInicial, setDataInicial] = useState('');
  const [dataFinal, setDataFinal] = useState('');
 
 
  const handleLogs = () => {
     
    return (      
      logs.map((logs) => {
     
        const filtroagente = logs.agente;
        const descricao = logs.descricao_falha;
        const filtrotipo = logs.tipo;
        const filtroData = logs.data;

        const agenteVazio = (sistema.length == 0 && desenvolvimento.length == 0);
        const descricaoVazio = (offline.length == 0 && imposicao.length == 0 && perdaComunicacao.length == 0 && faltaEnergia.length == 0 && subtensao.length == 0 && normal.length == 0 );
        const tipoVazio = (operacao.length == 0 && status.length == 0);
        const dataVazio = (dataInicial.length == 0 && dataFinal.length == 0);

        const campoAgente = (filtroagente == sistema || filtroagente == desenvolvimento);
        const campoDescricao = (descricao == offline || descricao == imposicao || descricao == perdaComunicacao || descricao == faltaEnergia || descricao == subtensao  || descricao == normal )
        const campoTipo = (filtrotipo == operacao || filtrotipo == status);

        let dataFormatInit = dataInicial;
        let init = dataFormatInit.split('-').reverse().join('.');
        let dataFormatFinal = dataFinal;
        let fim = dataFormatFinal.split('-').reverse().join('.');

       //const campoData = (filtroData == "15.03.2021 18:48:53" || filtroData == "15.03.2021 18:55:47");
       const campoData = (filtroData.includes(init) || filtroData.includes(fim));
       
     

        if(agenteVazio){
          if(campoDescricao && campoTipo && campoData){
            return (
              <RowList>
                <text>{logs.id_cruzamento}</text>
                <text>{logs.agente}</text>
                <text>{logs.descricao_falha}</text>
                <text>{logs.tipo}</text>
                <text>{logs.data}</text>
                <Trash2 size={18} className="mr-4" style={{'cursor':'pointer'}} onClick={() => {setAlert(true)}}/>
                {/* Colocar o id do log para excluir */}
              </RowList>
            )
          }
        }

        if(descricaoVazio){
          if(campoAgente && campoTipo && campoData){
            return (
              <RowList>
                <text>{logs.id_cruzamento}</text>
                <text>{logs.agente}</text>
                <text>{logs.descricao_falha}</text>
                <text>{logs.tipo}</text>
                <text>{logs.data}</text>
                <Trash2 size={18} className="mr-4" style={{'cursor':'pointer'}} onClick={() => {setAlert(true)}}/>
                {/* Colocar o id do log para excluir */}
              </RowList>
            )
          }
        }
        if(tipoVazio){
          if(campoAgente && campoDescricao && campoData){
            return (
              <RowList>
                <text>{logs.id_cruzamento}</text>
                <text>{logs.agente}</text>
                <text>{logs.descricao_falha}</text>
                <text>{logs.tipo}</text>
                <text>{logs.data}</text>
                <Trash2 size={18} className="mr-4" style={{'cursor':'pointer'}} onClick={() => {setAlert(true)}}/>
                {/* Colocar o id do log para excluir */}
              </RowList>
            )
          }
        }
        if(dataVazio){
          if(campoAgente && campoDescricao && campoTipo){
            return (
              <RowList>
                <text>{logs.id_cruzamento}</text>
                <text>{logs.agente}</text>
                <text>{logs.descricao_falha}</text>
                <text>{logs.tipo}</text>
                <text>{logs.data}</text>
                <Trash2 size={18} className="mr-4" style={{'cursor':'pointer'}} onClick={() => {setAlert(true)}}/>
                {/* Colocar o id do log para excluir */}
              </RowList>
            )
          }
        }

        if(descricaoVazio && tipoVazio && dataVazio){
          if(campoAgente){
            return (
              <RowList>
                <text>{logs.id_cruzamento}</text>
                <text>{logs.agente}</text>
                <text>{logs.descricao_falha}</text>
                <text>{logs.tipo}</text>
                <text>{logs.data}</text>
                <Trash2 size={18} className="mr-4" style={{'cursor':'pointer'}} onClick={() => {setAlert(true)}}/>
                {/* Colocar o id do log para excluir */}
              </RowList>
            )
          }
        }

        if(agenteVazio && tipoVazio && dataVazio){
          if(campoDescricao){
            return (
              <RowList>
                <text>{logs.id_cruzamento}</text>
                <text>{logs.agente}</text>
                <text>{logs.descricao_falha}</text>
                <text>{logs.tipo}</text>
                <text>{logs.data}</text>
                <Trash2 size={18} className="mr-4" style={{'cursor':'pointer'}} onClick={() => {setAlert(true)}}/>
                {/* Colocar o id do log para excluir */}
              </RowList>
            )
          }
        }

        if(agenteVazio && descricaoVazio && dataVazio){
          if(campoTipo){
            return (
              <RowList>
                <text>{logs.id_cruzamento}</text>
                <text>{logs.agente}</text>
                <text>{logs.descricao_falha}</text>
                <text>{logs.tipo}</text>
                <text>{logs.data}</text>
                <Trash2 size={18} className="mr-4" style={{'cursor':'pointer'}} onClick={() => {setAlert(true)}}/>
                {/* Colocar o id do log para excluir */}
              </RowList>
            )
          }
        }

        if(agenteVazio && descricaoVazio && tipoVazio){
          if(campoData){
            return (
              <RowList>
                <text>{logs.id_cruzamento}</text>
                <text>{logs.agente}</text>
                <text>{logs.descricao_falha}</text>
                <text>{logs.tipo}</text>
                <text>{logs.data}</text>
                <Trash2 size={18} className="mr-4" style={{'cursor':'pointer'}} onClick={() => {setAlert(true)}}/>
                {/* Colocar o id do log para excluir */}
              </RowList>
            )
          }
        }
       
        //split('.').reverse().join('-')
        //se todos os campos estiverem preenchidos ou todos vazios
        if((campoAgente && campoDescricao && campoTipo && campoData || agenteVazio && descricaoVazio && tipoVazio && dataVazio )){
          return (
            <RowList>
              <text>{logs.id_cruzamento}</text>
              <text>{logs.agente}</text>
              <text>{logs.descricao_falha}</text>
              <text>{logs.tipo}</text>
              <text>{logs.data}</text>
              <Trash2 size={18} className="mr-4" style={{'cursor':'pointer'}} onClick={() => {setAlert(true)}}/>
              {/* Colocar o id do log para excluir */}
            </RowList>
          )
        }

      })
    )