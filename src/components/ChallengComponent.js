const ChallengeComponent = () => {
  const valor1 = 17;
  const valor2 = 22;

  const somarValores = () => {
    console.log(`A soma de ${valor1} + ${valor2} é igual a ${valor1 + valor2}`);
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-gray-100">
      <p>Valor 1: {valor1}</p>
      <p>Valor 2: {valor2}</p>
      <p>Soma dos valores: {valor1 + valor2}</p>
      <button onClick={somarValores}>
        Clique Aqui para somar no console
      </button>
    </div>
  );
};

export default ChallengeComponent;
