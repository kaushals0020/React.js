import FruitInfo from './FruitInfo'; // Importing FruitInfo component

export default function FruitBasket() {
  const favoriteFruit = "Mango";
  const favAnimal = "Leopard";
  return (
    <>
      <h1>What's in the fruit basket?</h1>
      <FruitInfo fruit={favoriteFruit} /> 

      <h1>Who is on the Tree</h1>
      <FruitInfo animal={favAnimal}/>
    </>
  );
}
