
function validar_cpf(){
    const cpf = document.getElementById("cpf").value;

    if(cpf.length !== 11){
        document.getElementById("validade").value = `Inválido`;
        document.getElementById("validade").className = "invalido";
        return
    }

    const proximo_digito = (cpf_incompleto) => {
        let somatoria = 0;

        for (let i = 0; i < cpf_incompleto.length; i++) {
            let digito_atual = cpf_incompleto.charAt(i);

            let constante = (cpf_incompleto.length + 1 - i);

            somatoria += Number(digito_atual) * constante;
        }
        const resto = somatoria % 11;
        
        return resto < 2 ? "0" : (11 - resto).toString();
    }

    let primeiro_digito = proximo_digito(cpf.substring(0,9));
    let segundo_digito = proximo_digito(cpf.substring(0,9) + primeiro_digito);

    let cpf_correto = cpf.substring(0,9) + primeiro_digito + segundo_digito;

    if(cpf !== cpf_correto) {
        document.getElementById("validade").value = `Inválido`;
        document.getElementById("validade").className = "invalido";
        return;
    }

    document.getElementById("validade").value = `Válido`;
    document.getElementById("validade").className = "valido";
    
}
/*-------------------------------------------------------------------------------*/

function calcular_celsius(){
    let faren = parseFloat(document.getElementById("farenheit").value);
    let cel = 0;
    cel = (faren - 32) * 5/9;

    document.getElementById("celsius").value = cel.toFixed(2);
}

function calcular_farenheit(){
    let cels = parseFloat(document.getElementById("celsius").value);
    let fare = 0;
    fare = (cels * 9/5) + 32;

    document.getElementById("farenheit").value = fare.toFixed(2);
}
/*-------------------------------------------------------------------------------*/

const botao = document.getElementById("botao_calcular");

botao.addEventListener('click', function(){
    let n1 = Number(document.getElementById("nota1").value);
    let n2 = Number(document.getElementById("nota2").value);
    let n3 = Number(document.getElementById("nota3").value);
    let status = document.getElementById("status");
    status.classList.remove("aprovado", "exame", "reprovado");

    let media = (n1 + n2 + n3)/3;

    if(media >= 7) {
        document.getElementById("status").value = `Média: ${media.toFixed(2)} - Aprovado`;
        status.classList.toggle("aprovado");
    } else if (media >= 4 && media < 7) {
        let v_10 = 10 - media;
        document.getElementById("status").value = `Média: ${media.toFixed(2)} - Exame, Faltam ${v_10.toFixed(2)} para 10`;
        status.classList.toggle("exame");
    } else {
        document.getElementById("status").value = `Média: ${media.toFixed(2)} - Reprovado`;
        status.classList.toggle("reprovado");
    }

});
/*-------------------------------------------------------------------------------*/
function calcular_resumo(){

    const bandeira = document.getElementById("bandeira").value;
    let valor = Number(document.getElementById("valor").value);
    let quantidade_parcelas = Number(document.getElementById("parcelas").value);
    let taxa = 0;

    switch(bandeira) {
        case "visa":
               taxa = 0.02 
                
            break;
        case "master":
                taxa = 0.0185

            break;
        case "elo":
                taxa = 0.03

            break;
    }

    let taxa_bandeira = valor * taxa;
    let juros_totais = valor * (0.0035 * quantidade_parcelas);
    let taxa_mensal = 12.5 * quantidade_parcelas;
    let valor_total = valor + taxa_bandeira + juros_totais + taxa_mensal;
    let valor_parcelas = valor_total / quantidade_parcelas;
    document.getElementById("valor_taxa").value = `Valor taxa: ${taxa_bandeira.toFixed(2)}`;
    document.getElementById("valor_juros").value = `Valor juros: ${juros_totais.toFixed(2)}`;
    document.getElementById("valor_parcela").value = `Valor parcelas: ${valor_parcelas.toFixed(2)}`;
}
/*-------------------------------------------------------------------------------*/
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask(){
  const textItem = taskInput.value.trim();
  if (textItem !== ''){
    const newTask = document.createElement('li');
    newTask.innerHTML = `
    <span>${textItem}</span>
    <button onclick="delet(this)">Remover</button>
    <button onclick="editar(this)">Editar</button>
    <button onclick="completar(this)">Concluir</button>
    `;
   taskList.appendChild(newTask);
   taskInput.value = '';
  }
}

function delet(button){
  const taskToRemove = button.parentElement;
  taskList.removeChild(taskToRemove);
}

function completar(button){
  const taskToComplete = button.parentElement;
  taskToComplete.classList.toggle("completed");
}

function editar(button){
  const taskToEdit = button.parentElement;
  const taskText = taskToEdit.querySelector('span').innerText;
  const newText = prompt('Editar', taskText);
  taskToEdit.innerHTML = `
    <span>${newText}</span>
    <button onclick="delet(this)">Remover</button>
    <button onclick="editar(this)">Editar</button>
    <button onclick="completar(this)">Concluir</button>
    `;
}
