
function mainEscopo(){ // Função para calcular o IMC do Usuário

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeForm(e){

        e.preventDefault(); // previne o evento default de enviar o formulário assim que clicar em enviar

        const inputPeso = e.target.querySelector('#peso');
        const inputAltura = e.target.querySelector('#altura');
        
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);
        console.log(peso, altura);

        if (!peso){
            setResultado('Peso inválido.', false);
            return;
        }

        if (!altura){
            setResultado('Altura inválida', false);
            return;
        }

        const usuarioIMC = getcalculoImc(peso, altura);
        const textoIMC = getTabelaImc(usuarioIMC);
        const msg = `Seu IMC é ${usuarioIMC} (${textoIMC})`;

        setResultado(msg, true);

    }
    form.addEventListener('submit', recebeForm);

    function getcalculoImc(peso, altura) {
        const imc = peso / altura ** 2;
        return imc.toFixed(2);
    }

    function getTabelaImc(usuarioIMC) {

        const tabela = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',
            'Obesidade grau 2','Obesidade grau 3'];

        if ( usuarioIMC >= 40)  return tabela[5]; // função de uma linha em JS pode ser escrito assim sem os blocos {}
        if (usuarioIMC >= 35)   return tabela[4];
        if (usuarioIMC >= 30)   return tabela[3];
        if (usuarioIMC >= 25)   return tabela[2];
        if (usuarioIMC >= 18.5) return tabela[1];
        if (usuarioIMC < 18.5)  return tabela[0];
    
    }

    function criaParagrafo(){
        const p = document.createElement('p');
        return p;
    }

    function setResultado(msg, isValid){  // Função para colocar o resultado dentro da div resultado.
       
        const resultado = document.querySelector('.resultado');
        resultado.innerHTML = ''; // Deixa a div resultado vazia.
        
        const p = criaParagrafo(); //Cria paragrafo para colocar na div

        if (isValid){
            p.classList.add('paragrafo-resultado');
        }
        else{
            p.classList.add('invalid');
        }
        p.innerHTML = msg;
        resultado.appendChild(p);

        
    }

    

}
mainEscopo();
