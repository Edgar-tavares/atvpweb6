class ContaCorrente {
  constructor(nome, saldoInicial) {
    this.nome = nome;
    this.saldo = saldoInicial;
    this.transacoes = [];
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
      this.transacoes.push(`Depósito de R$${valor}`);
      console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    } else {
      console.log("Você precisa depositar algum valor.");
    }
  }

  sacar(valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      this.transacoes.push(`Saque de R$${valor}`);
      console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    } else {
      console.log("Saldo insuficiente.");
    }
  }

  verificarSaldo() {
    console.log(`Saldo atual da conta de ${this.nome}: R$${this.saldo}`);
  }

  mostrarHistorico() {
    if (this.transacoes.length > 0) {
      console.log("Histórico de Transações:");
      this.transacoes.forEach((transacao, index) => {
        console.log(`${index + 1}. ${transacao}`);
      });
    } else {
      console.log("Você não possui histórico de transferências.");
    }
  }

  sair() {
    operacao = alert("Volte depois e gaste mais!");
  }
}

const nome = prompt("Digite o nome do titular da conta:");
const saldoInicial = parseFloat(prompt("Digite o saldo inicial da conta:"));

const minhaConta = new ContaCorrente(nome, saldoInicial);

minhaConta.verificarSaldo();

let operacao;

do {
  operacao = prompt("Escolha a operação (1 - Depósito, 2 - Saque, 3 - Histórico de Transação, 4 - Sair):");

  if (operacao === "1") {
    const valorDeposito = parseFloat(prompt("Digite o valor a ser depositado:"));
    minhaConta.depositar(valorDeposito);
  } else if (operacao === "3") {
    minhaConta.mostrarHistorico();
  } else if (operacao === "2") {
    const valorSaque = parseFloat(prompt("Digite o valor a ser sacado:"));
    minhaConta.sacar(valorSaque);
  } else if (operacao === "4") {
    minhaConta.sair();
  } else {
    console.log("Opção inválida.");
  }
} while (operacao !== "4");

minhaConta.verificarSaldo();
